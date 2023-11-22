const SanPham = require("../models/sanPhamModels");

// Lấy danh sách sản phẩm mới
const laySanPhamMoi = async (req, res) => {
  try {
    let sosp = parseInt(req.params.sosp || 1);
    if (sosp <= 1) sosp = 1;
    const sanPham = await SanPham.find().sort({ ngay: -1 }).limit(sosp);
    res.json(sanPham);
  } catch (err) {
    res.status(500).json({ message: "Lỗi lấy danh sách sản phẩm", error: err });
  }
};

// Lấy chi tiết sản phẩm dựa trên ID
const layChiTietSanPham = async (req, res) => {
  try {
    const id = req.params.id; // Lấy ID từ request parameters
    const sanPham = await SanPham.findById(id);

    if (!sanPham) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy sản phẩm với ID đã cung cấp." });
    }

    res.json(sanPham);
  } catch (err) {
    res.status(500).json({ message: "Lỗi lấy chi tiết sản phẩm", error: err });
  }
};

const laySanPhamCungLoai = async (req, res) => {
  try {
    const id_loai = req.params.id_loai;
    const sanPham = await SanPham.find({ id_loai }).sort({ ngay: -1 });
    res.json(sanPham);
  } catch (err) {
    res.status(500).json({ message: "Lỗi lấy sản phẩm cùng loại", error: err });
  }
};

const laySanPhamXemNhieu = async (req, res) => {
  try {
    let sosl = parseInt(req.params.sosl || 1);
    const sanPham = await SanPham.find().sort({ soluotxem: -1 }).limit(sosl);
    res.json(sanPham);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi lấy danh sách sản phẩm xem nhiều", error: err });
  }
};

const themSanPhamMoi = async (req, res) => {
  try {
    const newSanPham = new SanPham(req.body);
    const savedSanPham = await newSanPham.save();
    res.json(savedSanPham);
  } catch (err) {
    res.status(500).json({ message: "Lỗi thêm sản phẩm mới", error: err });
  }
};

const capNhatSanPham = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedSanPham = await SanPham.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedSanPham) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy sản phẩm để cập nhật" });
    }

    res.json(updatedSanPham);
  } catch (err) {
    res.status(500).json({ message: "Lỗi cập nhật sản phẩm", error: err });
  }
};

const xoaSanPham = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedSanPham = await SanPham.findByIdAndDelete(id);

    if (!deletedSanPham) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy sản phẩm để xóa" });
    }

    res.json(deletedSanPham);
  } catch (err) {
    res.status(500).json({ message: "Lỗi xóa sản phẩm", error: err });
  }
};

module.exports = {
  laySanPhamMoi,
  layChiTietSanPham,
  laySanPhamCungLoai,
  laySanPhamXemNhieu,
  themSanPhamMoi,
  capNhatSanPham,
  xoaSanPham,
};
