import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Domaine de production. Sert de base au sitemap et aux URL canoniques /
// Open Graph.
const SITE_URL = 'https://transport-evenementiel-nantes.fr';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Une URL, une seule forme. Sans slash final partout : canoniques, sitemap
  // et liens internes. Evite qu'une URL d'annonce Google Ads parte en
  // redirection a chaque clic. Le fichier vercel.json impose la meme regle
  // cote serveur.
  trailingSlash: 'never',
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
