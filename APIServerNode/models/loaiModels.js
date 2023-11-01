const mongoose = require('mongoose');

const LoaiSchema = new mongoose.Schema({
  ten_loai: String,
  thutu: Number,
  anhien: Number
}, { collection: 'loai' });

const Loai = mongoose.model('Loai', LoaiSchema);

module.exports = Loai;
