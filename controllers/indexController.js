const asyncHandler = require("express-async-handler");

exports.indexGet = asyncHandler(async (req, res) => {
  res.render("index", { title: "Welcome to PC Parts" });
});
