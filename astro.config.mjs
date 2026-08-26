import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Domaine de production. Sert de base au sitemap et aux URL canoniques /
// Open Graph.
const SITE_URL = 'https://transport-evenementiel-nantes.fr';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Routing i18n. Le francais est la langue par defaut et reste a la racine
  // (`prefixDefaultLocale: false`), l'anglais vit sous /en.
  //
  // Aucune redirection automatique sur la langue du navigateur : le site est
  // entierement statique (pas d'adaptateur, donc pas de middleware a
  // l'execution) et `redirectToDefaultLocale` est desactive. Un visiteur qui
  // arrive sur / depuis une annonce francaise reste sur la version francaise,
  // quelle que soit la langue de son navigateur.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
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
