/*
  Chaine d'envoi des formulaires de devis. IMPLEMENTATION UNIQUE.

  Pourquoi un module partage plutot qu'un script par formulaire : le suivi de
  conversion Google Ads repose sur une sequence precise, et sur elle seule.

      envoi accepte par Web3Forms
        -> sessionStorage['devis-envoye'] = horodatage
        -> redirection vers /devis-envoye
        -> la page de confirmation lit le marqueur, pousse
           dataLayer { event: 'generate_lead' }, et ne supprime le
           marqueur que lorsque GTM confirme avoir traite l'evenement

  Deux copies de cette sequence, c'est deux occasions de diverger, et une
  divergence ne se voit pas : le formulaire continue d'envoyer, seule la
  conversion disparait des rapports. Le trafic est paye 2,50 EUR le clic, une
  mesure fausse coute plus cher que le formulaire lui-meme. D'ou une seule
  fonction, appelee par tous les formulaires du site.

  Le marqueur n'est pose QUE sur une reponse acceptee : jamais dans les
  branches d'erreur ou de reseau, sinon le taux de conversion serait faux.

  L'evenement generate_lead n'est deliberement PAS pousse ici : la redirection
  qui suit detruit le contexte JS de la page, souvent avant que GTM ait traite
  le push, et l'evenement serait perdu. On depose un marqueur, la page de
  confirmation pousse. sessionStorage plutot qu'un parametre d'URL : une URL
  se partage et se met en favori, le marqueur serait falsifiable.

  Contrat attendu du balisage, cote .astro :
    <form data-devis-form data-sent-href="/devis-envoye"> ... </form>
      un bouton  .devis-submit  a l'interieur
      un element .devis-error   a l'interieur (hidden par defaut, role=alert)
  Tout formulaire qui respecte ce contrat est branche automatiquement, quels
  que soient ses champs. Les deux formulaires du site n'ont pas les memes.
*/

const ENDPOINT = 'https://api.web3forms.com/submit';
const MARQUEUR = 'devis-envoye';

/*
  Configuration lue par le frontmatter des .astro pour remplir les champs
  caches. Exportee d'ici, et pas redeclaree dans chaque composant : les deux
  formulaires doivent atterrir dans la MEME boite et rediriger vers la MEME
  page de confirmation, sans quoi la conversion n'est plus comparable d'une
  page a l'autre.
*/
export const WEB3FORMS_KEY = '4dcb99a0-1a80-4aa2-958f-3785bc0d2bb7';
export const PAGE_ENVOI = '/devis-envoye';

const PAGE_ENVOI_PAR_DEFAUT = PAGE_ENVOI;

/*
  Messages d'erreur. Regroupes ici pour rester coherents d'un formulaire a
  l'autre, et rediges en clair : ils disent ce qui s'est passe ET quoi faire.
  L'audience a plus de 45 ans, un "Une erreur est survenue" la laisse sans
  action possible.
*/
const MESSAGES = {
  champsManquants:
    'Merci de compléter les champs obligatoires avant d\'envoyer. Le premier champ concerné a été sélectionné.',
  emailInvalide:
    'L\'adresse email ne semble pas valide. Vérifiez-la, elle nous sert à vous envoyer le devis.',
  telephoneInvalide:
    'Le numéro de téléphone ne semble pas valide. Indiquez un numéro à 10 chiffres, par exemple 06 12 34 56 78.',
  envoiRefuse:
    'L\'envoi a échoué. Merci de réessayer, ou de nous appeler directement au 06 84 33 86 25.',
  reseau:
    'Problème de connexion. Vérifiez votre réseau puis réessayez, ou appelez-nous au 06 84 33 86 25.',
};

/*
  Message d'erreur adapte au premier champ invalide, plutot qu'un message
  generique. On distingue les trois cas que le visiteur peut reellement
  produire : champ vide, email mal forme, telephone mal forme.
*/
function messagePour(champ: HTMLElement | null): string {
  if (!champ) return MESSAGES.champsManquants;

  const controle = champ as HTMLInputElement;
  // valueMissing : le champ est simplement vide, le message generique suffit.
  if (controle.validity?.valueMissing) return MESSAGES.champsManquants;

  if (controle.type === 'email') return MESSAGES.emailInvalide;
  if (controle.type === 'tel') return MESSAGES.telephoneInvalide;

  return MESSAGES.champsManquants;
}

function brancher(form: HTMLFormElement): void {
  const errorBox = form.querySelector<HTMLElement>('.devis-error');
  if (!errorBox) return;

  const sentHref = form.dataset.sentHref ?? PAGE_ENVOI_PAR_DEFAUT;

  const submitBtn = form.querySelector<HTMLButtonElement>('.devis-submit');
  const submitLabel = submitBtn?.querySelector<HTMLElement>('.type-button');
  const defaultLabel = submitLabel?.textContent ?? 'Envoyer ma demande';

  const setError = (message: string) => {
    errorBox.textContent = message;
    errorBox.hidden = false;
    // On ramene le message dans le champ de vision : sur mobile il peut se
    // trouver hors ecran au moment ou il apparait.
    errorBox.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  };
  const clearError = () => {
    errorBox.textContent = '';
    errorBox.hidden = true;
  };

  const setSending = (sending: boolean) => {
    if (!submitBtn) return;
    submitBtn.disabled = sending;
    submitBtn.setAttribute('aria-busy', String(sending));
    if (submitLabel) {
      submitLabel.textContent = sending ? 'Envoi...' : defaultLabel;
    }
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearError();

    // Validation client via les contraintes natives HTML. novalidate sur le
    // <form> desactive les bulles du navigateur, pas l'API de validite : on
    // garde la verification et on affiche nos propres messages, en francais
    // et au meme endroit pour tous les cas.
    if (!form.checkValidity()) {
      const premierInvalide = form.querySelector<HTMLElement>(':invalid');
      premierInvalide?.focus();
      setError(messagePour(premierInvalide));
      return;
    }

    setSending(true);

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        try {
          // Horodatage, et non '1' : la page de confirmation ne consomme
          // plus le marqueur des qu'elle le lit, elle attend que GTM ait
          // reellement traite le push. Un marqueur qui survit a besoin
          // d'une date de peremption, sinon un onglet laisse ouvert
          // pourrait le rejouer beaucoup plus tard. Voir devis-envoye.astro.
          sessionStorage.setItem(MARQUEUR, String(Date.now()));
        } catch {
          // Stockage indisponible (navigation privee stricte, quota). La
          // demande est partie, on redirige quand meme : perdre la mesure
          // vaut mieux que bloquer le visiteur sur le formulaire.
        }

        // Le bouton reste desactive pendant la navigation, ce qui evite un
        // second envoi si la redirection tarde.
        window.location.assign(sentHref);
      } else {
        setSending(false);
        setError(MESSAGES.envoiRefuse);
      }
    } catch {
      setSending(false);
      setError(MESSAGES.reseau);
    }
  });
}

/*
  Branche tous les formulaires de devis presents dans la page. Appelee une
  fois par page qui en contient un. Aucune page n'en a deux aujourd'hui, mais
  la boucle evite d'avoir a y penser si cela change.
*/
export function brancherFormulairesDevis(): void {
  document
    .querySelectorAll<HTMLFormElement>('form[data-devis-form]')
    .forEach(brancher);
}
