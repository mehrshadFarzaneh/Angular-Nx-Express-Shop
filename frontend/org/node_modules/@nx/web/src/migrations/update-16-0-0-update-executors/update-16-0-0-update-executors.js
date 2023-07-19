"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nx/devkit");
const versions_1 = require("../../utils/versions");
function update(host) {
    var _a, _b, _c, _d, _e, _f;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projects = (0, devkit_1.getProjects)(host);
        const deps = {};
        for (const [name, config] of projects.entries()) {
            let updated = false;
            // webpack
            if (((_b = (_a = config === null || config === void 0 ? void 0 : config.targets) === null || _a === void 0 ? void 0 : _a.build) === null || _b === void 0 ? void 0 : _b.executor) === '@nrwl/web:webpack') {
                config.targets.build.executor = '@nx/webpack:webpack';
                deps['@nx/webpack'] = versions_1.nxVersion;
                updated = true;
            }
            if (((_d = (_c = config === null || config === void 0 ? void 0 : config.targets) === null || _c === void 0 ? void 0 : _c.serve) === null || _d === void 0 ? void 0 : _d.executor) === '@nrwl/web:dev-server') {
                config.targets.serve.executor = '@nx/webpack:dev-server';
                deps['@nx/webpack'] = versions_1.nxVersion;
                updated = true;
            }
            // rollup
            if (((_f = (_e = config === null || config === void 0 ? void 0 : config.targets) === null || _e === void 0 ? void 0 : _e.build) === null || _f === void 0 ? void 0 : _f.executor) === '@nrwl/web:rollup') {
                config.targets.build.executor = '@nx/rollup:rollup';
                deps['@nx/rollup'] = versions_1.nxVersion;
                updated = true;
            }
            if (updated) {
                (0, devkit_1.updateProjectConfiguration)(host, name, config);
            }
        }
        yield (0, devkit_1.formatFiles)(host);
        return (0, devkit_1.addDependenciesToPackageJson)(host, {}, deps);
    });
}
exports.default = update;
