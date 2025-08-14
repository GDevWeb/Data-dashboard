# Data Dashboard – Vanilla TypeScript + Vite

## Présentation

Ce projet est un **tableau de bord de données autonome** développé avec **TypeScript**, **ES Modules**, **Tailwind CSS** et **Vite**, sans aucun framework frontend.
Son objectif principal est de **réviser et démontrer** la maîtrise des concepts clés JavaScript/TypeScript, des workflows modernes et de la construction d’interface utilisateur propre en utilisant uniquement les API du navigateur et une architecture modulaire.

---

## Objectifs du projet

- **Révision technique**
  Consolider les connaissances en JavaScript et TypeScript, notamment :

  - Définition de types stricts et utilisation des génériques
  - Organisation modulaire du code (`core/`, `logic/`, `ui/`)
  - Manipulation du DOM sans framework
  - Création d’utilitaires réutilisables

- **Développement UI**
  Créer une interface tableau réactive et maintenable avec :

  - Tri (numérique et textuel)
  - Recherche et filtres
  - Pagination
  - Statistiques en temps réel

- **Pratique du style**
  Utiliser **Tailwind CSS** pour un style rapide, clair et sans composants préfabriqués.

- **Préparation professionnelle**
  Produire un exemple prêt pour un portfolio, mettant en avant :

  - La capacité à concevoir une architecture claire et modulaire
  - La compréhension des flux de données (filtrer → trier → paginer)
  - Des compétences transférables sur des environnements avec ou sans framework

---

## Fonctionnalités

- **Colonnes triables** (ordre croissant/décroissant)
- **Barre de recherche** avec délai (debounce) pour un filtrage fluide
- **Filtre par catégorie ou disponibilité** depuis le jeu de données
- **Pagination côté client** avec taille de page configurable
- **Statistiques dynamiques** sur l’ensemble filtré :

  - Nombre d’éléments
  - Prix moyen, minimum et maximum
  - Pourcentage d’articles en stock

- **Gestion des états vides** et traitement basique des erreurs

---

## Structure du projet

```
data-dashboard/
├─ index.html
├─ src/
│  ├─ main.ts
│  ├─ types.ts
│  ├─ data/
│  │  └─ products.json
│  ├─ core/
│  │  ├─ state.ts
│  │  └─ utils.ts
│  ├─ ui/
│  │  ├─ table.ts
│  │  ├─ controls.ts
│  │  └─ summary.ts
│  └─ logic/
│     ├─ sort.ts
│     ├─ filter.ts
│     └─ paginate.ts
└─ styles.css
```

---

## Installation & Démarrage

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/votre-utilisateur/data-dashboard.git
   cd data-dashboard
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Construire la version de production**

   ```bash
   npm run build
   ```

---

## Points techniques clés

- Sécurité et robustesse grâce à TypeScript (`keyof`, génériques, tableaux en lecture seule)
- Architecture modulaire pour la clarté et la maintenabilité
- Fonctions utilitaires pour le tri, le filtrage et la pagination
- Gestion d’état sans bibliothèque externe
- Design responsive avec Tailwind CSS
- Aucun framework — uniquement API du navigateur et modules ES

---

## Intérêt pour la carrière

Ce projet démontre :

- Une **maîtrise solide des fondamentaux JavaScript et TypeScript**
- La capacité à concevoir des applications structurées et maintenables **sans dépendance à un framework**
- Une expérience avec des outils modernes (Vite, Tailwind) et une architecture modulaire
- Des compétences en manipulation de données (tri, filtrage, agrégation)
- Une adaptabilité aux projets modernes comme aux bases de code existantes

Pour un recruteur, ce projet illustre :

- La polyvalence technique
- La clarté du code
- L’autonomie dans la conception et l’implémentation de fonctionnalités complètes

---

## Futures version

- consommation d'API rest

## Licence

MIT License – libre d’utilisation, modification et distribution.

---
