import { Tree } from '@nx/devkit';
export interface CypressBaseSetupSchema {
    project: string;
    /**
     * directory from the projectRoot where cypress files will be generated
     * default is `cypress`
     * */
    directory?: string;
}
export declare function addBaseCypressSetup(tree: Tree, options: CypressBaseSetupSchema): void;
