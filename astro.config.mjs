import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

const isNetlify = process.env.NETLIFY === 'true';

export default defineConfig({
  site: 'https://petalosmary.ngicode.com',
  output: isNetlify ? 'static' : 'server',
  adapter: isNetlify ? undefined : node({
    mode: 'standalone'
  }),
  integrations: [sitemap()],
});

