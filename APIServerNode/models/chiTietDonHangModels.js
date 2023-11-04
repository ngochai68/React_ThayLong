const mongoose = require("mongoose");

const ChiTietDonHangSchema = new mongoose.Schema(
  {
    id_dh: String,
    id_sp: String,
    so_luong: Number,
  },
  { collection: "don-hang-chi-tiet" }
);

const ChiTietDonHang = mongoose.model("ChiTietDonHang", ChiTietDonHangSchema);

module.exports = ChiTietDonHang;
