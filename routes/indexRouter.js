const router = require("express").Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.indexGet);

module.exports = router;
