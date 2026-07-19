/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import MentoratForm, { type StepDef } from '../components/MentoratForm';

const steps: StepDef[] = [
  {
    title: 'Qui es-tu ?',
    fields: [
      { name: 'prenom', label: 'Prénom', required: true, half: true },
      { name: 'nom', label: 'Nom', required: true, half: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'whatsapp', label: 'WhatsApp', type: 'tel', required: true, half: true },
      { name: 'ville', label: 'Ville', half: true },
    ],
  },
  {
    title: 'Ta situation',
    fields: [
      {
        name: 'niveau',
        label: 'Niveau / classe',
        type: 'select',
        required: true,
        half: true,
        options: ['Prépa 1 (MPSI/PCSI)', 'Prépa 2 (MP/PC/PSI)', '5/2', 'Autre'],
      },
      { name: 'filiere_visee', label: 'Filière visée', half: true },
      { name: 'objectifs', label: 'Tes objectifs pour l’année', type: 'textarea', required: true },
      { name: 'difficultes', label: 'Tes principales difficultés', type: 'textarea' },
    ],
  },
  {
    title: 'Tes préférences',
    fields: [
      { name: 'ecoles_cibles', label: 'Écoles / concours qui t’intéressent' },
      { name: 'dispo', label: 'Disponibilité', placeholder: 'ex. 1h par semaine', half: true },
      {
        name: 'canal',
        label: 'Canal préféré',
        type: 'select',
        half: true,
        options: ['WhatsApp', 'Visio', 'Email', 'Téléphone'],
      },
    ],
  },
  {
    title: 'Consentement',
    fields: [
      { name: 'charte', label: "J'accepte la charte du mentorat RACP-IMSP.", type: 'checkbox', required: true },
      {
        name: 'rgpd',
        label: 'J’accepte que mes données soient traitées conformément à la politique de confidentialité.',
        type: 'checkbox',
        required: true,
      },
      {
        name: 'parental',
        label: 'J’ai l’autorisation de mon responsable légal (si je suis mineur(e)).',
        type: 'checkbox',
      },
    ],
  },
];

const DevenirFilleul = () => (
  <MentoratForm
    title="Trouve ton mentor"
    subtitle="Bénéficie des conseils d'un(e) aîné(e) passé(e) par la prépa : méthodes, orientation, motivation."
    steps={steps}
    confirmTitle="Demande envoyée !"
    confirmMessage="Merci ! Le pôle Académique & Mentorat étudie ta demande et reviendra vers toi pour la mise en relation."
  />
);

export default DevenirFilleul;
