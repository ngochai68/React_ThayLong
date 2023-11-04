const express = require('express');
const router = express.Router();
const { taoDonHangMoi } = require('../controllers/donHangControllers');

// Endpoint để tạo đơn hàng mới
router.post('/taodonhang', taoDonHangMoi);

module.exports = router;
