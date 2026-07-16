/* =========================================================
   Reveal : IntersectionObserver qui ajoute .is-revealed aux
   elements portant [data-reveal]. Supporte un stagger via
   [data-reveal-stagger] pose sur un conteneur parent, qui
   applique un delai incremental a ses enfants [data-reveal].
   ========================================================= */

const REVEAL_ATTR = 'data-reveal';
const STAGGER_ATTR = 'data-reveal-stagger';

/**
 * Applique les delais de stagger : pour chaque conteneur portant
 * [data-reveal-stagger], on echelonne les enfants [data-reveal].
 * La valeur de l'attribut = pas en ms (defaut 90).
 */
function applyStagger(): void {
  const containers = document.querySelectorAll<HTMLElement>(`[${STAGGER_ATTR}]`);
  for (const container of containers) {
    const step = Number(container.getAttribute(STAGGER_ATTR)) || 90;
    const children = container.querySelectorAll<HTMLElement>(`[${REVEAL_ATTR}]`);
    children.forEach((child, index) => {
      child.style.setProperty('--reveal-delay', `${index * step}ms`);
    });
  }
}

/**
 * Observe tous les [data-reveal] et declenche l'animation
 * une fois par element (unobserve apres reveal).
 */
export function initReveal(): void {
  const nodes = document.querySelectorAll<HTMLElement>(`[${REVEAL_ATTR}]`);
  if (nodes.length === 0) return;

  // Amelioration progressive : on signale au CSS que le JS prend le relais.
  // Tant que cette classe n'est pas posee, les [data-reveal] restent visibles
  // (le contenu ne depend jamais du chargement du script).
  document.documentElement.classList.add('reveal-active');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    nodes.forEach((node) => node.classList.add('is-revealed'));
    return;
  }

  applyStagger();

  const reveal = (node: Element): void => node.classList.add('is-revealed');

  // Filet de securite : tout element deja present dans le viewport au
  // chargement est revele immediatement. Cela couvre les cas ou
  // l'IntersectionObserver ne declenche pas pour les elements deja
  // visibles (interaction possible avec le scroll pilote par Lenis).
  const isInViewport = (node: Element): boolean => {
    const rect = node.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < vh && rect.bottom > 0;
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          reveal(entry.target);
          obs.unobserve(entry.target);
        }
      }
    },
    {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15,
    }
  );

  nodes.forEach((node) => {
    if (isInViewport(node)) {
      reveal(node);
    } else {
      observer.observe(node);
    }
  });
}
