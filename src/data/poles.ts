/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GraduationCap, Megaphone, Handshake, CalendarDays, type LucideIcon } from 'lucide-react';

export interface Pole {
  slug: string;
  num: number;
  title: string;
  /** Libellé court pour la navigation / les cartes */
  short: string;
  mission: string;
  responsibilities: string[];
  icon: LucideIcon;
}

/**
 * Les 4 pôles de RACP-IMSP (source : « Structuration de RACP »).
 * Chaque pôle a sa page : /association/:slug
 */
export const POLES: Pole[] = [
  {
    slug: 'academique-mentorat',
    num: 1,
    title: 'Académique & Mentorat',
    short: 'Académique & Mentorat',
    mission: 'Créer de la valeur intellectuelle et professionnelle pour les membres.',
    responsibilities: [
      'Programme de mentorat (anciens ↔ étudiants)',
      'Orientation académique et professionnelle',
      'Webinaires thématiques (carrière, recherche, leadership)',
      'Mise en relation académique (stages, masters, bourses)',
      'Suivi des bénéficiaires',
    ],
    icon: GraduationCap,
  },
  {
    slug: 'communication-developpement',
    num: 2,
    title: 'Communication & Développement',
    short: 'Communication',
    mission: 'Donner de la visibilité et structurer la croissance.',
    responsibilities: [
      'Gestion des réseaux sociaux',
      'Newsletter',
      'Recensement des alumni',
      'Branding & image',
      'Recrutement de membres',
      'Expansion nationale / internationale',
    ],
    icon: Megaphone,
  },
  {
    slug: 'partenariats-financement',
    num: 3,
    title: 'Partenariats & Financement',
    short: 'Partenariats',
    mission: 'Assurer la durabilité financière et stratégique.',
    responsibilities: [
      'Recherche de sponsors',
      'Montage de dossiers de financement',
      'Partenariats entreprises / institutions',
      'Levée de fonds',
      'Gestion des cotisations',
    ],
    icon: Handshake,
  },
  {
    slug: 'evenements-reseau',
    num: 4,
    title: 'Événements & Réseau',
    short: 'Événements & Réseau',
    mission: 'Activer la communauté.',
    responsibilities: [
      "Organisation d'événements (conférences, afterworks)",
      'Rencontre annuelle des alumni',
      'Webinaires networking',
      'Coordination logistique',
      'Animation du réseau régional',
    ],
    icon: CalendarDays,
  },
];

export const getPole = (slug?: string): Pole | undefined =>
  POLES.find((p) => p.slug === slug);
