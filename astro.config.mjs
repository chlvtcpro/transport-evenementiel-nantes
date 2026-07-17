import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Domaine de production. Sert de base au sitemap et aux URL canoniques /
// Open Graph.
const SITE_URL = 'https://transport-evenementiel-nantes.fr';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    tailwind({
      // On garde notre propre fichier de base CSS pour piloter les tokens.
      applyBaseStyles: false,
    }),
    // Genere sitemap.xml automatiquement a partir des pages du site.
    sitemap(),
  ],
  image: {
    // Autorise Sharp pour la generation AVIF / WebP via SmartImage.
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
