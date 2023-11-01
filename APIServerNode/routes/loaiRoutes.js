const express = require('express');
const router = express.Router();
const loaiController = require('../controllers/loaiControllers');

// Route để lấy danh sách loại
router.get('/', loaiController.layDanhSachLoai);

// Route để lấy chi tiết loại dựa trên ID
router.get('/:id', loaiController.layChiTietLoai);

module.exports = router;
