/*
  Dictionnaire ANGLAIS.

  ETAPE EN COURS : ce fichier est une COPIE CONFORME du francais. Rien
  n'est traduit a ce stade, c'est volontaire : l'objectif de l'etape
  d'externalisation est que le site rende exactement comme avant.
  La traduction se fera en derniere etape, dans ce fichier uniquement.

  `satisfies typeof fr` : si une cle presente dans fr.ts manque ici (ou
  change de type), le build echoue. C'est le garde-fou qui rend une
  traduction oubliee impossible.
*/

import type { fr } from './fr';

export const en = {
  // ------------------------------------------------------------------
  // Textes partages par plusieurs composants.
  // ------------------------------------------------------------------
  common: {
    skipToContent: 'Aller au contenu',
    // Libelle du CTA principal, repete dans le header, le hero, les
    // sections et le footer.
    ctaDevis: 'Demander un devis',
    homeAria: 'Transport Événementiel Nantes, accueil',
    breadcrumbAria: "Fil d'ariane",
    // Locale BCP-47 utilisee pour formater dates et nombres
    // (toLocaleDateString / toLocaleString).
    locale: 'fr-FR',
  },

  // ------------------------------------------------------------------
  // Metadonnees de page (title, meta description).
  // ------------------------------------------------------------------
  meta: {
    home: {
      title:
        'Transport séminaire et événement à Nantes | Navettes clé en main, Grand Ouest',
      description:
        "Organisateur de transport pour vos séminaires, événements d'entreprise et mariages à Nantes et dans le Grand Ouest. Un seul interlocuteur, flotte bas-carbone. Devis rapide.",
    },
  },

  // ------------------------------------------------------------------
  // Header : navigation, CTA, libelles d'accessibilite.
  // Les href sont portes ici : chaque langue aura ses propres chemins
  // a l'etape routing.
  // ------------------------------------------------------------------
  header: {
    logoAlt: 'Transport Événementiel Nantes',
    navAria: 'Navigation principale',
    mobileNavAria: 'Navigation mobile',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    ctaHref: '/#formulaire-devis',
    homeHref: '/#hero',
    nav: [
      { href: '/#comment-ca-marche', label: 'Comment ça marche' },
      { href: '/#offres', label: 'Offres' },
      { href: '/#cas-client', label: 'Réalisations' },
      { href: '/#differenciateurs', label: 'Notre approche' },
      { href: '/blog', label: 'Ressources' },
    ],
  },

  // ------------------------------------------------------------------
  // Footer : signature, colonnes de liens, bas de page.
  // ------------------------------------------------------------------
  footer: {
    logoMain: 'Transport Événementiel',
    logoSub: 'Nantes',
    homeHref: '/#hero',
    tagline:
      'Organisateur de transport événementiel à Nantes et dans le Grand Ouest.',
    // Rendu tel quel apres le symbole copyright et l'annee courante.
    copyright: 'Transport Événementiel Nantes. Tous droits réservés.',
    columns: [
      {
        title: 'Prestations',
        links: [
          { href: '/#offres', label: 'Mariage' },
          { href: '/#offres', label: 'Séminaire' },
          { href: '/#offres', label: 'Navette de groupe' },
        ],
      },
      {
        title: "L'entreprise",
        links: [
          { href: '/#comment-ca-marche', label: 'Comment ça marche' },
          { href: '/#cas-client', label: 'Réalisations' },
          { href: '/#differenciateurs', label: 'Notre approche' },
          { href: '/blog', label: 'Ressources' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { href: '/#formulaire-devis', label: 'Demander un devis' },
          {
            href: 'mailto:contact@transport-evenementiel-nantes.fr',
            label: 'contact@transport-evenementiel-nantes.fr',
          },
        ],
      },
    ],
    legalLinks: [
      { href: '/mentions-legales', label: 'Mentions légales' },
      { href: '/confidentialite', label: 'Confidentialité' },
    ],
  },

  // ------------------------------------------------------------------
  // Section 1 : HERO.
  // ------------------------------------------------------------------
  hero: {
    eyebrow: 'Organisateur de transport événementiel, Nantes et Grand Ouest',
    titleLine1: 'Séminaires, mariages :',
    titleLine2: 'on transporte tout le monde.',
    subtitle:
      "Transport de séminaire et d'événement d'entreprise, navettes de mariage, transferts de groupe à Nantes et dans le Grand Ouest. Un seul contact coordonne toute la flotte. Vous ne gérez aucun trajet.",
    ctaSecondary: 'Voir nos réalisations',
    ctaSecondaryHref: '#cas-client',
    ctaHref: '#formulaire-devis',
    scroll: 'Défiler',
    // Libelles des compteurs. Fusionnes par index avec HERO_STATS
    // (valeurs numeriques et duree d'animation restent dans Hero.astro).
    statLabels: [
      'passagers transportés',
      'événements et transferts',
      'depuis',
    ],
    // Libelles des noeuds du plan SVG. Fusionnes par index avec
    // PLAN_NODES (coordonnees et ancrage restent dans Hero.astro).
    planNodeLabels: [
      'Gare de Nantes',
      'Hôtel',
      'Cérémonie',
      'Réception',
      'Retours de nuit',
    ],
    planAria:
      "Plan d orchestration des trajets d un événement : gare de Nantes, hôtel, cérémonie, réception, retours de nuit",
  },

  // ------------------------------------------------------------------
  // Section 2 : REASSURANCE (globe de logos clients).
  // ------------------------------------------------------------------
  reassurance: {
    eyebrow: 'Ils nous ont fait confiance',
    title: 'Des organisations exigeantes nous confient leurs déplacements.',
    subtitle:
      "Entreprises, institutions et organisateurs d'événements dont nous avons transporté les collaborateurs et les invités, à Nantes et dans le Grand Ouest.",
  },

  // ------------------------------------------------------------------
  // Section 3 : COMMENT CA MARCHE (process en 3 etapes).
  // ------------------------------------------------------------------
  process: {
    eyebrow: 'Comment ça marche',
    title: "Un événement. Un interlocuteur. N'importe quel volume.",
    subtitle:
      "Une berline pour deux invités ou dix véhicules pour le transport des participants d'un séminaire, c'est le même contact et le même niveau de maîtrise à Nantes et dans le Grand Ouest.",
    ctaPhrase:
      'Décrivez-nous votre événement, on orchestre tous les trajets.',
    ctaHref: '#formulaire-devis',
    steps: [
      {
        num: '01',
        titre: 'Vous nous briefez',
        texte:
          'Date, lieux, nombre de personnes, contraintes. Un seul échange suffit, vous avez un interlocuteur unique du début à la fin.',
      },
      {
        num: '02',
        titre: 'On assemble et on orchestre la flotte',
        texte:
          'On dimensionne les véhicules selon le volume, berlines, vans ou autocars, et on cale trajets, rotations, horaires et chauffeurs. Vous ne gérez aucun déplacement.',
      },
      {
        num: '03',
        titre: 'Le jour J, tout roule',
        texte:
          "Arrivées à l'heure, navettes, transferts, retours de nuit. Tout est coordonné, vous profitez de votre événement.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // Section 4 : OFFRES (accordeon horizontal).
  // Fusionne par index avec OFFRES_CONFIG dans Offres.astro
  // (tag, drapeau phare, chemin d'image).
  // ------------------------------------------------------------------
  offres: {
    eyebrow: 'Nos offres',
    title: "Trois façons d'orchestrer vos déplacements.",
    subtitle:
      "Chaque événement a sa logistique à Nantes et dans le Grand Ouest. On l'assemble sur mesure, du transfert de collaborateurs à la navette de deux cents invités.",
    badgePhare: 'Offre phare',
    mediaFallback: 'Transport événementiel',
    ctaHref: '#formulaire-devis',
    items: [
      {
        titre: "Séminaire et événement d'entreprise",
        promesse:
          "Vos collaborateurs et invités déplacés sans friction, vous restez concentré sur l'événement.",
        prestations: [
          'Transferts gare et aéroport',
          'Navettes inter-sites et hôtel vers lieu',
          "Rotations sur toute la durée de l'événement",
          'Un interlocuteur unique, une facture unique',
        ],
      },
      {
        titre: 'Mariage',
        promesse:
          "De l'arrivée des invités aux retours de nuit, chaque trajet est réglé, vous vivez votre journée.",
        prestations: [
          'Transferts invités gare et aéroport',
          'Navettes cérémonie, réception, hébergement',
          'Rotations et retours de nuit',
          'Coordination multi-véhicules, berlines à autocar',
        ],
      },
      {
        titre: 'Navette de groupe',
        promesse:
          'Tout transport collectif, ponctuel ou récurrent, dimensionné à votre volume.',
        prestations: [
          'Groupes de quelques personnes à plusieurs centaines',
          'Événementiel, associatif, institutionnel',
          'Ponctuel ou récurrent',
          'Berlines, vans, autocars selon le besoin',
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  // Section 5 : CAS CLIENT (parcours de temoignages).
  // L'etape mise en avant (5 etoiles) est definie par VEDETTE_INDEX
  // dans CasClient.astro. Etape 1 = avis reel, etapes 2 a 5 = exemples
  // representatifs.
  // ------------------------------------------------------------------
  casClient: {
    eyebrow: 'Ils nous ont fait confiance',
    starsAria: 'Cinq étoiles sur cinq',
    ctaPhrase: 'Votre événement mérite la même tranquillité.',
    ctaHref: '#formulaire-devis',
    steps: [
      {
        etape: 'Arrivée des invités',
        volume: '49 invités transportés',
        type: 'Mariage',
        accroche:
          'Ponctualité parfaite, une équipe fiable et facile à joindre.',
        auteur: 'Titouan N.',
        role: 'Mariage, Loire-Atlantique',
        detail:
          "Simon a assuré le transport de nos invités le jour de notre mariage avec un grand professionnalisme. Très à l'écoute, transparent et réactif, il a pris le temps d'optimiser les trajets pour trouver le meilleur compromis entre le confort des invités et le budget. Tout s'est déroulé parfaitement : ponctualité, excellente communication et super organisation. Nous recommandons à 100 pour cent.",
      },
      {
        etape: 'Navettes inter-sites',
        volume: '2 jours de rotations',
        type: "Séminaire d'entreprise",
        accroche:
          "Une navette séminaire d'entreprise coordonnée sans le moindre retard sur deux jours.",
        auteur: 'Camille R.',
        role: 'Séminaire, secteur tertiaire',
        detail:
          "Pour notre séminaire d'entreprise à Nantes, nous avions besoin de navettes entre l'hôtel, le lieu de réunion et un restaurant. Le transport des participants a été entièrement coordonné par un seul interlocuteur, avec les transferts gare et les rotations. Aucun trajet à gérer de notre côté.",
      },
      {
        etape: 'Transfert dirigeants',
        volume: 'Flotte de berlines coordonnée',
        type: 'Transfert corporate',
        accroche:
          'Un transfert de dirigeants à Nantes avec une flotte de berlines cadrée à la minute.',
        auteur: 'Julien M.',
        role: 'Transfert dirigeants, Nantes',
        detail:
          "Nous cherchions un transport de dirigeants fiable entre la gare de Nantes, le siège et un dîner d'affaires. Véhicules impeccables, chauffeurs ponctuels, coordination sans faille. Le niveau attendu pour un transfert corporate en Loire-Atlantique.",
      },
      {
        etape: 'Grand rassemblement',
        volume: 'Plusieurs centaines de personnes',
        type: 'Navette de groupe',
        accroche:
          'Une navette de groupe de plusieurs centaines de personnes, orchestrée par une seule équipe.',
        auteur: 'Sophie L.',
        role: 'Rassemblement, Grand Ouest',
        detail:
          'Pour notre rassemblement dans le Grand Ouest, il fallait un transport de groupe de grande capacité depuis plusieurs points. Berlines, vans et autocars dimensionnés selon le volume, rotations enchaînées sans attente. Une navette événementielle clé en main.',
      },
      {
        etape: 'Retours de nuit',
        volume: "Rotations jusqu'à la fin de soirée",
        type: 'Mariage',
        accroche:
          "Des navettes de mariage et retours de nuit gérés sans qu'on y pense.",
        auteur: 'Marie et Thomas D.',
        role: 'Mariage, Vendée',
        detail:
          'Pour notre mariage en Vendée, le transport des invités et les navettes de nuit étaient notre inquiétude. Tout a été orchestré : transferts, rotations, retours de fin de soirée en sécurité. Un transport de mariage dans le Grand Ouest géré de bout en bout.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // Section 6 : DIFFERENCIATEURS.
  // ------------------------------------------------------------------
  differenciateurs: {
    eyebrow: 'Pourquoi nous',
    title: 'Un métier à part entière, pas une ligne de service.',
    items: [
      {
        titre: 'Local et humain',
        texte:
          "Basés à Nantes, nous connaissons la Loire-Atlantique et le Grand Ouest, de Saint-Nazaire à La Baule et Angers. Vous parlez à la personne qui coordonne votre événement, pas à un centre d'appel national.",
      },
      {
        titre: 'Démarche bas-carbone',
        texte:
          "Priorité à l'électrique sur nos berlines et un engagement écoresponsable honnête. On ne promet pas une flotte 100 pour cent électrique qu'un autocar dément, on réduit l'empreinte là où c'est réel.",
      },
      {
        titre: 'Transport orchestré clé en main',
        texte:
          'Véhicules, trajets, rotations, horaires, itinéraires, retours de nuit. On gère toute la logistique de déplacement de bout en bout, vous ne coordonnez aucun chauffeur.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // Section 7 : FAQ.
  // Source unique : alimente la section visible ET le JSON-LD FAQPage
  // du layout. Reponses redigees pour la citation par les moteurs IA :
  // la reponse arrive des la premiere phrase.
  // ------------------------------------------------------------------
  faq: {
    eyebrow: 'Questions fréquentes',
    title: "Les questions qu'on nous pose le plus souvent.",
    items: [
      {
        question:
          "Combien coûte le transport des participants d'un séminaire à Nantes ?",
        reponse:
          "Le transport participants séminaire se chiffre au devis, selon le nombre de collaborateurs, les véhicules mobilisés et la durée. Après un point sur vos transferts gare, navettes inter-sites et rotations, Transport Événementiel Nantes dimensionne la flotte et remet un prix clair et unique pour tout votre événement d'entreprise.",
      },
      {
        question: "Qui coordonne les navettes d'un séminaire d'entreprise ?",
        reponse:
          'Transport Événementiel Nantes coordonne tout, avec un interlocuteur unique. Nous gérons les transferts gare et aéroport, les navettes entreprise inter-sites et les rotations sur toute la durée du séminaire. Vous ne pilotez aucun chauffeur ni horaire : un seul contact suit votre dossier, du dimensionnement au jour J, et une seule facture.',
      },
      {
        question: "Combien coûte le transport d'invités pour un mariage à Nantes ?",
        reponse:
          "Le tarif dépend du nombre d'invités, des véhicules mobilisés et de la durée. Une navette mariage se chiffre au devis, après un point sur vos trajets, rotations et retours de nuit. Transport Événementiel Nantes dimensionne la flotte, de la berline à l'autocar, et vous remet un prix clair et unique, sans surprise.",
      },
      {
        question:
          'Transport Événementiel Nantes gère-t-il les transferts de groupe de grande capacité ?',
        reponse:
          "Oui, de quelques personnes à plusieurs centaines. Nous assemblons la flotte selon le volume, berlines, vans et autocars, pour l'événementiel, l'associatif ou l'institutionnel, en ponctuel comme en récurrent. La logistique, les rotations et les itinéraires sont gérés de bout en bout par une seule équipe.",
      },
      {
        question: 'Quelle zone géographique couvre Transport Événementiel Nantes ?',
        reponse:
          "Transport Événementiel Nantes intervient à Nantes, en Loire-Atlantique et dans tout le Grand Ouest. Nous desservons gares, aéroports, lieux d'événement et sites d'hébergement de la région, et organisons les trajets longue distance liés à votre événement. Basée localement, l'équipe connaît le terrain et ses contraintes.",
      },
      {
        question: "Peut-on avoir un seul interlocuteur pour tout l'événement ?",
        reponse:
          "Oui, c'est le principe même de Transport Événementiel Nantes : un interlocuteur unique, joignable, qui connaît votre dossier de A à Z. Il coordonne les véhicules, les horaires, les rotations et les retours, puis vous remet une facture unique. Vous restez concentré sur votre événement, pas sur la logistique.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // Section 8 : DEVIS (formulaire Web3Forms).
  // ATTENTION : les attributs `name` des champs ne sont PAS ici. Ils
  // restent en francais cote composant, car ce sont eux qui servent de
  // libelles dans le mail recu. Ne pas les traduire sans decision
  // explicite, sinon les mails changent de forme.
  // ------------------------------------------------------------------
  devis: {
    eyebrow: 'Parlons de votre événement',
    title: 'Décrivez-nous votre événement. On orchestre le transport.',
    subtitle:
      'Trajets, véhicules, rotations : un devis clair et un interlocuteur unique pour toute la logistique de déplacement.',
    ancrage: 'Nantes et Grand Ouest, adossé à CHL VTC.',
    // Champs caches transmis a Web3Forms.
    subject: 'Nouvelle demande de devis Transport Événementiel Nantes',
    fromName: 'Site Transport Événementiel Nantes',
    successTitle:
      'Demande reçue. On revient vers vous très vite avec un premier devis.',
    selectPlaceholder: 'Choisir...',
    submit: 'Envoyer ma demande',
    sending: 'Envoi...',
    privacy: 'Vos informations servent uniquement à établir votre devis.',
    errors: {
      required: "Merci de compléter les champs requis avant d'envoyer.",
      failed:
        "L'envoi a échoué. Merci de réessayer ou de nous contacter directement.",
      network: 'Problème de connexion. Vérifiez votre réseau puis réessayez.',
    },
    fields: {
      type: {
        label: "Type d'événement",
        options: [
          'Mariage',
          "Séminaire ou événement d'entreprise",
          'Navette de groupe',
          'Autre',
        ],
      },
      date: { label: 'Date approximative' },
      pax: { label: 'Nombre de personnes', placeholder: 'Ex : 40' },
      depart: { label: 'Ville de départ', placeholder: 'Ex : Nantes' },
      arrivee: {
        label: "Ville d'arrivée ou lieu",
        placeholder: 'Ex : Château de...',
      },
      besoins: {
        legend: 'Besoins spécifiques',
        options: [
          'Transferts gare ou aéroport',
          'Navettes de nuit',
          'Plusieurs rotations',
          'Autocar ou grande capacité',
        ],
      },
      nom: { label: 'Nom', placeholder: 'Votre nom' },
      tel: { label: 'Téléphone', placeholder: '06 00 00 00 00' },
      email: { label: 'Email', placeholder: 'vous@exemple.fr' },
      message: {
        label: 'Décrivez votre besoin',
        placeholder: 'Contexte, horaires, contraintes particulières...',
      },
    },
  },

  // ------------------------------------------------------------------
  // Services : alimente le JSON-LD (3 noeuds Service rattaches au
  // LocalBusiness). Pas d'affichage direct.
  // ------------------------------------------------------------------
  services: [
    {
      name: "Séminaire et événement d'entreprise",
      description:
        "Transferts gare et aéroport, navettes inter-sites et rotations sur toute la durée de l'événement, avec un interlocuteur unique et une facture unique.",
    },
    {
      name: 'Mariage',
      description:
        "Transport des invités de l'arrivée aux retours de nuit : navettes cérémonie, réception et hébergement, coordination multi-véhicules de la berline à l'autocar.",
    },
    {
      name: 'Navette de groupe',
      description:
        "Transport collectif ponctuel ou récurrent, de quelques personnes à plusieurs centaines, dimensionné au volume, pour l'événementiel, l'associatif et l'institutionnel.",
    },
  ],

  // ------------------------------------------------------------------
  // Blog. Reste francais uniquement (hors perimetre anglais), mais
  // externalise ici pour garder une source unique de contenu.
  // ------------------------------------------------------------------
  blog: {
    metaTitle:
      'Ressources transport événementiel | Guides séminaire, mariage et navettes, Nantes',
    metaDescription:
      'Guides pratiques pour organiser le transport de votre événement à Nantes et dans le Grand Ouest : navettes de séminaire, transport des invités de mariage, retours de nuit et coordination de flotte.',
    eyebrow: 'Ressources',
    h1: 'Ressources transport événementiel',
    intro:
      'Nos guides pour organiser le transport de votre événement à Nantes et dans le Grand Ouest : navettes de séminaire, transport des invités de mariage, rotations de flotte et retours de nuit.',
    empty: 'Les premiers articles arrivent bientôt.',
    // Page article.
    breadcrumbHome: 'Accueil',
    breadcrumbBlog: 'Blog',
    publishedOn: 'Publié le',
    updatedOn: 'Mis à jour le',
    readingTime: 'min de lecture',
    faqTitle: 'Questions fréquentes',
    ctaTitle: 'Un événement à transporter ?',
    ctaText:
      'Décrivez-nous votre besoin, on orchestre tous les trajets avec un interlocuteur unique.',
    backToBlog: 'Retour aux ressources',
    ctaHref: '/#formulaire-devis',
  },

  // ------------------------------------------------------------------
  // Pages legales. Le corps est stocke en HTML (rendu via set:html) :
  // c'est le seul moyen de conserver les liens et la mise en forme
  // sans eclater chaque paragraphe en dizaines de cles.
  // ------------------------------------------------------------------
  legal: {
    breadcrumbHome: 'Accueil',
    homeHref: '/',
    backHome: "Retour à l'accueil",
    // Rendu : "<prefixe> <date>."
    updatedPrefix: 'Dernière mise à jour le',
    mentions: {
      metaTitle: 'Mentions légales',
      metaDescription:
        'Mentions légales du site Transport Événementiel Nantes : éditeur, hébergeur, propriété intellectuelle et conception.',
      eyebrow: 'Informations légales',
      h1: 'Mentions légales',
      breadcrumb: 'Mentions légales',
      sections: [
        {
          h2: 'Éditeur du site',
          html: `<p>Le présent site est édité par <strong>CHL VTC</strong>, qui exploite l'activité de transport événementiel Transport Événementiel Nantes.</p>
<ul>
  <li>Raison sociale : CHL VTC</li>
  <li>Forme juridique : [FORME JURIDIQUE À REMPLIR]</li>
  <li>Siège social : [ADRESSE DU SIÈGE À REMPLIR]</li>
  <li>SIREN / SIRET : [NUMÉRO SIREN/SIRET À REMPLIR]</li>
  <li>Numéro de TVA intracommunautaire : [NUMÉRO DE TVA À REMPLIR]</li>
  <li>Licence de transport intérieur de personnes : [NUMÉRO DE LICENCE À REMPLIR]</li>
  <li>Courriel : <a href="mailto:contact@transport-evenementiel-nantes.fr">contact@transport-evenementiel-nantes.fr</a></li>
  <li>Téléphone : [TÉLÉPHONE À REMPLIR]</li>
</ul>`,
        },
        {
          h2: 'Directeur de la publication',
          html: `<p>Le directeur de la publication est le représentant légal de CHL VTC : [NOM DU DIRECTEUR DE PUBLICATION À REMPLIR].</p>`,
        },
        {
          h2: 'Hébergement',
          html: `<p>Le site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>`,
        },
        {
          h2: 'Conception et réalisation',
          html: `<p>La conception et la réalisation du site sont assurées par <strong>Outvolt</strong>.</p>`,
        },
        {
          h2: 'Propriété intellectuelle',
          html: `<p>L'ensemble des contenus présents sur ce site (textes, visuels, logo, éléments graphiques, mise en page) est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable de l'éditeur, est interdite.</p>`,
        },
        {
          h2: 'Responsabilité',
          html: `<p>L'éditeur s'efforce d'assurer l'exactitude des informations diffusées sur le site. Les tarifs et fourchettes indiqués dans les contenus sont donnés à titre indicatif et ne constituent pas une offre commerciale. Seul un devis établi sur demande fait foi.</p>`,
        },
        {
          h2: 'Liens externes',
          html: `<p>Le site peut contenir des liens vers des sites tiers. L'éditeur n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>`,
        },
        {
          h2: 'Données personnelles',
          html: `<p>Le traitement des données transmises via les formulaires du site est décrit dans notre <a href="/confidentialite">politique de confidentialité</a>.</p>`,
        },
      ],
    },
    confidentialite: {
      metaTitle: 'Politique de confidentialité',
      metaDescription:
        'Politique de confidentialité de Transport Événementiel Nantes : données collectées via le formulaire de devis, finalités, conservation et droits.',
      eyebrow: 'Vos données',
      h1: 'Politique de confidentialité',
      breadcrumb: 'Confidentialité',
      sections: [
        {
          h2: 'Responsable du traitement',
          html: `<p>Le responsable du traitement des données collectées sur ce site est <strong>CHL VTC</strong>, éditeur du site Transport Événementiel Nantes. Pour toute question relative à vos données, vous pouvez écrire à <a href="mailto:contact@transport-evenementiel-nantes.fr">contact@transport-evenementiel-nantes.fr</a>.</p>`,
        },
        {
          h2: 'Données collectées',
          html: `<p>Les données personnelles sont collectées uniquement lorsque vous remplissez le formulaire de demande de devis. Il s'agit des informations que vous renseignez volontairement :</p>
<ul>
  <li>Nom et prénom</li>
  <li>Adresse électronique</li>
  <li>Numéro de téléphone</li>
  <li>Nom de l'organisation, le cas échéant</li>
  <li>Détails de votre demande (type d'événement, dates, lieux, nombre de participants)</li>
</ul>
<p>Aucune donnée n'est collectée à votre insu et le site n'utilise aucun cookie publicitaire ni de traçage tiers.</p>`,
        },
        {
          h2: 'Finalité du traitement',
          html: `<p>Les données transmises servent exclusivement à traiter votre demande de devis, à vous recontacter et à organiser la prestation de transport. Elles ne font l'objet d'aucune revente ni d'aucune prospection non sollicitée.</p>`,
        },
        {
          h2: 'Base légale',
          html: `<p>Le traitement repose sur votre consentement, exprimé lors de l'envoi du formulaire, ainsi que sur l'exécution de mesures précontractuelles prises à votre demande.</p>`,
        },
        {
          h2: 'Sous-traitants',
          html: `<p>Le formulaire de contact s'appuie sur le service <strong>Web3Forms</strong> pour l'acheminement des messages, et le site est hébergé par <strong>Vercel Inc.</strong> Ces prestataires n'utilisent vos données que pour fournir ce service technique.</p>`,
        },
        {
          h2: 'Durée de conservation',
          html: `<p>Vos données sont conservées le temps nécessaire au traitement de votre demande et à la relation commerciale, puis archivées ou supprimées conformément aux obligations légales applicables. Durée de conservation indicative : [DURÉE DE CONSERVATION À REMPLIR].</p>`,
        },
        {
          h2: 'Vos droits',
          html: `<p>Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Vous pouvez exercer ces droits en écrivant à <a href="mailto:contact@transport-evenementiel-nantes.fr">contact@transport-evenementiel-nantes.fr</a>. Vous avez également le droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr).</p>`,
        },
        {
          h2: 'Cookies',
          html: `<p>Le site n'utilise que les cookies strictement nécessaires à son fonctionnement. Aucun cookie de mesure d'audience ou publicitaire n'est déposé sans votre accord.</p>`,
        },
      ],
    },
  },
} satisfies typeof fr;
