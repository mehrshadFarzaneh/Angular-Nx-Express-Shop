"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nx/devkit");
const versions_1 = require("../../utils/versions");
/* Updates @nrwl/web/babel to @nrwl/js/babel because web package is no longer necessary to use webpack/rollup + babel. */
function update(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // Add `@nrwl/js` in case it was missing before.
        (0, devkit_1.addDependenciesToPackageJson)(tree, {}, {
            '@nrwl/js': versions_1.nxVersion,
        });
        const projects = (0, devkit_1.getProjects)(tree);
        projects.forEach((config, name) => {
            var _a;
            const babelrcPath = (0, devkit_1.joinPathFragments)(config.root, '.babelrc');
            if (!tree.exists(babelrcPath))
                return;
            const babelrc = (0, devkit_1.readJson)(tree, babelrcPath);
            const idx = (_a = babelrc === null || babelrc === void 0 ? void 0 : babelrc.presets) === null || _a === void 0 ? void 0 : _a.findIndex((p) => typeof p === 'string'
                ? p === '@nrwl/web/babel'
                : p[0] === '@nrwl/web/babel');
            if (idx === -1)
                return;
            const preset = babelrc.presets[idx];
            if (typeof preset === 'string') {
                babelrc.presets.splice(idx, 1, '@nrwl/js/babel');
            }
            else if (Array.isArray(preset)) {
                babelrc.presets.splice(idx, 1, ['@nrwl/js/babel', preset[1]]);
            }
            (0, devkit_1.writeJson)(tree, babelrcPath, babelrc);
        });
    });
}
exports.default = update;
