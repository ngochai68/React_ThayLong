const express = require('express');
const router = express.Router();
const { taoChiTietDonHangMoi } = require('../controllers/chiTietDonHangControllers');

// Endpoint để tạo chi tiết đơn hàng mới
router.post('/taochitietdonhang', taoChiTietDonHangMoi);

module.exports = router;
