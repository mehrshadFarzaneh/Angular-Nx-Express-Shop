"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nx/devkit");
/*
 *
 */
function update(tree) {
    var _a, _b, _c;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        for (const [name, config] of (0, devkit_1.getProjects)(tree)) {
            if (((_b = (_a = config.targets) === null || _a === void 0 ? void 0 : _a.build) === null || _b === void 0 ? void 0 : _b.executor) !== '@nrwl/web:rollup')
                continue;
            if (Array.isArray((_c = config.targets.build.options) === null || _c === void 0 ? void 0 : _c.format))
                continue;
            config.targets.build.options = Object.assign(Object.assign({}, config.targets.build.options), { format: ['esm', 'cjs'] });
            (0, devkit_1.updateProjectConfiguration)(tree, name, config);
        }
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.default = update;
