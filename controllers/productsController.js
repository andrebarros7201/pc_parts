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

exports.createProductGet = asyncHandler(async (req, res) => {
  const categories = await db.getCategories();
  const manufacturers = await db.getManufacturers();
  res.render("create", {
    title: "Create Product",
    links: links,
    categories: categories,
    manufacturers: manufacturers,
  });
});

exports.createProductPost = asyncHandler(async (req, res) => {
  const { name, type, manufacturer } = req.body;
  await db.postProduct(name, type, manufacturer);
  res.redirect("/products");
});
