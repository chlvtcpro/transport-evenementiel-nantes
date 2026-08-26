/*
  Point d'entree i18n. Les composants n'importent QUE ce fichier.

  Usage type dans un composant Astro :

    import { getLang, useTranslations } from '../i18n';
    const lang = getLang(Astro.url);
    const t = useTranslations(lang);

  A cette etape (externalisation), getLang renvoie toujours 'fr' car
  aucune route /en n'existe encore. La detection du prefixe d'URL est
  deja ecrite : elle s'activera d'elle-meme a l'etape routing, sans
  toucher aux composants.
*/

import { fr } from './fr';
import { en } from './en';

export const DEFAULT_LANG = 'fr' as const;
export const LANGS = ['fr', 'en'] as const;

export type Lang = (typeof LANGS)[number];

const DICTIONARIES = { fr, en } as const;

/** Vrai si la chaine correspond a une langue geree par le site. */
export function isLang(value: string | undefined): value is Lang {
  return LANGS.includes(value as Lang);
}

/**
 * Deduit la langue depuis l'URL courante.
 * Le francais est a la racine (pas de prefixe), l'anglais sous /en.
 * Toute URL non prefixee retombe sur DEFAULT_LANG : aucune redirection
 * automatique basee sur la langue du navigateur.
 */
export function getLang(url: URL): Lang {
  const segment = url.pathname.split('/')[1];
  return isLang(segment) && segment !== DEFAULT_LANG ? segment : DEFAULT_LANG;
}

/** Renvoie le dictionnaire de la langue demandee. */
export function useTranslations(lang: Lang) {
  return DICTIONARIES[lang];
}

export { fr, en };
