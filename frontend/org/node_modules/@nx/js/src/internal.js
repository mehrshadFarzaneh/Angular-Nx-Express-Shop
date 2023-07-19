"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetProjectLocator = exports.registerTsConfigPaths = exports.registerTsProject = exports.resolveModuleByImport = void 0;
var ast_utils_1 = require("./utils/typescript/ast-utils");
Object.defineProperty(exports, "resolveModuleByImport", { enumerable: true, get: function () { return ast_utils_1.resolveModuleByImport; } });
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
var register_1 = require("nx/src/plugins/js/utils/register");
Object.defineProperty(exports, "registerTsProject", { enumerable: true, get: function () { return register_1.registerTsProject; } });
Object.defineProperty(exports, "registerTsConfigPaths", { enumerable: true, get: function () { return register_1.registerTsConfigPaths; } });
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
var target_project_locator_1 = require("nx/src/plugins/js/project-graph/build-dependencies/target-project-locator");
Object.defineProperty(exports, "TargetProjectLocator", { enumerable: true, get: function () { return target_project_locator_1.TargetProjectLocator; } });
