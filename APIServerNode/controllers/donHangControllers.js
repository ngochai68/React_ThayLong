const DonHang = require("../models/donHangModels");

const taoDonHangMoi = async (req, res) => {
  try {
    const {
      ho_ten,
      email,
      so_dien_thoai,
      tinh_thanh,
      quan_huyen,
      phuong_xa,
      dia_chi,
    } = req.body;

    // Tạo một đối tượng mới từ model DonHang
    const donHangMoi = new DonHang({
      ho_ten,
      email,
      so_dien_thoai,
      tinh_thanh,
      quan_huyen,
      phuong_xa,
      dia_chi,
    });

    // Lưu đối tượng đơn hàng mới vào cơ sở dữ liệu
    const donHangDaLuu = await donHangMoi.save();

    res.status(201).json({ success: true, data: donHangDaLuu });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { taoDonHangMoi };
