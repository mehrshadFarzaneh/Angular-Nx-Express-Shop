import { Tree } from '@nx/devkit';
interface WebStaticServeSchema {
    buildTarget: string;
    outputPath?: string;
    targetName?: string;
}
export declare function webStaticServeGenerator(tree: Tree, options: WebStaticServeSchema): void;
export declare const compat: (generatorOptions: WebStaticServeSchema) => (tree: any, context: any) => Promise<any>;
export default webStaticServeGenerator;
