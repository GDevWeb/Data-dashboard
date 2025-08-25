-- create an ENUM type 
create TYPE products_category AS ENUM (
  'Peripherals',
  'Display',
  'Audio',
  'Components',
  'Storage',
  'Furniture',
  'Accessories',
  'Electronics',
  'Wearables',
  'Gadgets'
);

-- create table products
CREATE TABLE
  IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    category products_category,
    price NUMERIC(10, 2) NOT NULL,
    stock_quantity INTEGER NOT NULL
  );