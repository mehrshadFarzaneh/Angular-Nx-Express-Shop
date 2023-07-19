import { ProjectConfiguration, Tree } from '@nx/devkit';
import { CypressComponentConfigurationSchema } from './schema';
export declare function cypressComponentConfiguration(tree: Tree, options: CypressComponentConfigurationSchema): Promise<() => void>;
export declare function updateTsConfigForComponentTesting(tree: Tree, projectConfig: ProjectConfiguration): void;
export default cypressComponentConfiguration;
