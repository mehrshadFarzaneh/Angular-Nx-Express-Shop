"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeCyTsConfigNames = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nx/devkit");
const executor_options_utils_1 = require("@nx/devkit/src/generators/executor-options-utils");
function normalizeCyTsConfigNames(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projects = (0, devkit_1.getProjects)(tree);
        (0, executor_options_utils_1.forEachExecutorOptions)(tree, '@nx/cypress:cypress', (_, projectName) => {
            const projectConfig = projects.get(projectName);
            const newTsConfigPath = (0, devkit_1.joinPathFragments)(projectConfig.root, 'cypress', 'tsconfig.json');
            // if there is already a tsconfig.json in the cypress folder, then assume things are setup already
            if (!tree.exists(newTsConfigPath)) {
                moveProjectTsCyConfig(tree, projectConfig, newTsConfigPath);
                moveCyDirTsCyConfig(tree, projectConfig, newTsConfigPath);
                updateCyDirTsConfigReferences(tree, projectConfig);
            }
        });
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.normalizeCyTsConfigNames = normalizeCyTsConfigNames;
function moveProjectTsCyConfig(tree, projectConfig, newTsConfigPath) {
    if (tree.exists((0, devkit_1.joinPathFragments)(projectConfig.root, 'tsconfig.cy.json'))) {
        tree.rename((0, devkit_1.joinPathFragments)(projectConfig.root, 'tsconfig.cy.json'), newTsConfigPath);
        (0, devkit_1.updateJson)(tree, newTsConfigPath, (json) => {
            var _a, _b;
            json.extends = '../tsconfig.json';
            (_a = json.compilerOptions) !== null && _a !== void 0 ? _a : (json.compilerOptions = {});
            json.compilerOptions = Object.assign(Object.assign({}, json.compilerOptions), { sourceMap: false, outDir: '../../../dist/out-tsc' });
            (_b = json.include) !== null && _b !== void 0 ? _b : (json.include = []);
            json.include = json.include.map((p) => {
                if (p.startsWith('cypress/')) {
                    return p.replace('cypress/', '');
                }
                return `../${p}`;
            });
            return json;
        });
    }
}
function moveCyDirTsCyConfig(tree, projectConfig, newTsConfigPath) {
    if (tree.exists((0, devkit_1.joinPathFragments)(projectConfig.root, 'cypress', 'tsconfig.cy.json'))) {
        tree.rename((0, devkit_1.joinPathFragments)(projectConfig.root, 'cypress', 'tsconfig.cy.json'), newTsConfigPath);
        (0, devkit_1.updateJson)(tree, newTsConfigPath, (json) => {
            var _a;
            (_a = json.compilerOptions) !== null && _a !== void 0 ? _a : (json.compilerOptions = {});
            json.compilerOptions = Object.assign(Object.assign({}, json.compilerOptions), { sourceMap: false });
            return json;
        });
    }
}
function updateCyDirTsConfigReferences(tree, projectConfig) {
    if (!tree.exists((0, devkit_1.joinPathFragments)(projectConfig.root, 'cypress', 'tsconfig.json'))) {
        return;
    }
    (0, devkit_1.updateJson)(tree, (0, devkit_1.joinPathFragments)(projectConfig.root, 'tsconfig.json'), (json) => {
        var _a;
        (_a = json.references) !== null && _a !== void 0 ? _a : (json.references = []);
        if (!json.references) {
            return json;
        }
        const cyFile = json.references.find((p) => p.path.includes('tsconfig.cy.json'));
        if (cyFile) {
            json.references.splice(json.references.indexOf(cyFile), 1);
        }
        if (!json.references.some((r) => r.path === './cypress/tsconfig.json')) {
            json.references.push({
                path: './cypress/tsconfig.json',
            });
        }
        return json;
    });
}
exports.default = normalizeCyTsConfigNames;
