-- Script de données de test pour la base de données
-- Insertion des catégories
INSERT INTO
  categories (name)
VALUES
  ('Electronique'),
  ('Vetements'),
  ('Livres'),
  ('Maison & Jardin'),
  ('Sports & Loisirs'),
  ('Beauté & Sante'),
  ('Jouets'),
  ('Alimentaire'),
  ('Automobile'),
  ('Informatique');

-- Insertion des clients
INSERT INTO
  customers (
    first_name,
    last_name,
    date_of_birth,
    email,
    phone_number,
    address
  )
VALUES
  (
    'Jean',
    'Dupont',
    '1995-07-22',
    'jean.dupont@email.com',
    '+33711223344',
    '456 Avenue des Champs-Élysées, 75008 Paris'
  ),
  (
    'Sophie',
    'Lefebvre',
    '1988-02-10',
    'sophie.lefebvre@email.com',
    '+33699887766',
    '789 Boulevard Saint-Germain, 75006 Paris'
  ),
  (
    'Pierre',
    'Martin',
    '1991-09-01',
    'pierre.martin@email.com',
    '+33722334455',
    '10 Rue de Rivoli, 75004 Paris'
  ),
  (
    'Emilie',
    'Petit',
    '1993-04-30',
    'emilie.petit@email.com',
    '+33688776655',
    '11 Rue du Faubourg Saint-Honoré, 75008 Paris'
  ),
  (
    'Luc',
    'Bernard',
    '1980-12-05',
    'luc.bernard@email.com',
    '+33677665544',
    '22 Avenue Montaigne, 75008 Paris'
  ),
  (
    'Chloe',
    'Roux',
    '1998-06-18',
    'chloe.roux@email.com',
    '+33733445566',
    '33 Rue de la Verrerie, 75004 Paris'
  );

-- Insertion des produits
INSERT INTO
  products (name, category_id, price, stock_quantity)
VALUES
  -- Électronique (category_id = 1)
  ('iPhone 15', 1, 999.99, 50),
  ('MacBook Pro', 1, 2499.99, 25),
  ('AirPods Pro', 1, 279.99, 100),
  ('Samsung Galaxy S24', 1, 899.99, 40),
  ('iPad Air', 1, 699.99, 35),
  -- Vêtements (category_id = 2)
  ('T-shirt Nike', 2, 29.99, 200),
  ('Jean Levi''s 501', 2, 89.99, 120),
  ('Robe Zara', 2, 49.99, 80),
  ('Sneakers Adidas', 2, 119.99, 150),
  ('Veste en cuir', 2, 299.99, 30),
  -- Livres (category_id = 3)
  ('Le Petit Prince', 3, 12.99, 300),
  ('Harry Potter Coffret', 3, 49.99, 100),
  ('1984 de Orwell', 3, 15.99, 200),
  ('Dune', 3, 22.99, 150),
  ('L''Étranger', 3, 9.99, 250),
  -- Maison & Jardin (category_id = 4)
  ('Aspirateur Dyson', 4, 399.99, 20),
  ('Cafetière Nespresso', 4, 199.99, 45),
  ('Plantes vertes lot', 4, 34.99, 60),
  ('Lampe de bureau', 4, 79.99, 70),
  ('Coussin déco', 4, 19.99, 100),
  -- Sports & Loisirs (category_id = 5)
  ('Vélo électrique', 5, 1299.99, 15),
  ('Tapis de yoga', 5, 39.99, 80),
  ('Raquette de tennis', 5, 129.99, 40),
  ('Ballon de football', 5, 24.99, 90),
  ('Haltères 10kg', 5, 49.99, 60);

-- Insertion des avis clients
INSERT INTO
  reviews (
    product_id,
    customer_id,
    rating,
    comments,
    created_at
  )
VALUES
  -- Avis pour iPhone 15
  (
    1,
    1,
    5,
    'Excellent téléphone, très satisfaite de mon achat !',
    '2024-08-19 10:30:00'
  ),
  (
    1,
    3,
    4,
    'Bon produit mais un peu cher',
    '2024-08-20 14:15:00'
  ),
  (
    1,
    7,
    5,
    'Interface intuitive, je recommande',
    '2024-08-21 09:45:00'
  ),
  -- Avis pour MacBook Pro
  (
    2,
    4,
    5,
    'Performance exceptionnelle pour le travail',
    '2024-08-18 16:20:00'
  ),
  (
    2,
    6,
    4,
    'Très bon ordinateur, livraison rapide',
    '2024-08-22 11:30:00'
  ),
  -- Avis pour T-shirt Nike
  (
    6,
    2,
    4,
    'Bonne qualité, taille bien',
    '2024-08-17 15:45:00'
  ),
  (
    6,
    5,
    3,
    'Correct mais sans plus',
    '2024-08-19 13:20:00'
  ),
  (
    6,
    7,
    5,
    'Très confortable, parfait pour le sport',
    '2024-08-20 17:30:00'
  ),
  -- Avis pour Jean Levi's
  (
    7,
    1,
    5,
    'Coupe parfaite, excellent rapport qualité-prix',
    '2024-08-21 12:15:00'
  ),
  (
    7,
    3,
    4,
    'Classique et durable',
    '2024-08-16 14:30:00'
  ),
  -- Avis pour Le Petit Prince
  (
    11,
    3,
    5,
    'Un classique incontournable',
    '2024-08-20 10:00:00'
  ),
  (
    11,
    6,
    5,
    'Magnifique édition, très beau livre',
    '2024-08-23 16:45:00'
  ),
  -- Avis pour Aspirateur Dyson
  (
    16,
    4,
    4,
    'Efficace mais bruyant',
    '2024-08-22 09:30:00'
  ),
  (
    16,
    7,
    5,
    'Aspiration parfaite, très content',
    '2024-08-24 11:15:00'
  ),
  -- Avis pour Vélo électrique
  (
    21,
    4,
    5,
    'Révolutionnaire ! Plus jamais sans',
    '2024-08-23 18:00:00'
  ),
  (
    21,
    6,
    4,
    'Bon vélo, autonomie correcte',
    '2024-08-24 08:30:00'
  );

-- Insertion des commandes
INSERT INTO
  orders (
    product_id,
    customer_id,
    order_date,
    quantity,
    price,
    order_status
  )
VALUES
  -- Commandes récentes
  (1, 1, '2024-08-18', 1, 999.99, 'Livré'),
  (6, 1, '2024-08-18', 2, 29.99, 'Livré'),
  (11, 1, '2024-08-19', 1, 12.99, 'Livré'),
  (2, 4, '2024-08-17', 1, 2499.99, 'Livré'),
  (16, 4, '2024-08-22', 1, 399.99, 'En transit'),
  (1, 3, '2024-08-19', 1, 999.99, 'Livré'),
  (7, 3, '2024-08-20', 1, 89.99, 'Livré'),
  (11, 3, '2024-08-20', 3, 12.99, 'Livré'),
  (6, 2, '2024-08-16', 3, 29.99, 'Livré'),
  (22, 2, '2024-08-20', 1, 39.99, 'En préparation'),
  (17, 5, '2024-08-17', 1, 199.99, 'Livré'),
  (18, 5, '2024-08-17', 2, 34.99, 'Livré'),
  (3, 6, '2024-08-21', 1, 279.99, 'Livré'),
  (21, 6, '2024-08-24', 1, 1299.99, 'En transit'),
  (16, 2, '2024-08-23', 1, 399.99, 'Livré'),
  (19, 1, '2024-08-24', 1, 79.99, 'En préparation'),
  (9, 6, '2024-08-24', 1, 119.99, 'En préparation'),
  (7, 5, '2024-07-15', 1, 89.99, 'Livré'),
  (20, 6, '2024-07-15', 2, 19.99, 'Livré'),
  (8, 7, '2024-08-20', 1, 49.99, 'Livré'),
  (14, 4, '2024-08-21', 1, 22.99, 'Livré'),
  (24, 3, '2024-08-21', 1, 24.99, 'En transit'),
  (21, 6, '2024-08-22', 1, 1299.99, 'Livré'),
  (4, 7, '2024-08-23', 1, 899.99, 'En préparation'),
  (12, 5, '2024-08-23', 1, 49.99, 'Livré'),
  -- Commandes plus anciennes pour l'historique
  (5, 1, '2024-07-15', 1, 699.99, 'Livré'),
  (13, 1, '2024-06-20', 1, 15.99, 'Livré'),
  (23, 2, '2024-07-10', 1, 129.99, 'Livré'),
  (15, 3, '2024-06-25', 1, 9.99, 'Livré'),
  (25, 4, '2024-05-18', 1, 49.99, 'Livré'),
  (10, 5, '2024-07-05', 1, 299.99, 'Livré'),
  (22, 5, '2024-06-30', 1, 39.99, 'Livré'),
  (24, 4, '2024-05-22', 2, 24.99, 'Livré'),
  (19, 5, '2024-07-18', 1, 79.99, 'Livré');