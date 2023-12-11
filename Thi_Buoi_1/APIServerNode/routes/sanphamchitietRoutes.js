var express = require("express");
var router = express.Router();
const sanphamchitietController = require("../controllers/sanphamchitietController");

router.get("/", sanphamchitietController.list);
router.get("/:id", sanphamchitietController.get);
router.post("/", sanphamchitietController.create);
router.put("/:id", sanphamchitietController.update);
router.delete("/:id", sanphamchitietController.delete);

module.exports = router;
