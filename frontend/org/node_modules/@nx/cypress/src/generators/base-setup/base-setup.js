"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBaseCypressSetup = void 0;
const devkit_1 = require("@nx/devkit");
const js_1 = require("@nx/js");
const path_1 = require("path");
function addBaseCypressSetup(tree, options) {
    const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, options.project);
    if (tree.exists((0, devkit_1.joinPathFragments)(projectConfig.root, 'cypress.config.ts'))) {
        return;
    }
    const opts = normalizeOptions(tree, projectConfig, options);
    (0, devkit_1.generateFiles)(tree, (0, path_1.join)(__dirname, 'files'), projectConfig.root, Object.assign(Object.assign({}, opts), { offsetFromRoot: (0, devkit_1.offsetFromRoot)(projectConfig.root), offsetFromProjectRoot: opts.hasTsConfig ? opts.offsetFromProjectRoot : '', tsConfigPath: opts.hasTsConfig
            ? `${opts.offsetFromProjectRoot}tsconfig.json`
            : (0, js_1.getRelativePathToRootTsConfig)(tree, projectConfig.root), ext: '' }));
    if (opts.hasTsConfig) {
        (0, devkit_1.updateJson)(tree, (0, devkit_1.joinPathFragments)(projectConfig.root, 'tsconfig.json'), (json) => {
            // tsconfig doesn't have references so it shouldn't add them
            // like in the case of nextjs apps.
            if (!json.references) {
                return json;
            }
            const tsconfigPath = `./${options.directory}/tsconfig.json`;
            if (!json.references.some((ref) => ref.path === tsconfigPath)) {
                json.references.push({
                    path: tsconfigPath,
                });
            }
            return json;
        });
    }
    else {
        tree.rename((0, devkit_1.joinPathFragments)(projectConfig.root, options.directory, 'tsconfig.json'), (0, devkit_1.joinPathFragments)(projectConfig.root, 'tsconfig.json'));
    }
}
exports.addBaseCypressSetup = addBaseCypressSetup;
function normalizeOptions(tree, projectConfig, options) {
    var _a;
    (_a = options.directory) !== null && _a !== void 0 ? _a : (options.directory = 'cypress');
    const offsetFromProjectRoot = options.directory
        .split('/')
        .map((_) => '..')
        .join('/');
    const hasTsConfig = tree.exists((0, devkit_1.joinPathFragments)(projectConfig.root, 'tsconfig.json'));
    return Object.assign(Object.assign({}, options), { projectConfig, offsetFromProjectRoot: `${offsetFromProjectRoot}/`, hasTsConfig });
}
