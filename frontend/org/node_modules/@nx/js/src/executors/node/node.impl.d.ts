import { ExecutorContext } from '@nx/devkit';
import { NodeExecutorOptions } from './schema';
export declare function nodeExecutor(options: NodeExecutorOptions, context: ExecutorContext): AsyncGenerator<{
    success: boolean;
}, void, undefined>;
export default nodeExecutor;
