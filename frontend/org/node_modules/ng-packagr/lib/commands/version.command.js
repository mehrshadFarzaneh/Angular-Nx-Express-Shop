"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = void 0;
const rollup_1 = require("rollup");
const typescript_1 = require("typescript");
const log_1 = require("../utils/log");
const ng_compiler_cli_1 = require("../utils/ng-compiler-cli");
/**
 * Prints version information.
 *
 * @stable
 */
const version = async () => {
    (0, log_1.msg)(`ng-packagr:            ` + require('../../package.json').version);
    (0, log_1.msg)(`@angular/compiler:     ` + (await (0, ng_compiler_cli_1.ngCompilerCli)()).VERSION.full);
    (0, log_1.msg)(`rollup:                ` + rollup_1.VERSION);
    (0, log_1.msg)(`typescript:            ` + typescript_1.version);
};
exports.version = version;
//# sourceMappingURL=version.command.js.map