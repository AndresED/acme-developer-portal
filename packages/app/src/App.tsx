import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { navModule } from './modules/nav';
import { homeModule } from './modules/home';
import { scaffolderCustomizations } from './scaffolder/scaffolderModule';

export default createApp({
  features: [catalogPlugin, navModule, homeModule, scaffolderCustomizations],
});
