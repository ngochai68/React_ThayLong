const ChiTietDonHang = require("../models/chiTietDonHangModels"); // Import ChiTietDonHang model

// Hàm controller để tạo chi tiết đơn hàng mới
const taoChiTietDonHangMoi = async (req, res) => {
  try {
    const { id_dh, id_sp, so_luong } = req.body; // Lấy thông tin từ request body

    // Tạo một đối tượng mới từ model ChiTietDonHang
    const chiTietDonHangMoi = new ChiTietDonHang({
      id_dh,
      id_sp,
      so_luong,
    });

    // Lưu đối tượng chi tiết đơn hàng mới vào cơ sở dữ liệu
    const chiTietDonHangDaLuu = await chiTietDonHangMoi.save();

    res.status(201).json({ success: true, data: chiTietDonHangDaLuu });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { taoChiTietDonHangMoi };
