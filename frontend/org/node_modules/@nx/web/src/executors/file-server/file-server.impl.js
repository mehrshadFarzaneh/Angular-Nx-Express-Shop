"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const child_process_1 = require("child_process");
const chalk = require("chalk");
const devkit_1 = require("@nx/devkit");
const ignore_1 = require("ignore");
const fs_1 = require("fs");
const chokidar_1 = require("chokidar");
const os_1 = require("os");
const path_1 = require("path");
const package_json_1 = require("nx/src/utils/package-json");
const detectPort = require("detect-port");
// platform specific command name
const pmCmd = (0, os_1.platform)() === 'win32' ? `npx.cmd` : 'npx';
function getHttpServerArgs(options) {
    const args = [`-c${options.cacheSeconds}`];
    if (options.cors) {
        args.push(`--cors`);
    }
    if (options.host) {
        args.push(`-a=${options.host}`);
    }
    if (options.ssl) {
        args.push(`-S`);
    }
    if (options.sslCert) {
        args.push(`-C=${options.sslCert}`);
    }
    if (options.sslKey) {
        args.push(`-K=${options.sslKey}`);
    }
    if (options.proxyUrl) {
        args.push(`-P=${options.proxyUrl}`);
    }
    if (options.gzip) {
        args.push('-g');
    }
    if (options.brotli) {
        args.push('-b');
    }
    if (options.proxyOptions) {
        Object.keys(options.proxyOptions).forEach((key) => {
            args.push(`--proxy-options.${key}=${options.proxyOptions[key]}`);
        });
    }
    return args;
}
function getBuildTargetCommand(options) {
    const cmd = ['nx', 'run', options.buildTarget];
    if (options.parallel) {
        cmd.push(`--parallel`);
    }
    if (options.maxParallel) {
        cmd.push(`--maxParallel=${options.maxParallel}`);
    }
    return cmd;
}
function getBuildTargetOutputPath(options, context) {
    if (options.staticFilePath) {
        return options.staticFilePath;
    }
    let buildOptions;
    try {
        const target = (0, devkit_1.parseTargetString)(options.buildTarget, context.projectGraph);
        buildOptions = (0, devkit_1.readTargetOptions)(target, context);
    }
    catch (e) {
        throw new Error(`Invalid buildTarget: ${options.buildTarget}`);
    }
    // TODO: vsavkin we should also check outputs
    const outputPath = buildOptions.outputPath;
    if (!outputPath) {
        throw new Error(`Unable to get the outputPath from buildTarget ${options.buildTarget}. Make sure ${options.buildTarget} has an outputPath property or manually provide an staticFilePath property`);
    }
    return outputPath;
}
function getIgnoredGlobs(root) {
    const ig = (0, ignore_1.default)();
    try {
        ig.add((0, fs_1.readFileSync)(`${root}/.gitignore`, 'utf-8'));
    }
    catch (_a) { }
    try {
        ig.add((0, fs_1.readFileSync)(`${root}/.nxignore`, 'utf-8'));
    }
    catch (_b) { }
    return ig;
}
function createFileWatcher(root, projectRoot, changeHandler) {
    const ignoredGlobs = getIgnoredGlobs(root);
    const watcher = (0, chokidar_1.watch)([(0, devkit_1.joinPathFragments)(projectRoot, '**')], {
        cwd: root,
        ignoreInitial: true,
    });
    watcher.on('all', (_event, path) => {
        if (ignoredGlobs.ignores(path))
            return;
        changeHandler();
    });
    return () => watcher.close();
}
function fileServerExecutor(options, context) {
    return tslib_1.__asyncGenerator(this, arguments, function* fileServerExecutor_1() {
        let running = false;
        const run = () => {
            if (!running) {
                running = true;
                try {
                    const args = getBuildTargetCommand(options);
                    (0, child_process_1.execFileSync)(pmCmd, args, {
                        stdio: [0, 1, 2],
                    });
                }
                catch (_a) {
                    throw new Error(`Build target failed: ${chalk.bold(options.buildTarget)}`);
                }
                finally {
                    running = false;
                }
            }
        };
        let disposeWatch;
        if (options.watch) {
            const projectRoot = context.projectsConfigurations.projects[context.projectName].root;
            disposeWatch = createFileWatcher(context.root, projectRoot, run);
        }
        // perform initial run
        run();
        const outputPath = getBuildTargetOutputPath(options, context);
        if (options.spa) {
            const src = (0, path_1.join)(outputPath, 'index.html');
            const dst = (0, path_1.join)(outputPath, '404.html');
            // See: https://github.com/http-party/http-server#magic-files
            (0, fs_1.copyFileSync)(src, dst);
        }
        const args = getHttpServerArgs(options);
        const { path: pathToHttpServerPkgJson, packageJson } = (0, package_json_1.readModulePackageJson)('http-server', module.paths);
        const pathToHttpServerBin = packageJson.bin['http-server'];
        const pathToHttpServer = (0, path_1.resolve)(pathToHttpServerPkgJson.replace('package.json', ''), pathToHttpServerBin);
        // detect port as close to when used to prevent port being used by another process
        // when running in  parallel
        const port = yield tslib_1.__await(detectPort(options.port || 8080));
        args.push(`-p=${port}`);
        const serve = (0, child_process_1.fork)(pathToHttpServer, [outputPath, ...args], {
            stdio: 'pipe',
            cwd: context.root,
            env: Object.assign({ FORCE_COLOR: 'true' }, process.env),
        });
        const processExitListener = () => {
            serve.kill();
            if (disposeWatch) {
                disposeWatch();
            }
            if (options.spa) {
                (0, fs_1.unlinkSync)((0, path_1.join)(outputPath, '404.html'));
            }
        };
        process.on('exit', processExitListener);
        process.on('SIGTERM', processExitListener);
        serve.stdout.on('data', (chunk) => {
            if (chunk.toString().indexOf('GET') === -1) {
                process.stdout.write(chunk);
            }
        });
        serve.stderr.on('data', (chunk) => {
            process.stderr.write(chunk);
        });
        yield yield tslib_1.__await({
            success: true,
            baseUrl: `${options.ssl ? 'https' : 'http'}://${options.host}:${port}`,
        });
        return yield tslib_1.__await(new Promise((res) => {
            serve.on('exit', (code) => {
                if (code == 0) {
                    res({ success: true });
                }
                else {
                    res({ success: false });
                }
            });
        }));
    });
}
exports.default = fileServerExecutor;
