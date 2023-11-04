const DonHang = require("../models/donHangModels"); // Import DonHang model

// Hàm controller để tạo đơn hàng mới
const taoDonHangMoi = async (req, res) => {
  try {
    const { thoi_diem_mua, ho_ten, email } = req.body; // Lấy thông tin từ request body

    // Tạo một đối tượng mới từ model DonHang
    const donHangMoi = new DonHang({
      thoi_diem_mua,
      ho_ten,
      email,
    });

    // Lưu đối tượng đơn hàng mới vào cơ sở dữ liệu
    const donHangDaLuu = await donHangMoi.save();

    res.status(201).json({ success: true, data: donHangDaLuu });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { taoDonHangMoi };
