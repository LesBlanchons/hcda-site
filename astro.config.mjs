import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://www.lesblanchons2alpes.fr';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  compressHTML: true,
});
