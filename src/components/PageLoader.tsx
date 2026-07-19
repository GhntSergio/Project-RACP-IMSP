/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Fallback affiché pendant le chargement paresseux (lazy) d'une page.
 * Occupe l'espace disponible et centre un spinner discret aux couleurs du thème.
 */
const PageLoader = () => {
  return (
    <div className="flex-grow flex items-center justify-center py-32">
      <div
        className="h-10 w-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin"
        role="status"
        aria-label="Chargement en cours"
      />
    </div>
  );
};

export default PageLoader;
