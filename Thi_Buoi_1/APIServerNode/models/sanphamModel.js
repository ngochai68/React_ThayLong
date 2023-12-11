const db = require("../database/database");

async function getAllSanPham() {
  const query = "SELECT * FROM sanpham";
  const [rows] = await db.pool.execute(query);
  return rows;
}

async function getSanPhamById(id) {
  const query = "SELECT * FROM sanpham WHERE id_sp = ?";
  const [rows] = await db.pool.execute(query, [id]);
  return rows[0];
}

async function createSanPham(sanpham) {
  const query =
    "INSERT INTO sanpham (id_loai, ten_sp, gia, gia_km, hinh, ngay, soluotxem, hot, anhien, mota) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const [result] = await db.pool.execute(query, [
    sanpham.id_loai,
    sanpham.ten_sp,
    sanpham.gia,
    sanpham.gia_km,
    sanpham.hinh,
    sanpham.ngay,
    sanpham.soluotxem,
    sanpham.hot,
    sanpham.anhien,
    sanpham.mota,
  ]);
  return result;
}

async function updateSanPham(id, sanpham) {
  const query =
    "UPDATE sanpham SET id_loai = ?, ten_sp = ?, gia = ?, gia_km = ?, hinh = ?, ngay = ?, soluotxem = ?, hot = ?, anhien = ?, mota = ? WHERE id_sp = ?";
  const [result] = await db.pool.execute(query, [
    sanpham.id_loai,
    sanpham.ten_sp,
    sanpham.gia,
    sanpham.gia_km,
    sanpham.hinh,
    sanpham.ngay,
    sanpham.soluotxem,
    sanpham.hot,
    sanpham.anhien,
    sanpham.mota,
    id,
  ]);
  return result;
}

async function deleteSanPham(id) {
  const query = "DELETE FROM sanpham WHERE id_sp = ?";
  const [result] = await db.pool.execute(query, [id]);
  return result;
}

module.exports = {
  getAllSanPham,
  getSanPhamById,
  createSanPham,
  updateSanPham,
  deleteSanPham,
};
