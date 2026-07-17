/*
  SITE_DATA : source unique des donnees d'entite Cortege.
  Sert au head (meta, Open Graph, canonical) et au JSON-LD (LocalBusiness,
  Service, FAQPage). Tout se met a jour ici, en un seul endroit.

  IMPORTANT : aucune donnee inventee. Les champs inconnus (telephone, email,
  profils sameAs, avis) restent en PLACEHOLDER et NE DOIVENT PAS etre publies
  tels quels. Les remplacer par les vraies valeurs avant mise en ligne.
*/
export const SITE_DATA = {
  // Identite
  name: 'Transport Événementiel Nantes',
  // Domaine de production (doit correspondre a `site` dans astro.config.mjs).
  // Sans slash final.
  url: 'https://transport-evenementiel-nantes.fr',
  description:
    'Organisateur de transport pour vos séminaires, événements d\'entreprise et mariages à Nantes et dans le Grand Ouest. Un seul interlocuteur, flotte bas-carbone. Devis rapide.',
  foundingDate: '2023',
  priceRange: '€€',

  // Contact. A REMPLIR : renseigner le vrai numero et le vrai email. Ne pas
  // publier les placeholders dans le schema.
  telephone: '[TELEPHONE A REMPLIR]',
  email: '[EMAIL A REMPLIR]',

  // Zone desservie (service-area business, pas de vitrine physique : on
  // n'expose aucune adresse personnelle).
  areaServed: [
    'Nantes',
    'Loire-Atlantique',
    'Saint-Nazaire',
    'La Baule',
    'Angers',
    'Grand Ouest',
  ],

  // Geo de Nantes, signal de zone. Coordonnees du centre-ville de Nantes.
  geo: { latitude: 47.2184, longitude: -1.5536 },

  // Image de partage. A FOURNIR : deposer un visuel 1200x630 dans /public
  // (ex : reprise du fond hero). Chemin relatif a la racine du site.
  ogImage: '/og-image.jpg',

  // Profils officiels. PLACEHOLDER : c'est le plus gros levier de confiance
  // entite pour les moteurs IA. A REMPLIR avec les vraies URL puis decommenter.
  // Laisser vide tant que les profils ne sont pas confirmes (ne pas inventer).
  sameAs: [
    // 'https://www.linkedin.com/company/A-REMPLIR',
    // 'https://www.instagram.com/A-REMPLIR',
    // 'https://www.chl-vtc.fr',              // page CHL VTC (adossement)
    // 'https://www.google.com/maps/place/A-REMPLIR', // Google Business Profile
  ],

  // Fraicheur : date de derniere mise a jour du contenu. Mettre a jour lors
  // d'une revision de contenu significative.
  dateModified: '2026-07-04',
};

// Les 3 services, rattaches au provider LocalBusiness dans le JSON-LD.
export const SERVICES = [
  {
    name: 'Séminaire et événement d\'entreprise',
    description:
      'Transferts gare et aéroport, navettes inter-sites et rotations sur toute la durée de l\'événement, avec un interlocuteur unique et une facture unique.',
  },
  {
    name: 'Mariage',
    description:
      'Transport des invités de l\'arrivée aux retours de nuit : navettes cérémonie, réception et hébergement, coordination multi-véhicules de la berline à l\'autocar.',
  },
  {
    name: 'Navette de groupe',
    description:
      'Transport collectif ponctuel ou récurrent, de quelques personnes à plusieurs centaines, dimensionné au volume, pour l\'événementiel, l\'associatif et l\'institutionnel.',
  },
];
