/* =========================================================
   Scroll global : Lenis (smooth scroll) + parallax branche
   sur le meme requestAnimationFrame.
   ========================================================= */

import Lenis from 'lenis';

type ParallaxEntry = {
  el: HTMLElement;
  amplitude: number; // amplitude max en px (defaut 40)
};

const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Initialise Lenis avec un lerp doux et branche le parallax.
 * A appeler une seule fois au chargement de la page.
 * Retourne l'instance Lenis (ou null en reduced-motion) pour que
 * les ancres puissent piloter le scroll via lenis.scrollTo.
 */
export function initScroll(): Lenis | null {
  if (prefersReducedMotion()) {
    // On laisse le scroll natif et on ne touche pas au parallax.
    return null;
  }

  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
    // Lenis pilote sa propre boucle requestAnimationFrame en interne.
    // Sans autoRaf, la page repose sur une boucle rAF manuelle : si elle
    // s'interrompt (erreur dans un callback pendant le premier tick),
    // Lenis se fige a scroll=0. Son etat interne ne suit plus le scroll
    // reel et lenis.scrollTo (utilise par les ancres) devient sans effet.
    // autoRaf: true garantit un ticking continu et fiable.
    autoRaf: true,
  });

  // Collecte des cibles parallax.
  const targets: ParallaxEntry[] = Array.from(
    document.querySelectorAll<HTMLElement>('[data-parallax]')
  ).map((el) => {
    const raw = Number(el.dataset.parallax);
    const amplitude = Number.isFinite(raw) && raw > 0 ? raw : 40;
    return { el, amplitude };
  });

  const applyParallax = (): void => {
    const viewportH = window.innerHeight;
    for (const { el, amplitude } of targets) {
      const rect = el.getBoundingClientRect();
      // Position relative du centre de l'element dans le viewport, de -1 a 1.
      const center = rect.top + rect.height / 2;
      const progress = (center - viewportH / 2) / (viewportH / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      const offset = -clamped * amplitude;
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    }
  };

  // Parallax branche sur l'evenement scroll de Lenis (Lenis gere son
  // propre rAF via autoRaf). Le callback est isole : une erreur eventuelle
  // n'interrompt pas le ticking interne de Lenis.
  lenis.on('scroll', applyParallax);
  // Premiere passe pour poser les valeurs initiales.
  applyParallax();
  window.addEventListener('resize', applyParallax, { passive: true });

  return lenis;
}

/**
 * Decalage d'ancre pour une cible donnee (valeur passee telle quelle a
 * lenis.scrollTo via `offset: -anchorOffset(dest)`).
 *
 * lenis.scrollTo(el, { offset: -N }) place le HAUT DE LA BOITE de l'element
 * a N pixels sous le haut du viewport.
 *
 * Les sections ont un gros padding-top (py-section, jusqu'a ~144px) pour
 * respirer en scroll normal. L'eyebrow n'est donc pas en haut de la boite
 * mais a paddingTop en dessous. Si on cale la boite sous le header, l'eyebrow
 * se retrouve tout en bas du header + padding : grande bande vide, et la
 * section precedente (claire) depasse sous le header.
 *
 * On vise donc l'EYEBROW, pas la boite : on veut eyebrow ~= header + 24px.
 * Comme eyebrow = hautBoite + paddingTop, il faut hautBoite = header + 24 -
 * paddingTop (souvent negatif : la boite passe au-dessus du viewport, ce qui
 * masque la section precedente et supprime la bande claire).
 */
const anchorOffset = (dest: HTMLElement): number => {
  const header = document.getElementById('site-header');
  const headerH = header ? header.getBoundingClientRect().height : 80;
  // Marge de respiration entre le bas du header et l'eyebrow.
  const gap = 24;

  if (dest.tagName === 'SECTION') {
    const paddingTop = parseFloat(getComputedStyle(dest).paddingTop) || 0;
    return headerH + gap - paddingTop;
  }

  return headerH + gap;
};

/**
 * Intercepte les clics sur les liens d'ancre internes (#...) et pilote
 * le defilement via lenis.scrollTo avec un decalage de header. Si Lenis
 * n'est pas actif (reduced-motion), on laisse le scroll natif (scroll-mt
 * gere l'offset en CSS).
 */
export function initAnchors(lenis: Lenis | null): void {
  if (!lenis) return;

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    const link = target?.closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link) return;

    const hash = link.getAttribute('href');
    if (!hash || hash === '#') return;

    const dest = document.querySelector<HTMLElement>(hash);
    if (!dest) return;

    event.preventDefault();
    lenis.scrollTo(dest, {
      offset: -anchorOffset(dest),
      duration: 1.1,
    });
  });
}
