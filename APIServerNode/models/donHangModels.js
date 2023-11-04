const mongoose = require("mongoose");

const DonHangSchema = new mongoose.Schema(
  {
    thoi_diem_mua: Date,
    ho_ten: String,
    email: String,
  },
  { collection: "don-hang" }
);

const DonHang = mongoose.model("DonHang", DonHangSchema);

module.exports = DonHang;
