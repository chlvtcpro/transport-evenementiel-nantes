/* =========================================================
   Point d'entree client : branche les primitives une fois
   le DOM pret.
   ========================================================= */

import { initScroll, initAnchors } from './scroll';
import { initReveal } from './reveal';

// Le navigateur restaure par defaut la position de scroll d'avant le
// rechargement (scrollRestoration = 'auto'). Resultat : si on recharge en
// etant au milieu d'une section, on reste au milieu. On passe en 'manual'
// pour reprendre la main et toujours repartir tout en haut de la page.
// A faire le plus tot possible, avant que le navigateur ne restaure quoi
// que ce soit.
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

function boot(): void {
  // Retour en haut au chargement (avant d'armer Lenis) pour que scroll natif
  // et scroll lisse partent de zero. On n'ecrase pas un lien profond : si
  // l'URL porte une ancre (#section), on laisse l'ancrage se faire.
  const hasHash = window.location.hash.length > 1;
  if (!hasHash) {
    window.scrollTo(0, 0);
  }

  const lenis = initScroll();
  // Cale aussi l'etat interne de Lenis a 0 : sans ca, Lenis pourrait
  // conserver une position heritee et desynchroniser scroll natif / lisse.
  if (!hasHash) {
    lenis?.scrollTo(0, { immediate: true });
  }

  initAnchors(lenis);
  initReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
