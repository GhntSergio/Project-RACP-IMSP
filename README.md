# RACP-IMSP

Plateforme officielle du **Réseau Alumni des Classes Préparatoires de l'IMSP**.
*Excellence, Entraide et Visibilité.*

Bibliothèque de ressources académiques, mentorat et mise en réseau des anciens et
actuels étudiants des classes préparatoires de l'IMSP.

## Stack technique

- **React 19** + **TypeScript**
- **Vite 6** (build & serveur de dev)
- **Tailwind CSS 4**
- **React Router 7** (routing, avec chargement paresseux par route)
- **Recharts** (tableau de bord admin), **Motion** (animations), **cmdk** (palette de commandes), **Sonner** (notifications)

> Persistance des données prévue via **Supabase** (Postgres + Auth + Storage). En attendant,
> l'application fonctionne sur des données de démonstration (`src/data/mockResources.ts`).

## Prérequis

- **Node.js ≥ 20** (Node 20 ou 22 LTS recommandé). React Router 7 et Tailwind 4 ne
  fonctionnent pas sous Node 18.

## Lancer en local

1. Installer les dépendances :
   ```bash
   npm install
   ```
2. (Optionnel pour l'instant) copier `.env.example` en `.env.local` et renseigner les
   variables — utile une fois le backend Supabase branché.
3. Démarrer le serveur de développement :
   ```bash
   npm run dev
   ```
   L'application est servie sur http://localhost:3000.

## Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement (port 3000) |
| `npm run build` | Build de production dans `dist/` |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Vérification des types TypeScript (`tsc --noEmit`) |
| `npm run clean` | Supprime le dossier `dist/` |

## Structure

```
src/
├── components/       Composants partagés (Navbar, Footer, ResourceCard, …)
│   └── admin/        Layout et éléments de l'espace d'administration
├── context/          Contextes React (thème clair/sombre)
├── data/             Données de démonstration (mockResources)
├── lib/              Utilitaires
├── pages/            Pages publiques (Home, Library, About, Contact, …)
│   └── admin/        Pages d'administration (Dashboard, Resources, …)
├── App.tsx           Routing applicatif
└── main.tsx          Point d'entrée
```
