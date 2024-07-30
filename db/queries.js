const pool = require("./pool");

exports.getProducts = async () => {
  const { rows } = await pool.query(
    "SELECT products.name as Product, categories.type AS Type, manufacturers.name AS Manufacturer, products.price AS Price FROM products JOIN categories ON products.category_id = categories.id JOIN manufacturers ON products.manufacturer_id = manufacturers.id",
  );
  return rows;
};

exports.getCategories = async () => {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
};

exports.getManufacturers = async () => {
  const { rows } = await pool.query("SELECT * FROM manufacturers");
  return rows;
};

exports.getProductsByCategory = async (category) => {
  const { rows } = await pool.query(
    "SELECT products.name as Product, categories.type AS Type, manufacturers.name AS Manufacturer, products.price AS Price FROM products JOIN categories ON products.category_id = categories.id JOIN manufacturers ON products.manufacturer_id = manufacturers.id WHERE category_id=(SELECT id FROM categories WHERE type = ($1))",
    [category],
  );
  return rows;
};

exports.postProduct = async (name, type, manufacturer) => {
  await pool.query(
    "INSERT INTO products (name, category_id, manufacturer_id) VALUES ($1, $2, $3)",
    [name, type, manufacturer],
  );
};
