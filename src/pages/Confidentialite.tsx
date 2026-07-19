/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import LegalLayout, { LegalSection } from '../components/LegalLayout';

const EMAIL = 'racp-imsp@racp-imsp.org';

const Confidentialite = () => {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      subtitle="Comment le RACP-IMSP collecte et protège vos données personnelles."
      disclaimer="Modèle à faire valider juridiquement avant publication définitive."
    >
      <p className="text-muted-foreground leading-relaxed">
        Le RACP-IMSP attache une grande importance à la protection des données personnelles, en
        particulier celles des étudiants accompagnés dans le cadre du mentorat.
      </p>

      <LegalSection title="Données collectées">
        <p>
          Nous collectons uniquement les informations nécessaires à l'adhésion et au programme de
          mentorat : identité, coordonnées, parcours académique, objectifs et préférences
          d'accompagnement.
        </p>
      </LegalSection>

      <LegalSection title="Finalités">
        <ul className="list-disc pl-5 space-y-2">
          <li>Gérer l'adhésion au réseau et l'annuaire des membres.</li>
          <li>Organiser la mise en relation des binômes de mentorat.</li>
          <li>Assurer le suivi des accompagnements.</li>
          <li>Communiquer sur la vie du réseau.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Consentement">
        <p>
          Vos données ne sont traitées qu'avec votre consentement explicite, recueilli lors de
          l'inscription. Pour les mineurs, l'accord du responsable légal est requis.
        </p>
      </LegalSection>

      <LegalSection title="Conservation & partage">
        <p>
          Les données sont conservées le temps de votre engagement dans le réseau et ne sont jamais
          cédées à des tiers à des fins commerciales. Elles sont accessibles aux seules personnes en
          charge de la coordination.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Vous pouvez à tout moment demander l'accès, la rectification ou la suppression de vos
          données en écrivant à{' '}
          <a href={`mailto:${EMAIL}`} className="text-primary font-medium hover:underline">
            {EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
};

export default Confidentialite;
