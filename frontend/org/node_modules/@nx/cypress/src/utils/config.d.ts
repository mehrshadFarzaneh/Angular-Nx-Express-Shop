export declare function addDefaultE2EConfig(cyConfigContents: string, options: {
    directory: string;
    bundler?: string;
}): Promise<string>;
/**
 * Adds the nxComponentTestingPreset to the cypress config file
 * Make sure after calling this the correct import statement is addeda
 * to bring in the nxComponentTestingPreset function
 **/
export declare function addDefaultCTConfig(cyConfigContents: string, options?: {
    bundler?: string;
}): Promise<string>;
/**
 * Adds the mount command for Cypress
 * Make sure after calling this the correct import statement is added
 * to bring in the correct mount from cypress.
 **/
export declare function addMountDefinition(cmpCommandFileContents: string): Promise<string>;
