"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compat = exports.webStaticServeGenerator = void 0;
const devkit_1 = require("@nx/devkit");
function webStaticServeGenerator(tree, options) {
    const opts = normalizeOptions(tree, options);
    addStaticConfig(tree, opts);
}
exports.webStaticServeGenerator = webStaticServeGenerator;
function normalizeOptions(tree, options) {
    var _a, _b, _c, _d;
    const target = (0, devkit_1.parseTargetString)(options.buildTarget);
    const opts = Object.assign(Object.assign({}, options), { targetName: options.targetName || 'serve-static', projectName: target.project });
    const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, target.project);
    const buildTargetConfig = (_a = projectConfig === null || projectConfig === void 0 ? void 0 : projectConfig.targets) === null || _a === void 0 ? void 0 : _a[target.target];
    if (!buildTargetConfig) {
        throw new Error((0, devkit_1.stripIndents) `Unable to read the target configuration for the provided build target, ${opts.buildTarget}
Are you sure this target exists?`);
    }
    if (projectConfig.targets[opts.targetName]) {
        throw new Error((0, devkit_1.stripIndents) `Project ${target.project} already has a '${opts.targetName}' target configured.
Either rename or remove the existing '${opts.targetName}' target and try again.
Optionally, you can provide a different name with the --target-name option other than '${opts.targetName}'`);
    }
    // NOTE: @nx/web:file-server only looks for the outputPath option
    if (!((_b = buildTargetConfig.options) === null || _b === void 0 ? void 0 : _b.outputPath) && !opts.outputPath) {
        // attempt to find the suiteable path from the outputs
        let maybeOutputValue;
        for (const o of (buildTargetConfig === null || buildTargetConfig === void 0 ? void 0 : buildTargetConfig.outputs) || []) {
            const isInterpolatedOutput = o.trim().startsWith('{options.');
            if (!isInterpolatedOutput) {
                continue;
            }
            const noBracketParts = o.replace(/[{}]/g, '').split('.');
            if (noBracketParts.length === 2 && (noBracketParts === null || noBracketParts === void 0 ? void 0 : noBracketParts[1])) {
                const key = noBracketParts[1].trim();
                const value = (_c = buildTargetConfig.options) === null || _c === void 0 ? void 0 : _c[key];
                if (value) {
                    maybeOutputValue = value;
                    break;
                }
            }
        }
        // NOTE: outputDir is the storybook option.
        opts.outputPath = ((_d = buildTargetConfig.options) === null || _d === void 0 ? void 0 : _d.outputDir) || maybeOutputValue;
        if (opts.outputPath) {
            devkit_1.logger.warn(`Automatically detected the output path to be ${opts.outputPath}.
If this is incorrect, the update the staticFilePath option in the ${target.project}:${opts.targetName} target configuration`);
        }
        else {
            devkit_1.logger.warn((0, devkit_1.stripIndents) `${opts.buildTarget} did not have an outputPath property set and --output-path was not provided.
Without either options, the static serve will most likely be unable to serve your project.
It's recommend to provide a --output-path option in this case.`);
        }
    }
    return opts;
}
function addStaticConfig(tree, opts) {
    const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, opts.projectName);
    const staticServeOptions = {
        executor: '@nx/web:file-server',
        options: {
            buildTarget: opts.buildTarget,
            staticFilePath: opts.outputPath,
        },
    };
    projectConfig.targets[opts.targetName] = staticServeOptions;
    (0, devkit_1.updateProjectConfiguration)(tree, opts.projectName, projectConfig);
}
exports.compat = (0, devkit_1.convertNxGenerator)(webStaticServeGenerator);
exports.default = webStaticServeGenerator;
