const router = require("express").Router();
const productController = require("../controllers/productsController");

router.get(":category?", productController.productsGet);
router.get("/:id", productController.productIdGet);
router.get("/create", productController.createProductGet);
router.post("/create", productController.createProductPost);
router.post("/delete/:id", productController.deleteProduct);

module.exports = router;
