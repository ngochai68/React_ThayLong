const express = require("express");
const router = express.Router();
const sanPhamController = require("../controllers/sanPhamControllers");

// Route để lấy danh sách sản phẩm mới
router.get("/moi/:sosp?", sanPhamController.laySanPhamMoi);
router.get("/:id", sanPhamController.layChiTietSanPham);
router.get("/cungloai/:id_loai", sanPhamController.laySanPhamCungLoai);
router.get("/xemnhieu/:sosl?", sanPhamController.laySanPhamXemNhieu);
router.post("/themsp/", sanPhamController.themSanPhamMoi);
router.put("/capnhat/:id", sanPhamController.capNhatSanPham);
router.delete("/xoa/:id", sanPhamController.xoaSanPham);

module.exports = router;
