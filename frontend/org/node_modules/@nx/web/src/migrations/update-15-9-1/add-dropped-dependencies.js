"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nx/devkit");
function addDroppedDependencies(tree) {
    var _a, _b, _c, _d;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const devDependencies = {};
        const droppedDependencies = [
            '@nrwl/linter',
            '@nrwl/cypress',
            '@nrwl/jest',
            '@nrwl/rollup',
        ];
        const projects = (0, devkit_1.getProjects)(tree);
        for (const [_, projectConfiguration] of projects) {
            for (const [_, targetConfiguration] of Object.entries((_a = projectConfiguration.targets) !== null && _a !== void 0 ? _a : {})) {
                for (const droppedDependency of droppedDependencies) {
                    if ((_b = targetConfiguration.executor) === null || _b === void 0 ? void 0 : _b.startsWith(droppedDependency + ':')) {
                        devDependencies[droppedDependency] = devkit_1.NX_VERSION;
                    }
                }
            }
        }
        const nxJson = (0, devkit_1.readNxJson)(tree);
        for (const [_, targetConfiguration] of Object.entries((_c = nxJson === null || nxJson === void 0 ? void 0 : nxJson.targetDefaults) !== null && _c !== void 0 ? _c : {})) {
            for (const droppedDependency of droppedDependencies) {
                if ((_d = targetConfiguration.executor) === null || _d === void 0 ? void 0 : _d.startsWith(droppedDependency + ':')) {
                    devDependencies[droppedDependency] = devkit_1.NX_VERSION;
                }
            }
        }
        if (Object.keys(devDependencies).length > 0) {
            (0, devkit_1.addDependenciesToPackageJson)(tree, {}, devDependencies);
        }
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.default = addDroppedDependencies;
