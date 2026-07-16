/* =========================================================
   Resolution des assets du hero avec fallback.
   import.meta.glob ne resout que les fichiers reellement
   presents : si une image manque, sa cle est absente et on
   retombe proprement sur un fallback couleur. Le build ne
   casse jamais, et le swap se fait en deposant le fichier
   au bon chemin (aucune modif de code).
   ========================================================= */

import type { ImageMetadata } from 'astro';

// Glob eager de toutes les images du dossier hero.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/hero/*.{jpg,jpeg,png,webp,avif}',
  { eager: true }
);

/** Recupere une image du hero par nom de fichier, ou null si absente. */
function pick(filename: string): ImageMetadata | null {
  const key = `../assets/hero/${filename}`;
  const mod = modules[key];
  return mod ? mod.default : null;
}

// Chemins verrouilles : swap = deposer le fichier a ce nom.
// (Le fond du hero est servi depuis public en background-image CSS,
// il n'est donc pas resolu ici.)
export const heroCardOne = pick(
  'navette-invites-transport-mariage-grand-ouest.jpg'
);

export const heroCardTwo = pick('coordination-transfert-groupe-seminaire.jpg');
