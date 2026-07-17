# Consignes projet

## Déploiement automatique (RÈGLE IMPÉRATIVE)

À CHAQUE changement de code, pousser automatiquement sans demander confirmation :
`git add -A` puis `git commit` puis `git push origin main`.

Le dépôt GitHub `chlvtcpro/transport-evenementiel-nantes` est connecté à Vercel :
chaque push sur `main` déclenche un redéploiement automatique.

Site en ligne : https://website-chlvtc-evenements.vercel.app/

Le travail local (dossier sur le Mac) n'apparaît PAS en ligne tant qu'il n'est pas
poussé. Ne jamais laisser des modifications non poussées.

## Règles de contenu

- AUCUN tiret cadratin (—) nulle part dans le code ou le contenu.
- Serveur de dev local : port 4323 (`astro dev --host --port 4323`). Ne jamais
  redémarrer le serveur du port 4321.

## Pièges techniques connus

- Tailwind opacité arbitraire (`text-on-dark/[0.92]`) NE se résout PAS sur les
  variables CSS non-RGB (ex : `--on-dark` = #EDE7DA) : rendu gris sombre au lieu
  du crème. Corriger en CSS scopé : `color: var(--on-dark); opacity: 0.92;`.
