import { defineConfig } from 'astro/config';
import github from '@astrojs/github-pages';

export default defineConfig({
  site: 'https://orlando-sucuc1331g.github.io',
  base: '/ldpage-gsdep',
  integrations: [github()],
});