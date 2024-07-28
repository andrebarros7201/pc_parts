const pool = require("./pool");

exports.getProducts = async () => {
  const { rows } = await pool.query(
    "SELECT products.name as Product, categories.type AS Type, manufacturers.name AS Manufacturer FROM products JOIN categories ON products.category_id = categories.id JOIN manufacturers ON products.manufacturer_id = manufacturers.id",
  );
  return rows;
};
