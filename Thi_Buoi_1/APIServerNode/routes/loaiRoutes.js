var express = require("express");
var router = express.Router();
const loaiController = require("../controllers/loaiController");

router.get("/", loaiController.list);
router.get("/:id", loaiController.get);
router.post("/", loaiController.create);
router.put("/:id", loaiController.update);
router.delete("/:id", loaiController.delete);

module.exports = router;
