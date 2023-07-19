"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compat = exports.cypressE2EConfigurationGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nx/devkit");
const js_1 = require("@nx/js");
const linter_1 = require("@nx/linter");
const path_1 = require("path");
const add_linter_1 = require("../../utils/add-linter");
const config_1 = require("../../utils/config");
const cypress_version_1 = require("../../utils/cypress-version");
const versions_1 = require("../../utils/versions");
const init_1 = require("../init/init");
const base_setup_1 = require("../base-setup/base-setup");
function cypressE2EConfigurationGenerator(tree, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const opts = normalizeOptions(tree, options);
        const tasks = [];
        if (!(0, cypress_version_1.installedCypressVersion)()) {
            tasks.push(yield (0, init_1.default)(tree, opts));
        }
        if (opts.bundler === 'vite') {
            tasks.push((0, devkit_1.addDependenciesToPackageJson)(tree, {}, { vite: versions_1.viteVersion }));
        }
        yield addFiles(tree, opts);
        addTarget(tree, opts);
        (0, add_linter_1.addLinterToCyProject)(tree, Object.assign(Object.assign({}, opts), { cypressDir: opts.directory }));
        if (!opts.skipFormat) {
            yield (0, devkit_1.formatFiles)(tree);
        }
        return (0, devkit_1.runTasksInSerial)(...tasks);
    });
}
exports.cypressE2EConfigurationGenerator = cypressE2EConfigurationGenerator;
function normalizeOptions(tree, options) {
    var _a, _b, _c, _d, _e;
    const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, options.project);
    if ((_a = projectConfig === null || projectConfig === void 0 ? void 0 : projectConfig.targets) === null || _a === void 0 ? void 0 : _a.e2e) {
        throw new Error(`Project ${options.project} already has an e2e target.
Rename or remove the existing e2e target.`);
    }
    if (!options.baseUrl &&
        !options.devServerTarget &&
        !projectConfig.targets.serve) {
        throw new Error(`The project ${options.project} does not have a 'serve' target.
In this case you need to provide a devServerTarget,'<projectName>:<targetName>[:<configName>]', or a baseUrl option`);
    }
    (_b = options.directory) !== null && _b !== void 0 ? _b : (options.directory = 'src');
    return Object.assign(Object.assign({}, options), { bundler: (_c = options.bundler) !== null && _c !== void 0 ? _c : 'webpack', rootProject: projectConfig.root === '.', linter: (_d = options.linter) !== null && _d !== void 0 ? _d : linter_1.Linter.EsLint, devServerTarget: (_e = options.devServerTarget) !== null && _e !== void 0 ? _e : (projectConfig.targets.serve ? `${options.project}:serve` : undefined) });
}
function addFiles(tree, options) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, options.project);
        const cyVersion = (0, cypress_version_1.installedCypressVersion)();
        const filesToUse = cyVersion && cyVersion < 10 ? 'v9' : 'v10';
        const hasTsConfig = tree.exists((0, devkit_1.joinPathFragments)(projectConfig.root, 'tsconfig.json'));
        const offsetFromProjectRoot = options.directory
            .split('/')
            .map((_) => '..')
            .join('/');
        const fileOpts = Object.assign(Object.assign({}, options), { dir: (_a = options.directory) !== null && _a !== void 0 ? _a : 'src', ext: options.js ? 'js' : 'ts', offsetFromRoot: (0, devkit_1.offsetFromRoot)(projectConfig.root), offsetFromProjectRoot, tsConfigPath: hasTsConfig
                ? `${offsetFromProjectRoot}/tsconfig.json`
                : (0, js_1.getRelativePathToRootTsConfig)(tree, projectConfig.root), tmpl: '' });
        (0, devkit_1.generateFiles)(tree, (0, path_1.join)(__dirname, 'files', filesToUse), projectConfig.root, fileOpts);
        if (filesToUse === 'v10') {
            (0, base_setup_1.addBaseCypressSetup)(tree, {
                project: options.project,
                directory: options.directory,
            });
            const cyFile = (0, devkit_1.joinPathFragments)(projectConfig.root, 'cypress.config.ts');
            const updatedCyConfig = yield (0, config_1.addDefaultE2EConfig)(tree.read(cyFile, 'utf-8'), {
                directory: options.directory,
                bundler: options.bundler,
            });
            tree.write(cyFile, updatedCyConfig);
        }
        if (cyVersion &&
            cyVersion < 7 &&
            tree.exists((0, devkit_1.joinPathFragments)(projectConfig.root, 'src', 'plugins', 'index.js'))) {
            (0, devkit_1.updateJson)(tree, (0, path_1.join)(projectConfig.root, 'cypress.json'), (json) => {
                json.pluginsFile = './src/plugins/index';
                return json;
            });
        }
        else if (cyVersion < 10) {
            const pluginPath = (0, path_1.join)(projectConfig.root, 'src/plugins/index.js');
            if (tree.exists(pluginPath)) {
                tree.delete(pluginPath);
            }
        }
        if (options.js) {
            (0, devkit_1.toJS)(tree);
        }
    });
}
function addTarget(tree, opts) {
    var _a;
    const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, opts.project);
    const cyVersion = (0, cypress_version_1.installedCypressVersion)();
    projectConfig.targets.e2e = {
        executor: '@nx/cypress:cypress',
        options: {
            cypressConfig: (0, devkit_1.joinPathFragments)(projectConfig.root, cyVersion && cyVersion < 10 ? 'cypress.json' : 'cypress.config.ts'),
            testingType: 'e2e',
        },
    };
    if (opts.baseUrl) {
        projectConfig.targets.e2e.options = Object.assign(Object.assign({}, projectConfig.targets.e2e.options), { baseUrl: opts.baseUrl });
    }
    else if (opts.devServerTarget) {
        const parsedTarget = (0, devkit_1.parseTargetString)(opts.devServerTarget);
        projectConfig.targets.e2e.options = Object.assign(Object.assign({}, projectConfig.targets.e2e.options), { devServerTarget: opts.devServerTarget, port: opts.port });
        projectConfig.targets.e2e.configurations = {
            [parsedTarget.configuration || 'production']: {
                devServerTarget: `${opts.devServerTarget}${parsedTarget.configuration ? '' : ':production'}`,
            },
        };
        const devServerProjectConfig = (0, devkit_1.readProjectConfiguration)(tree, parsedTarget.project);
        if ((_a = devServerProjectConfig.targets) === null || _a === void 0 ? void 0 : _a['serve-static']) {
            projectConfig.targets.e2e.configurations.ci = {
                devServerTarget: `${parsedTarget.project}:serve-static`,
            };
        }
    }
    else {
        throw new Error('Either baseUrl or devServerTarget must be provided');
    }
    (0, devkit_1.updateProjectConfiguration)(tree, opts.project, projectConfig);
}
exports.default = cypressE2EConfigurationGenerator;
exports.compat = (0, devkit_1.convertNxGenerator)(cypressE2EConfigurationGenerator);
