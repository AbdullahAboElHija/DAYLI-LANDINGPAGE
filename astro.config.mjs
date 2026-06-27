import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const useGithubPagesBase = process.env.GITHUB_PAGES === '1';

export default defineConfig({
  site: useGithubPagesBase ? 'https://abdullahaboelhija.github.io' : undefined,
  base: useGithubPagesBase ? '/DAYLI-LANDINGPAGE' : undefined,
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'he',
    locales: ['he', 'ar', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
