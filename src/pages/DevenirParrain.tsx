/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import MentoratForm, { type StepDef } from '../components/MentoratForm';

const steps: StepDef[] = [
  {
    title: 'Votre identité',
    fields: [
      { name: 'prenom', label: 'Prénom', required: true, half: true },
      { name: 'nom', label: 'Nom', required: true, half: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'whatsapp', label: 'WhatsApp / téléphone', type: 'tel', required: true, half: true },
      { name: 'pays', label: 'Pays de résidence', required: true, half: true },
      { name: 'fuseau', label: 'Fuseau horaire', placeholder: 'ex. GMT+1', half: true },
    ],
  },
  {
    title: 'Votre parcours IMSP',
    fields: [
      { name: 'promotion', label: 'Promotion / année de sortie', required: true, half: true, placeholder: 'ex. 2018' },
      {
        name: 'filiere',
        label: 'Filière en prépa',
        type: 'select',
        half: true,
        options: ['MPSI / MP', 'PCSI / PC', 'PSI', 'Autre'],
      },
      { name: 'parcours', label: 'Parcours post-prépa', placeholder: 'ex. École Polytechnique, Master, doctorat…' },
    ],
  },
  {
    title: 'Votre engagement',
    fields: [
      { name: 'expertise', label: 'Domaines d’expertise / écoles que vous connaissez', type: 'textarea' },
      { name: 'dispo', label: 'Disponibilité', placeholder: 'ex. 2h par mois', half: true },
      {
        name: 'capacite',
        label: 'Nombre de filleul(e)s souhaité',
        type: 'select',
        half: true,
        options: ['1', '2', '3'],
      },
      { name: 'canaux', label: 'Canaux préférés', placeholder: 'WhatsApp, visio, email…' },
      { name: 'motivation', label: 'Pourquoi souhaitez-vous devenir mentor ?', type: 'textarea', required: true },
    ],
  },
  {
    title: 'Validation',
    fields: [
      { name: 'charte', label: "J'accepte la charte du mentorat RACP-IMSP.", type: 'checkbox', required: true },
      {
        name: 'rgpd',
        label: 'J’accepte que mes données soient traitées conformément à la politique de confidentialité.',
        type: 'checkbox',
        required: true,
      },
    ],
  },
];

const DevenirParrain = () => (
  <MentoratForm
    title="Devenez parrain / marraine"
    subtitle="Partagez votre expérience et guidez un(e) étudiant(e) de la prépa. Quelques heures par mois suffisent."
    steps={steps}
    confirmTitle="Candidature envoyée !"
    confirmMessage="Merci pour votre engagement. Le pôle Académique & Mentorat reviendra vers vous pour la session de présentation."
  />
);

export default DevenirParrain;
