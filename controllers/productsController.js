const asyncHandler = require("express-async-handler");
const db = require("../db/queries");
const { links } = require("../views/includes/links");

exports.productsGet = asyncHandler(async (req, res) => {
  const products = await db.getProducts();
  console.log(products);
  res.render("products", {
    title: "Products",
    links: links,
    products: products,
  });
});
