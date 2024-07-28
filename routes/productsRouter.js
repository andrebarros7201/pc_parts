const router = require("express").Router();
const productController = require("../controllers/productsController");

router.get("/", productController.productsGet);

module.exports = router;
