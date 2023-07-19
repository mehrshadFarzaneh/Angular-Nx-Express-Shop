"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verdaccioExecutor = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nx/devkit");
const fs_extra_1 = require("fs-extra");
const child_process_1 = require("child_process");
let childProcess;
/**
 * - set npm and yarn to use local registry
 * - start verdaccio
 * - stop local registry when done
 */
function verdaccioExecutor(options, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            require.resolve('verdaccio');
        }
        catch (e) {
            throw new Error('Verdaccio is not installed. Please run `npm install verdaccio` or `yarn add verdaccio`');
        }
        if (options.clear && options.storage && (0, fs_extra_1.existsSync)(options.storage)) {
            (0, fs_extra_1.removeSync)(options.storage);
        }
        const cleanupFunctions = options.location === 'none' ? [] : [setupNpm(options), setupYarn(options)];
        const processExitListener = (signal) => {
            if (childProcess) {
                childProcess.kill(signal);
            }
            for (const fn of cleanupFunctions) {
                fn();
            }
        };
        process.on('exit', processExitListener);
        process.on('SIGTERM', processExitListener);
        process.on('SIGINT', processExitListener);
        process.on('SIGHUP', processExitListener);
        try {
            yield startVerdaccio(options);
        }
        catch (e) {
            devkit_1.logger.error('Failed to start verdaccio: ' + e.toString());
            return {
                success: false,
            };
        }
        return {
            success: true,
        };
    });
}
exports.verdaccioExecutor = verdaccioExecutor;
/**
 * Fork the verdaccio process: https://verdaccio.org/docs/verdaccio-programmatically/#using-fork-from-child_process-module
 */
function startVerdaccio(options) {
    return new Promise((resolve, reject) => {
        childProcess = (0, child_process_1.fork)(require.resolve('verdaccio/bin/verdaccio'), createVerdaccioOptions(options), {
            env: Object.assign(Object.assign({}, process.env), { VERDACCIO_HANDLE_KILL_SIGNALS: 'true' }),
            stdio: ['inherit', 'pipe', 'pipe', 'ipc'],
        });
        childProcess.stdout.on('data', (data) => {
            process.stdout.write(data);
        });
        childProcess.stderr.on('data', (data) => {
            if (data.includes('VerdaccioWarning') ||
                data.includes('DeprecationWarning')) {
                process.stdout.write(data);
            }
            else {
                reject(data);
            }
        });
        childProcess.on('error', (err) => {
            reject(err);
        });
        childProcess.on('disconnect', (err) => {
            reject(err);
        });
        childProcess.on('exit', (code) => {
            if (code === 0) {
                resolve(code);
            }
            else {
                reject(code);
            }
        });
    });
}
function createVerdaccioOptions(options) {
    const verdaccioArgs = [];
    if (options.port) {
        verdaccioArgs.push('--listen', options.port.toString());
    }
    if (options.config) {
        verdaccioArgs.push('--config', options.config);
    }
    return verdaccioArgs;
}
function setupNpm(options) {
    var _a, _b, _c;
    try {
        (0, child_process_1.execSync)('npm --version');
    }
    catch (e) {
        return () => { };
    }
    let npmRegistryPath;
    try {
        npmRegistryPath = (_c = (_b = (_a = (0, child_process_1.execSync)(`npm config get registry --location ${options.location}`)) === null || _a === void 0 ? void 0 : _a.toString()) === null || _b === void 0 ? void 0 : _b.trim()) === null || _c === void 0 ? void 0 : _c.replace('\u001b[2K\u001b[1G', ''); // strip out ansi codes
        (0, child_process_1.execSync)(`npm config set registry http://localhost:${options.port}/ --location ${options.location}`);
        (0, child_process_1.execSync)(`npm config set //localhost:${options.port}/:_authToken="secretVerdaccioToken" --location ${options.location}`);
        devkit_1.logger.info(`Set npm registry to http://localhost:${options.port}/`);
    }
    catch (e) {
        throw new Error(`Failed to set npm registry to http://localhost:${options.port}/: ${e.message}`);
    }
    return () => {
        try {
            if (npmRegistryPath) {
                (0, child_process_1.execSync)(`npm config set registry ${npmRegistryPath} --location ${options.location}`);
                devkit_1.logger.info(`Reset npm registry to ${npmRegistryPath}`);
            }
            else {
                (0, child_process_1.execSync)(`npm config delete registry --location ${options.location}`);
            }
            (0, child_process_1.execSync)(`npm config delete //localhost:${options.port}/:_authToken  --location ${options.location}`);
        }
        catch (e) {
            throw new Error(`Failed to reset npm registry: ${e.message}`);
        }
    };
}
function setupYarn(options) {
    var _a, _b, _c;
    try {
        (0, child_process_1.execSync)('yarn --version');
    }
    catch (e) {
        return () => { };
    }
    let yarnRegistryPath;
    try {
        yarnRegistryPath = (_c = (_b = (_a = (0, child_process_1.execSync)(`yarn config get registry`)) === null || _a === void 0 ? void 0 : _a.toString()) === null || _b === void 0 ? void 0 : _b.trim()) === null || _c === void 0 ? void 0 : _c.replace('\u001b[2K\u001b[1G', ''); // strip out ansi codes
        (0, child_process_1.execSync)(`yarn config set registry http://localhost:${options.port}/`);
        devkit_1.logger.info(`Set yarn registry to http://localhost:${options.port}/`);
    }
    catch (e) {
        throw new Error(`Failed to set yarn registry to http://localhost:${options.port}/: ${e.message}`);
    }
    return () => {
        try {
            if (yarnRegistryPath) {
                (0, child_process_1.execSync)(`yarn config set registry ${yarnRegistryPath}`);
                devkit_1.logger.info(`Reset yarn registry to ${yarnRegistryPath}`);
            }
            else {
                (0, child_process_1.execSync)(`yarn config delete registry`);
            }
        }
        catch (e) {
            throw new Error(`Failed to reset yarn registry: ${e.message}`);
        }
    };
}
exports.default = verdaccioExecutor;
