var express = require("express");
var router = express.Router();
const sanphamController = require("../controllers/sanphamController");

router.get("/", sanphamController.list);
router.get("/:id", sanphamController.get);
router.post("/", sanphamController.create);
router.put("/:id", sanphamController.update);
router.delete("/:id", sanphamController.delete);

module.exports = router;
