/*
  Donnees FAQ de Cortege, source unique.
  Utilisees a la fois par la section FAQ visible (Faq.astro) et par le
  balisage JSON-LD FAQPage dans le layout. Editer ici met a jour les deux,
  aucune divergence de texte possible.

  Reponses redigees pour la citation IA : la reponse arrive des la premiere
  phrase, factuelle, 40 a 60 mots, coherente avec le positionnement local.
*/
export interface FaqItem {
  question: string;
  reponse: string;
}

export const FAQ: FaqItem[] = [
  {
    question: 'Combien coûte le transport des participants d\'un séminaire à Nantes ?',
    reponse:
      'Le transport participants séminaire se chiffre au devis, selon le nombre de collaborateurs, les véhicules mobilisés et la durée. Après un point sur vos transferts gare, navettes inter-sites et rotations, Transport Événementiel Nantes dimensionne la flotte et remet un prix clair et unique pour tout votre événement d\'entreprise.',
  },
  {
    question: 'Qui coordonne les navettes d\'un séminaire d\'entreprise ?',
    reponse:
      'Transport Événementiel Nantes coordonne tout, avec un interlocuteur unique. Nous gérons les transferts gare et aéroport, les navettes entreprise inter-sites et les rotations sur toute la durée du séminaire. Vous ne pilotez aucun chauffeur ni horaire : un seul contact suit votre dossier, du dimensionnement au jour J, et une seule facture.',
  },
  {
    question: 'Combien coûte le transport d\'invités pour un mariage à Nantes ?',
    reponse:
      'Le tarif dépend du nombre d\'invités, des véhicules mobilisés et de la durée. Une navette mariage se chiffre au devis, après un point sur vos trajets, rotations et retours de nuit. Transport Événementiel Nantes dimensionne la flotte, de la berline à l\'autocar, et vous remet un prix clair et unique, sans surprise.',
  },
  {
    question: 'Transport Événementiel Nantes gère-t-il les transferts de groupe de grande capacité ?',
    reponse:
      'Oui, de quelques personnes à plusieurs centaines. Nous assemblons la flotte selon le volume, berlines, vans et autocars, pour l\'événementiel, l\'associatif ou l\'institutionnel, en ponctuel comme en récurrent. La logistique, les rotations et les itinéraires sont gérés de bout en bout par une seule équipe.',
  },
  {
    question: 'Quelle zone géographique couvre Transport Événementiel Nantes ?',
    reponse:
      'Transport Événementiel Nantes intervient à Nantes, en Loire-Atlantique et dans tout le Grand Ouest. Nous desservons gares, aéroports, lieux d\'événement et sites d\'hébergement de la région, et organisons les trajets longue distance liés à votre événement. Basée localement, l\'équipe connaît le terrain et ses contraintes.',
  },
  {
    question: 'Peut-on avoir un seul interlocuteur pour tout l\'événement ?',
    reponse:
      'Oui, c\'est le principe même de Transport Événementiel Nantes : un interlocuteur unique, joignable, qui connaît votre dossier de A à Z. Il coordonne les véhicules, les horaires, les rotations et les retours, puis vous remet une facture unique. Vous restez concentré sur votre événement, pas sur la logistique.',
  },
];
