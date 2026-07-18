/* =========================================================
   Content Collections (Astro 5, Content Layer API).
   Collection blog : articles markdown deposes dans
   src/content/blog. Le slug vient du nom de fichier (id de
   l'entree fourni par le loader glob), pas du frontmatter :
   une seule source de verite, aucune divergence possible.

   Ajouter un article = deposer un .md conforme au schema.
   ========================================================= */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // Date de mise a jour (optionnelle). Alimente dateModified du schema.
    updated: z.coerce.date().optional(),
    category: z.enum(['Séminaire', 'Mariage', 'Guide']),
    // Temps de lecture en minutes. Si absent, calcule au rendu.
    readingTime: z.number().optional(),
    keywords: z.array(z.string()).default([]),
    // FAQ de fin d'article : alimente l'accordeon visible ET le JSON-LD FAQPage.
    faq: z
      .array(z.object({ question: z.string(), reponse: z.string() }))
      .default([]),
  }),
});

export const collections = { blog };
