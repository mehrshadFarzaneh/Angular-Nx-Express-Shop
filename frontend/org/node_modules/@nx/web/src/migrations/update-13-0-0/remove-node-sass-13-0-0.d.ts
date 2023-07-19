import { GeneratorCallback, Tree } from '@nx/devkit';
/**
 * For web/react apps with style scss option, remove node-sass sine it is deprecated.
 * We already include sass package in `@nrwl/web` deps so no need to install anything extra.
 */
export default function update(tree: Tree): Promise<GeneratorCallback>;
