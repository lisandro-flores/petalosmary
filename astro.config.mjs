import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://petalosmary.ngicode.com',
  integrations: [sitemap()],
});
