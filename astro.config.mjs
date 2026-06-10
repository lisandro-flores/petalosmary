import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';

const isVercel = process.env.VERCEL === '1' || process.env.VERCEL === 'true';

export default defineConfig({
  site: 'https://petalosmary.ngicode.com',
  output: 'server',
  adapter: isVercel
    ? vercel({
        imageService: true,
      })
    : node({
        mode: 'standalone'
      }),
  integrations: [sitemap()],
});

