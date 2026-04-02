import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://petalosmary.ngicode.com',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [sitemap()],
});
