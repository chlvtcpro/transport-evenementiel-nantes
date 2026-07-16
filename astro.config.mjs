import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// A REMPLIR : domaine de production reel. Sert de base au sitemap et aux URL
// canoniques / Open Graph. Remplacer par le vrai domaine avant mise en ligne.
const SITE_URL = 'https://cortege.fr';

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
