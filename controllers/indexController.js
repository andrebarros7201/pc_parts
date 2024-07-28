const asyncHandler = require("express-async-handler");
const { links } = require("../views/includes/links");

exports.indexGet = asyncHandler(async (req, res) => {
  res.render("index", {
    title: "Welcome to PC Parts",
    links: links,
  });
});
