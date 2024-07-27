const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  type VARCHAR ( 255 )
);

CREATE TABLE IF NOT EXISTS manufacturers (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 )
);

CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  category_id INTEGER REFERENCES categories(id),
  manufacturer_id INTEGER REFERENCES manufacturers(id));
  
  INSERT INTO manufacturers (name)
VALUES
  ('Intel'),
  ('AMD'),
  ('NVIDIA'),
  ('Kingston'),
  ('Corsair'),
  ('Logitech'),
  ('Razer'),
  ('Samsung'),
  ('Western Digital'),
  ('Seagate'),
  ('Asus'),
  ('MSI'),
  ('Gigabyte'),
  ('EVGA'),
  ('Cooler Master'),
  ('NZXT'),
  ('Fractal Design'),
  ('Be Quiet!'),
  ('Philips'),
  ('BenQ');

INSERT INTO categories (type)
VALUES
  ('CPU'),
  ('GPU'),
  ('Motherboard'),
  ('RAM'),
  ('Storage'),
  ('Power Supply'),
  ('Case'),
  ('Cooling'),
  ('Monitor'),
  ('Keyboard'),
  ('Mouse'),
  ('Headphones'),
  ('Networking'),
  ('Peripherals');

INSERT INTO products (name, category_id, manufacturer_id)
VALUES
  ('Intel Core i9-13900K', 1, 1),
  ('NVIDIA GeForce RTX 4090', 2, 2),
  ('Kingston Fury Renegade DDR5-6000', 4, 3),
  ('Corsair Vengeance RGB Pro DDR4-3200', 4, 4);

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/pc_parts`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
