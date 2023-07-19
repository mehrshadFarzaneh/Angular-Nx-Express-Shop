import { GeneratorCallback, Tree } from '@nx/devkit';
import { Schema } from './schema';
export declare function cypressInitGenerator(tree: Tree, options: Schema): Promise<GeneratorCallback>;
export default cypressInitGenerator;
export declare const cypressInitSchematic: (generatorOptions: Schema) => (tree: any, context: any) => Promise<any>;
