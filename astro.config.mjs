import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://abdullahaboelhija.github.io',
  base: '/DAYLI-LANDINGPAGE',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'he',
    locales: ['he', 'ar', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
