const mongoose = require("mongoose");

const DonHangSchema = new mongoose.Schema(
  {
    thoi_diem_mua: {
      type: Date,
      default: Date.now, // Sử dụng default để tự động tạo thời điểm mua
    },
    ho_ten: String,
    email: String,
    so_dien_thoai: String,
    tinh_thanh: Number,
    quan_huyen: Number,
    phuong_xa: Number,
    dia_chi: String,
  },
  { collection: "don-hang" }
);

const DonHang = mongoose.model("DonHang", DonHangSchema);

module.exports = DonHang;
