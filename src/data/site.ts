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
  /*
    Meta description par defaut, et description de l'entite dans le JSON-LD.

    L'argument bas-carbone a ete retire : aucun vehicule n'est detenu en
    propre, le modele est la coordination de transporteurs partenaires. Une
    promesse d'empreinte sur un parc qu'on ne possede pas n'est pas tenable,
    ni juridiquement ni au regard de Google Ads. Ne pas le reintroduire ici.
    Ce qui reste est vrai sans condition : l'interlocuteur unique et la zone.

    Longueur : 152 caracteres, dans la fenetre 120-165 affichee par Google.
    La version precedente en faisait 172, elle etait donc deja tronquee avant
    cette reecriture. "Grand Ouest" a ete retire pour tenir : c'est le terme
    le moins recherche des trois, et la portee reste portee structurellement
    par `areaServed` ci-dessous. Ne pas rallonger sans recompter.
  */
  description:
    'Organisateur de transport pour vos séminaires, événements d\'entreprise et mariages à Nantes et en Loire-Atlantique. Un seul interlocuteur. Devis rapide.',
  foundingDate: '2023',
  priceRange: '€€',

  // Contact. A REMPLIR : renseigner le vrai numero et le vrai email. Ne pas
  // publier les placeholders dans le schema.
  telephone: '+33684338625',
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

/*
  Telephone, formes derivees.

  Le NAP publie doit rester strictement identique a la fiche Google
  Business. Une seule valeur saisie, SITE_DATA.telephone, et tout le
  reste en decoule : le schema, le lien d'appel et l'affichage a
  l'ecran. Recalculer ce formatage dans chaque page ou composant
  rouvrirait la porte a une divergence.
*/
export const TEL_HREF = `tel:${SITE_DATA.telephone}`;
// +33684338625 devient 06 84 33 86 25.
export const TEL_AFFICHE = SITE_DATA.telephone
  .replace(/^\+33/, '0')
  .replace(/(\d{2})(?=\d)/g, '$1 ');

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
