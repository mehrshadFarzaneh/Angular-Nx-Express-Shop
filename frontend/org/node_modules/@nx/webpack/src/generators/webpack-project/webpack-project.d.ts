import type { Tree } from '@nx/devkit';
import { WebpackProjectGeneratorSchema } from './schema';
export declare function webpackProjectGenerator(tree: Tree, options: WebpackProjectGeneratorSchema): Promise<import("@nx/devkit").GeneratorCallback>;
export default webpackProjectGenerator;
export declare const webpackProjectSchematic: (generatorOptions: WebpackProjectGeneratorSchema) => (tree: any, context: any) => Promise<any>;
