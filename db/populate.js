const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  type VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS manufacturers (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (255),
  description TEXT,
  price DECIMAL (10, 2),
  category_id INTEGER REFERENCES categories(id),
  manufacturer_id INTEGER REFERENCES manufacturers(id)
);

-- Insert data into manufacturers table
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

-- Insert data into categories table
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

-- Insert data into products table
INSERT INTO products (name, description, price, category_id, manufacturer_id)
VALUES
  -- CPUs
  ('Intel Core i9', 'High performance CPU for gaming and productivity', 499.99, 1, 1),
  ('AMD Ryzen 9', 'Powerful multi-core processor for demanding tasks', 449.99, 1, 2),
  ('Intel Core i7', 'Great performance for a wide range of applications', 379.99, 1, 1),
  ('AMD Ryzen 7', 'Excellent CPU for gaming and content creation', 329.99, 1, 2),
  ('Intel Core i5', 'Solid mid-range CPU for everyday computing', 249.99, 1, 1),
  -- GPUs
  ('NVIDIA RTX 3090', 'Top-tier graphics card for extreme gaming and rendering', 1499.99, 2, 3),
  ('AMD Radeon RX 6900 XT', 'High-end GPU for gaming and professional work', 1299.99, 2, 2),
  ('NVIDIA RTX 3080', 'Powerful graphics card for high-resolution gaming', 799.99, 2, 3),
  ('AMD Radeon RX 6800 XT', 'Excellent performance for gaming and creativity', 699.99, 2, 2),
  ('NVIDIA RTX 3070', 'Great value GPU for gaming and VR', 499.99, 2, 3),
  -- Motherboards
  ('Asus ROG Strix', 'Gaming motherboard with high-end features', 299.99, 3, 11),
  ('MSI MPG Z490', 'Feature-rich motherboard for Intel CPUs', 239.99, 3, 12),
  ('Gigabyte Aorus', 'Durable motherboard with advanced cooling', 219.99, 3, 13),
  ('Asus Prime', 'Reliable motherboard for Intel platforms', 159.99, 3, 11),
  ('MSI MAG B550', 'Affordable motherboard for AMD CPUs', 139.99, 3, 12),
  -- RAM
  ('Corsair Vengeance LPX', 'High-speed DDR4 RAM for gaming', 89.99, 4, 5),
  ('Kingston HyperX Fury', 'Reliable and fast DDR4 memory', 79.99, 4, 4),
  ('Corsair Dominator Platinum', 'Premium RAM with excellent performance', 199.99, 4, 5),
  ('G.Skill Trident Z', 'RGB DDR4 RAM with high performance', 159.99, 4, 5),
  ('Kingston ValueRAM', 'Affordable and reliable DDR4 memory', 49.99, 4, 4),
  -- Storage
  ('Samsung 970 EVO', 'Fast NVMe SSD for quick load times', 129.99, 5, 8),
  ('Western Digital Blue', 'Reliable SATA SSD for everyday use', 99.99, 5, 9),
  ('Seagate Barracuda', 'High-capacity HDD for mass storage', 59.99, 5, 10),
  ('Samsung 860 EVO', 'Durable SATA SSD for enhanced performance', 89.99, 5, 8),
  ('Western Digital Black', 'High-performance NVMe SSD', 179.99, 5, 9),
  -- Power Supplies
  ('Corsair RM850x', '850W power supply with high efficiency', 129.99, 6, 5),
  ('EVGA SuperNOVA', '750W power supply with modular cables', 119.99, 6, 14),
  ('Cooler Master V750', '750W PSU with high efficiency and reliability', 109.99, 6, 15),
  ('Corsair CX650M', '650W semi-modular power supply', 79.99, 6, 5),
  ('Be Quiet! Straight Power', 'High-quality PSU with silent operation', 139.99, 6, 18),
  -- Cases
  ('NZXT H510', 'Mid-tower case with modern design', 69.99, 7, 16),
  ('Fractal Design Meshify C', 'Compact case with excellent airflow', 89.99, 7, 17),
  ('Cooler Master MasterBox', 'Versatile case for different builds', 59.99, 7, 15),
  ('Corsair 4000D', 'Stylish mid-tower case', 79.99, 7, 5),
  ('NZXT H210', 'Mini-ITX case with sleek design', 99.99, 7, 16),
  -- Cooling
  ('Cooler Master Hyper 212', 'Air cooler with high performance', 34.99, 8, 15),
  ('NZXT Kraken X63', '240mm liquid cooler with RGB', 149.99, 8, 16),
  ('Corsair H100i', '240mm liquid cooler for efficient cooling', 119.99, 8, 5),
  ('Be Quiet! Dark Rock Pro', 'Silent air cooler with high performance', 89.99, 8, 18),
  ('Noctua NH-D15', 'Dual-tower air cooler with excellent performance', 99.99, 8, 18),
  -- Monitors
  ('Philips 276E9QDSB', '27-inch monitor with IPS panel', 179.99, 9, 19),
  ('BenQ PD2700U', '27-inch 4K monitor for professionals', 499.99, 9, 20),
  ('Asus TUF Gaming', '27-inch gaming monitor with high refresh rate', 299.99, 9, 11),
  ('Samsung Odyssey G7', '27-inch curved gaming monitor', 599.99, 9, 8),
  ('Acer Predator', '27-inch monitor with G-Sync support', 499.99, 9, 11),
  -- Keyboards
  ('Logitech G Pro', 'Mechanical gaming keyboard with RGB', 129.99, 10, 6),
  ('Razer BlackWidow', 'Mechanical keyboard with customizable lighting', 139.99, 10, 7),
  ('Corsair K95', 'Premium mechanical keyboard with macro keys', 199.99, 10, 5),
  ('HyperX Alloy FPS', 'Compact mechanical keyboard for gaming', 99.99, 10, 4),
  ('SteelSeries Apex Pro', 'Mechanical keyboard with adjustable actuation', 199.99, 10, 5),
  -- Mice
  ('Logitech G502', 'High-performance gaming mouse with customizable buttons', 79.99, 11, 6),
  ('Razer DeathAdder', 'Ergonomic gaming mouse with precision sensor', 69.99, 11, 7),
  ('Corsair Dark Core', 'Wireless gaming mouse with fast response time', 89.99, 11, 5),
  ('SteelSeries Rival 600', 'Dual sensor gaming mouse for accuracy', 79.99, 11, 5),
  ('Logitech G903', 'Wireless gaming mouse with PowerPlay compatibility', 149.99, 11, 6),
  -- Headphones
  ('HyperX Cloud II', 'Comfortable gaming headset with 7.1 surround sound', 99.99, 12, 4),
  ('Corsair Void Pro', 'Wireless gaming headset with RGB lighting', 129.99, 12, 5),
  ('Logitech G Pro X', 'Gaming headset with Blue Voice technology', 129.99, 12, 6),
  ('SteelSeries Arctis 7', 'Wireless gaming headset with long battery life', 149.99, 12, 5),
  ('Razer Kraken', 'Comfortable headset with powerful sound', 79.99, 12, 7),
  -- Networking
  ('TP-Link Archer A7', 'Affordable dual-band router with good coverage', 59.99, 13, 11),
  ('Netgear Nighthawk', 'High-performance router with advanced features', 179.99, 13, 11),
  ('Asus RT-AC88U', 'Dual-band router with excellent speed', 229.99, 13, 11),
  ('Google Nest Wifi', 'Mesh Wi-Fi system for whole-home coverage', 269.99, 13, 11),
  ('Linksys WRT3200ACM', 'Open-source ready router with high speed', 199.99, 13, 11),
  -- Peripherals
  ('Elgato Stream Deck', 'Customizable control pad for streamers', 149.99, 14, 11),
  ('Logitech C920', 'HD webcam with great video quality', 79.99, 14, 6),
  ('Corsair MM800', 'RGB mouse pad with customizable lighting', 49.99, 14, 5),
  ('Razer Goliathus', 'Soft gaming mouse mat with RGB lighting', 59.99, 14, 7),
  ('SteelSeries QcK', 'High-quality mouse pad for gaming', 29.99, 14, 5);

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
