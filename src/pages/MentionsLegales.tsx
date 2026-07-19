/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import LegalLayout, { LegalSection } from '../components/LegalLayout';

const EMAIL = 'racp-imsp@racp-imsp.org';

const MentionsLegales = () => {
  return (
    <LegalLayout
      title="Mentions légales"
      subtitle="Informations sur l'éditeur et l'hébergement du site."
      disclaimer="Bloc à compléter et à faire valider avant publication (nom officiel, siège, responsable de la publication, coordonnées de l'hébergeur)."
    >
      <LegalSection title="Éditeur">
        <p>
          Réseau Alumni des Classes Préparatoires de l'IMSP (RACP-IMSP), association. Contact :{' '}
          <a href={`mailto:${EMAIL}`} className="text-primary font-medium hover:underline">
            {EMAIL}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>
          Site hébergé sur l'infrastructure Cloudflare (Workers). À compléter avec les coordonnées
          complètes de l'hébergeur retenu par l'association.
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          Le logo, les textes et les photographies du campus de l'IMSP sont la propriété du réseau et
          de ses contributeurs. Toute reproduction sans autorisation est interdite.
        </p>
      </LegalSection>

      <LegalSection title="Crédits">
        <p>Photographies : campus de l'IMSP. Conception : RACP-IMSP.</p>
      </LegalSection>
    </LegalLayout>
  );
};

export default MentionsLegales;
