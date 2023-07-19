"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nx/devkit");
function update(host) {
    var _a, _b, _c, _d;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projects = (0, devkit_1.getProjects)(host);
        for (const [name, config] of projects.entries()) {
            let updated = false;
            if (((_b = (_a = config === null || config === void 0 ? void 0 : config.targets) === null || _a === void 0 ? void 0 : _a.build) === null || _b === void 0 ? void 0 : _b.executor) === '@nrwl/web:webpack') {
                config.targets.build.executor = '@nrwl/webpack:webpack';
                updated = true;
            }
            if (((_d = (_c = config === null || config === void 0 ? void 0 : config.targets) === null || _c === void 0 ? void 0 : _c.serve) === null || _d === void 0 ? void 0 : _d.executor) === '@nrwl/web:dev-server') {
                config.targets.serve.executor = '@nrwl/webpack:dev-server';
                updated = true;
            }
            if (updated) {
                (0, devkit_1.updateProjectConfiguration)(host, name, config);
            }
        }
        yield (0, devkit_1.formatFiles)(host);
    });
}
exports.default = update;
