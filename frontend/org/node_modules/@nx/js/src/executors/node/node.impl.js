"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeExecutor = void 0;
const tslib_1 = require("tslib");
const chalk = require("chalk");
const child_process_1 = require("child_process");
const devkit_1 = require("@nx/devkit");
const client_1 = require("nx/src/daemon/client/client");
const crypto_1 = require("crypto");
const path_1 = require("path");
const async_iterable_1 = require("@nx/devkit/src/utils/async-iterable");
const buildable_libs_utils_1 = require("../../utils/buildable-libs-utils");
const kill_tree_1 = require("./lib/kill-tree");
function debounce(fn, wait) {
    let timeoutId;
    return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(fn, wait);
    };
}
function nodeExecutor(options, context) {
    var _a, _b, _c, _d;
    var _e;
    return tslib_1.__asyncGenerator(this, arguments, function* nodeExecutor_1() {
        (_a = (_e = process.env).NODE_ENV) !== null && _a !== void 0 ? _a : (_e.NODE_ENV = (_b = context === null || context === void 0 ? void 0 : context.configurationName) !== null && _b !== void 0 ? _b : 'development');
        const project = context.projectGraph.nodes[context.projectName];
        const buildTarget = (0, devkit_1.parseTargetString)(options.buildTarget, context.projectGraph);
        const buildOptions = (_c = project.data.targets[buildTarget.target]) === null || _c === void 0 ? void 0 : _c.options;
        if (!buildOptions) {
            throw new Error(`Cannot find build target ${chalk.bold(options.buildTarget)} for project ${chalk.bold(context.projectName)}`);
        }
        // Re-map buildable workspace projects to their output directory.
        const mappings = calculateResolveMappings(context, options);
        const fileToRun = (0, path_1.join)(context.root, buildOptions.outputPath, (_d = buildOptions.outputFileName) !== null && _d !== void 0 ? _d : 'main.js');
        const tasks = [];
        let currentTask = null;
        yield tslib_1.__await(yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues((0, async_iterable_1.createAsyncIterable)(({ done, next, error }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _f;
            const processQueue = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (tasks.length === 0)
                    return;
                const previousTask = currentTask;
                const task = tasks.shift();
                currentTask = task;
                yield (previousTask === null || previousTask === void 0 ? void 0 : previousTask.stop('SIGTERM'));
                yield task.start();
            });
            const debouncedProcessQueue = debounce(processQueue, (_f = options.debounce) !== null && _f !== void 0 ? _f : 1000);
            const addToQueue = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const task = {
                    id: (0, crypto_1.randomUUID)(),
                    killed: false,
                    childProcess: null,
                    promise: null,
                    start: () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        let buildFailed = false;
                        // Run the build
                        task.promise = new Promise((resolve, reject) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                            task.childProcess = (0, child_process_1.exec)(`npx nx run ${context.projectName}:${buildTarget.target}${buildTarget.configuration
                                ? `:${buildTarget.configuration}`
                                : ''}`, {
                                cwd: context.root,
                            }, (error, stdout, stderr) => {
                                if (
                                // Build succeeded
                                !error ||
                                    // If task was killed then another build process has started, ignore errors.
                                    task.killed) {
                                    resolve();
                                    return;
                                }
                                devkit_1.logger.info(stdout);
                                buildFailed = true;
                                if (options.watch) {
                                    devkit_1.logger.error(`Build failed, waiting for changes to restart...`);
                                    resolve(); // Don't reject because it'll error out and kill the Nx process.
                                }
                                else {
                                    devkit_1.logger.error(`Build failed. See above for errors.`);
                                    reject();
                                }
                            });
                        }));
                        // Wait for build to finish
                        yield task.promise;
                        // Task may have been stopped due to another running task.
                        // OR build failed, so don't start the process.
                        if (task.killed || buildFailed)
                            return;
                        // Run the program
                        task.promise = new Promise((resolve, reject) => {
                            var _a;
                            task.childProcess = (0, child_process_1.fork)((0, devkit_1.joinPathFragments)(__dirname, 'node-with-require-overrides'), (_a = options.runtimeArgs) !== null && _a !== void 0 ? _a : [], {
                                execArgv: getExecArgv(options),
                                stdio: [0, 1, 'pipe', 'ipc'],
                                env: Object.assign(Object.assign({}, process.env), { NX_FILE_TO_RUN: fileToRun, NX_MAPPINGS: JSON.stringify(mappings) }),
                            });
                            task.childProcess.stderr.on('data', (data) => {
                                // Don't log out error if task is killed and new one has started.
                                // This could happen if a new build is triggered while new process is starting, since the operation is not atomic.
                                if (options.watch && !task.killed) {
                                    devkit_1.logger.error(data.toString());
                                }
                            });
                            task.childProcess.once('exit', (code) => {
                                if (options.watch && !task.killed) {
                                    devkit_1.logger.info(`NX Process exited with code ${code}, waiting for changes to restart...`);
                                }
                                if (!options.watch)
                                    done();
                                resolve();
                            });
                            next({ success: true });
                        });
                    }),
                    stop: (signal = 'SIGTERM') => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        task.killed = true;
                        // Request termination and wait for process to finish gracefully.
                        // NOTE: `childProcess` may not have been set yet if the task did not have a chance to start.
                        // e.g. multiple file change events in a short time (like git checkout).
                        if (task.childProcess) {
                            yield (0, kill_tree_1.killTree)(task.childProcess.pid, signal);
                        }
                        yield task.promise;
                    }),
                };
                tasks.push(task);
            });
            const stopWatch = yield client_1.daemonClient.registerFileWatcher({
                watchProjects: [context.projectName],
                includeDependentProjects: true,
            }, (err, data) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _g;
                if (err === 'closed') {
                    devkit_1.logger.error(`Watch error: Daemon closed the connection`);
                    process.exit(1);
                }
                else if (err) {
                    devkit_1.logger.error(`Watch error: ${(_g = err === null || err === void 0 ? void 0 : err.message) !== null && _g !== void 0 ? _g : 'Unknown'}`);
                }
                else {
                    devkit_1.logger.info(`NX File change detected. Restarting...`);
                    yield addToQueue();
                    yield debouncedProcessQueue();
                }
            }));
            const stopAllTasks = (signal = 'SIGTERM') => {
                for (const task of tasks) {
                    task.stop(signal);
                }
            };
            process.on('SIGTERM', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                stopWatch();
                stopAllTasks('SIGTERM');
                process.exit(128 + 15);
            }));
            process.on('SIGINT', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                stopWatch();
                stopAllTasks('SIGINT');
                process.exit(128 + 2);
            }));
            process.on('SIGHUP', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                stopWatch();
                stopAllTasks('SIGHUP');
                process.exit(128 + 1);
            }));
            yield addToQueue();
            yield processQueue();
        })))));
    });
}
exports.nodeExecutor = nodeExecutor;
function getExecArgv(options) {
    const args = ['-r', require.resolve('source-map-support/register')];
    if (options.inspect === true) {
        options.inspect = "inspect" /* InspectType.Inspect */;
    }
    if (options.inspect) {
        args.push(`--${options.inspect}=${options.host}:${options.port}`);
    }
    return args;
}
function calculateResolveMappings(context, options) {
    const parsed = (0, devkit_1.parseTargetString)(options.buildTarget, context.projectGraph);
    const { dependencies } = (0, buildable_libs_utils_1.calculateProjectDependencies)(context.projectGraph, context.root, parsed.project, parsed.target, parsed.configuration);
    return dependencies.reduce((m, c) => {
        if (c.node.type !== 'npm' && c.outputs[0] != null) {
            m[c.name] = (0, devkit_1.joinPathFragments)(context.root, c.outputs[0]);
        }
        return m;
    }, {});
}
exports.default = nodeExecutor;
