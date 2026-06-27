import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isVercel = process.env.VERCEL === '1';

export default defineConfig({
  site: isVercel ? undefined : 'https://abdullahaboelhija.github.io',
  base: isVercel ? undefined : '/DAYLI-LANDINGPAGE',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'he',
    locales: ['he', 'ar', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
