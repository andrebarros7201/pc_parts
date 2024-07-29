const router = require("express").Router();
const productController = require("../controllers/productsController");

router.get("/", productController.productsGet);
router.get("/create", productController.createProductGet);
router.post("/create", productController.createProductPost);

module.exports = router;
