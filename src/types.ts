/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ResourceType = 'PDF' | 'Vidéo' | 'Fiche' | 'Annale' | 'Témoignage' | 'Livre' | 'Guide';
export type AccessLevel = 'libre' | 'interne' | 'restreint';

export type ResourceStatus = 'publié' | 'en attente' | 'rejeté';

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  subject: string;
  level: string;
  type: ResourceType;
  author: string;
  access: AccessLevel;
  thumbnail: string;
  contentUrl: string;
  date: string;
  longDescription?: string;
  status: ResourceStatus;
}

export const CATEGORIES = [
  "Ressources académiques fondamentales",
  "Annales et concours",
  "Méthodologie de travail",
  "Orientation académique et professionnelle",
  "Témoignages d'alumni",
  "Opportunités"
];

export const SUBJECTS = [
  "Mathématiques",
  "Physique",
  "Chimie",
  "Informatique",
  "Français / Philosophie",
  "Anglais",
  "Orientation",
  "Général"
];

export const LEVELS = [
  "Prépa 1 (MPSI/PCSI)",
  "Prépa 2 (MP/PC)",
  "5/2",
  "Général"
];

export const TYPES: ResourceType[] = [
  'PDF', 'Vidéo', 'Fiche', 'Annale', 'Témoignage', 'Livre', 'Guide'
];

