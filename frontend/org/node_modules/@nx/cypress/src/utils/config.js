"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMountDefinition = exports.addDefaultCTConfig = exports.addDefaultE2EConfig = void 0;
const tslib_1 = require("tslib");
const TS_QUERY_EXPORT_CONFIG_PREFIX = ':matches(ExportAssignment, BinaryExpression:has(Identifier[name="module"]):has(Identifier[name="exports"]))';
function addDefaultE2EConfig(cyConfigContents, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!cyConfigContents) {
            throw new Error('The passed in cypress config file is empty!');
        }
        const { tsquery } = yield Promise.resolve().then(() => require('@phenomnomnominal/tsquery'));
        const testingTypeConfig = tsquery.query(cyConfigContents, `${TS_QUERY_EXPORT_CONFIG_PREFIX} PropertyAssignment:has(Identifier[name="e2e"])`);
        let updatedConfigContents = cyConfigContents;
        if (testingTypeConfig.length === 0) {
            const configValue = options.bundler === 'vite'
                ? `nxE2EPreset(__filename, { cypressDir: '${options.directory}', bundler: 'vite' })`
                : `nxE2EPreset(__filename, { cypressDir: '${options.directory}' })`;
            updatedConfigContents = tsquery.replace(cyConfigContents, `${TS_QUERY_EXPORT_CONFIG_PREFIX} ObjectLiteralExpression:first-child`, (node) => {
                if (node.properties.length > 0) {
                    return `{
  ${node.properties.map((p) => p.getText()).join(',\n')},
  e2e: ${configValue} 
}`;
                }
                return `{
  e2e: ${configValue}
}`;
            });
            updatedConfigContents = `import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';\n${updatedConfigContents}`;
        }
        return updatedConfigContents;
    });
}
exports.addDefaultE2EConfig = addDefaultE2EConfig;
/**
 * Adds the nxComponentTestingPreset to the cypress config file
 * Make sure after calling this the correct import statement is addeda
 * to bring in the nxComponentTestingPreset function
 **/
function addDefaultCTConfig(cyConfigContents, options = {}) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!cyConfigContents) {
            throw new Error('The passed in cypress config file is empty!');
        }
        const { tsquery } = yield Promise.resolve().then(() => require('@phenomnomnominal/tsquery'));
        const testingTypeConfig = tsquery.query(cyConfigContents, `${TS_QUERY_EXPORT_CONFIG_PREFIX} PropertyAssignment:has(Identifier[name="component"])`);
        let updatedConfigContents = cyConfigContents;
        if (testingTypeConfig.length === 0) {
            const configValue = (options === null || options === void 0 ? void 0 : options.bundler) === 'vite'
                ? "nxComponentTestingPreset(__filename, { bundler: 'vite' })"
                : 'nxComponentTestingPreset(__filename)';
            updatedConfigContents = tsquery.replace(cyConfigContents, `${TS_QUERY_EXPORT_CONFIG_PREFIX} ObjectLiteralExpression:first-child`, (node) => {
                if (node.properties.length > 0) {
                    return `{
  ${node.properties.map((p) => p.getText()).join(',\n')},
  component: ${configValue} 
}`;
                }
                return `{
  component: ${configValue}
}`;
            });
        }
        return updatedConfigContents;
    });
}
exports.addDefaultCTConfig = addDefaultCTConfig;
/**
 * Adds the mount command for Cypress
 * Make sure after calling this the correct import statement is added
 * to bring in the correct mount from cypress.
 **/
function addMountDefinition(cmpCommandFileContents) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!cmpCommandFileContents) {
            throw new Error('The passed in cypress component file is empty!');
        }
        const { tsquery } = yield Promise.resolve().then(() => require('@phenomnomnominal/tsquery'));
        const hasMountCommand = ((_a = tsquery.query(cmpCommandFileContents, 'CallExpression StringLiteral[value="mount"]')) === null || _a === void 0 ? void 0 : _a.length) > 0;
        if (hasMountCommand) {
            return cmpCommandFileContents;
        }
        const mountCommand = `Cypress.Commands.add('mount', mount);`;
        const updatedInterface = tsquery.replace(cmpCommandFileContents, 'InterfaceDeclaration', (node) => {
            return `interface ${node.name.getText()}${node.typeParameters
                ? `<${node.typeParameters.map((p) => p.getText()).join(', ')}>`
                : ''} {
      ${node.members.map((m) => m.getText()).join('\n      ')}
      mount: typeof mount;
    }`;
        });
        return `${updatedInterface}\n${mountCommand}`;
    });
}
exports.addMountDefinition = addMountDefinition;
