const db = require("../database/database");

async function getAllSanPhamChiTiet() {
  const query = "SELECT * FROM sanphamchitiet";
  const [rows] = await db.pool.execute(query);
  return rows;
}

async function getSanPhamChiTietById(id) {
  const query = "SELECT * FROM sanphamchitiet WHERE id_ct = ?";
  const [rows] = await db.pool.execute(query, [id]);
  return rows[0];
}

async function createSanPhamChiTiet(chitiet) {
  const query =
    "INSERT INTO sanphamchitiet (id_sp, RAM, CPU, Dia, Mausac, Cannang) VALUES (?, ?, ?, ?, ?, ?)";
  const [result] = await db.pool.execute(query, [
    chitiet.id_sp,
    chitiet.RAM,
    chitiet.CPU,
    chitiet.Dia,
    chitiet.Mausac,
    chitiet.Cannang,
  ]);
  return result;
}

async function updateSanPhamChiTiet(id, chitiet) {
  const query =
    "UPDATE sanphamchitiet SET id_sp = ?, RAM = ?, CPU = ?, Dia = ?, Mausac = ?, Cannang = ? WHERE id_ct = ?";
  const [result] = await db.pool.execute(query, [
    chitiet.id_sp,
    chitiet.RAM,
    chitiet.CPU,
    chitiet.Dia,
    chitiet.Mausac,
    chitiet.Cannang,
    id,
  ]);
  return result;
}

async function deleteSanPhamChiTiet(id) {
  const query = "DELETE FROM sanphamchitiet WHERE id_ct = ?";
  const [result] = await db.pool.execute(query, [id]);
  return result;
}

module.exports = {
  getAllSanPhamChiTiet,
  getSanPhamChiTietById,
  createSanPhamChiTiet,
  updateSanPhamChiTiet,
  deleteSanPhamChiTiet,
};
