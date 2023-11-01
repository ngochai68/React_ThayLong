const Loai = require("../models/loaiModels");

// Lấy danh sách loại
const layDanhSachLoai = async (req, res) => {
  try {
    const danhSachLoai = await Loai.find();
    res.json(danhSachLoai);
  } catch (err) {
    res.status(500).json({ message: "Lỗi lấy danh sách loại", error: err });
  }
};

// Lấy chi tiết loại dựa trên ID
const layChiTietLoai = async (req, res) => {
  try {
    const id = req.params.id; // Lấy ID từ request parameters
    const loai = await Loai.findById(id);

    if (!loai) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy loại với ID đã cung cấp." });
    }

    res.json(loai);
  } catch (err) {
    res.status(500).json({ message: "Lỗi lấy chi tiết loại", error: err });
  }
};

module.exports = {
  layDanhSachLoai,
  layChiTietLoai,
};
