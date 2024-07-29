const asyncHandler = require("express-async-handler");
const { links } = require("../views/includes/links");
const db = require("../db/queries");

exports.categoriesGet = asyncHandler(async (req, res) => {
  const categories = await db.getCategories();
  res.render("categories", {
    title: "Categories",
    links: links,
    categories: categories,
  });
});
