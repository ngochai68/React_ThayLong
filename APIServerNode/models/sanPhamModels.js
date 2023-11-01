const mongoose = require('mongoose');

const SanPhamSchema = new mongoose.Schema({
  id_loai: String,
  ten_sp: String,
  gia: Number,
  gia_km: Number,
  hinh: String,
  ngay: Date,
  soluotxem: Number,
  hot: Number,
  anhien: Number,
  mota: String,
  RAM: String,
  CPU: String,
  Dia: String,
  Mausac: String,
  Cannang: Number
}, { collection: 'san-pham' }); 

const SanPham = mongoose.model('SanPham', SanPhamSchema);

module.exports = SanPham;
