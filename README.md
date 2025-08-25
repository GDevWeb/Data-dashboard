# Data Dashboard – Vanilla TypeScript + Vite

<div style="text-align:center">
<img src= "./public/data-dashboard.png" alt="Data Dashboard Social Card" style="width:80%; border-radius:10px">
</div>

### Présentation du projet

Ce projet est un **tableau de bord de données interactif** construit de zéro en utilisant **TypeScript**, **Vite** et **Tailwind CSS**. Il a été conçu comme un exercice de révision pour consolider les fondamentaux de la programmation web sans aucun framework frontend.

L'objectif est de démontrer une maîtrise des **API du navigateur**, des **modules ES** et d'une architecture de code propre et modulaire.

---

## Fonctionnalités principales

| Catégorie        | Description                                                                             |
| :--------------- | :-------------------------------------------------------------------------------------- |
| **Tri**          | Tri de données dynamique (numérique et textuel) en cliquant sur l'en-tête de colonne.   |
| **Filtres**      | Recherche par texte avec délai (debounce) et filtres par catégorie ou stock.            |
| **Pagination**   | Navigation optimisée entre les pages, avec une taille d'affichage configurable.         |
| **Statistiques** | Affichage de résumés dynamiques : prix moyen, prix min/max, nombre d'articles en stock. |

---

## Architecture et technologies

- **TypeScript** : pour un code robuste, sûr et facile à maintenir.
- **Vite** : pour un environnement de développement rapide et moderne.
- **Tailwind CSS** : pour un design minimaliste et modulaire sans dépendances de composants.
- **API du navigateur** : Utilisation exclusive du DOM et des modules ES.

Le code est organisé de manière modulaire :

- `logic/` : contient les fonctions de traitement de données (tri, filtrage, pagination).
- `core/` : gère l'état global de l'application et les utilitaires.
- `ui/` : responsable de la création et de la mise à jour des composants de l'interface.

---

## Démarrage rapide

1.  **Cloner le projet :**

    ```bash
    git clone https://github.com/votre-utilisateur/data-dashboard.git
    cd data-dashboard
    ```

2.  **Installer les dépendances :**

    ```bash
    npm install
    ```

3.  **Lancer l'application en mode développement :**

    ```bash
    npm run dev
    ```

4.  **Construire la version de production :**

    ```bash
    npm run build
    ```

---

## Perspectives et évolutions futures

- Consommation de données depuis une API REST.
- Persistance de l'état de l'interface dans le stockage local du navigateur.
- Ajout de graphiques de données pour une visualisation plus avancée.

---

## Licence

Ce projet est sous **licence MIT** – libre d’utilisation, de modification et de distribution.

---

## Phase 2 - backend - base de données

### Conceptualisation MCD de e-commerce

```sql
-- Step 1: Create categories table
CREATE TABLE IF NOT EXISTS categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- Step 2: Create customers table
CREATE TABLE IF NOT EXISTS customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL CHECK (date_of_birth <= CURRENT_DATE),
    email VARCHAR(100) UNIQUE NOT NULL CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,4}$'),
    phone_number VARCHAR(20) NOT NULL CHECK (phone_number ~ '^\+?[0-9]{10,15}$'),
    address VARCHAR(100) NOT NULL CHECK (LENGTH(address) >= 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    last_purchase_date TIMESTAMP,
    total_orders INTEGER DEFAULT 0,
    total_spent NUMERIC(10, 2) DEFAULT 0.00,
    customer_type VARCHAR(50),
    preferred_contact_method VARCHAR(50)
);

-- Step 3: Create products table
CREATE TABLE IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    category_id INTEGER NOT NULL REFERENCES categories (category_id),
    price NUMERIC(10, 2) NOT NULL,
    stock_quantity INTEGER NOT NULL
);

-- Step 4: Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
    review_id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL REFERENCES products (product_id),
    customer_id INTEGER NOT NULL REFERENCES customers (customer_id),
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comments VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Step 5: Create orders table
CREATE TABLE IF NOT EXISTS orders(
    order_id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL REFERENCES products(product_id),
    customer_id INTEGER NOT NULL REFERENCES customers(customer_id),
    order_date DATE NOT NULL DEFAULT CURRENT_DATE,
    quantity INTEGER NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    order_status VARCHAR(50) NOT NULL
);
```
