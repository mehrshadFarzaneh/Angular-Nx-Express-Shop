import { JestProjectSchema } from './schema';
import { Tree, GeneratorCallback } from '@nx/devkit';
export declare function jestProjectGenerator(tree: Tree, schema: JestProjectSchema): Promise<GeneratorCallback>;
export declare const jestProjectSchematic: (generatorOptions: JestProjectSchema) => (tree: any, context: any) => Promise<any>;
