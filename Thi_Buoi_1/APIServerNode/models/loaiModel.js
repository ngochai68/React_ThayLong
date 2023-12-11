const db = require("../database/database");

async function getAllLoai() {
  const query = "SELECT * FROM loai";
  const [rows] = await db.pool.execute(query);
  return rows;
}

async function getLoaiById(id) {
  const query = "SELECT * FROM loai WHERE id_loai = ?";
  const [rows] = await db.pool.execute(query, [id]);
  return rows[0];
}

async function createLoai(loai) {
  const query = "INSERT INTO loai (ten_loai, thutu, anhien) VALUES (?, ?, ?)";
  const [result] = await db.pool.execute(query, [
    loai.ten_loai,
    loai.thutu,
    loai.anhien,
  ]);
  return result;
}

async function updateLoai(id, loai) {
  const query =
    "UPDATE loai SET ten_loai = ?, thutu = ?, anhien = ? WHERE id_loai = ?";
  const [result] = await db.pool.execute(query, [
    loai.ten_loai,
    loai.thutu,
    loai.anhien,
    id,
  ]);
  return result;
}

async function deleteLoai(id) {
  const query = "DELETE FROM loai WHERE id_loai = ?";
  const [result] = await db.pool.execute(query, [id]);
  return result;
}

module.exports = {
  getAllLoai,
  getLoaiById,
  createLoai,
  updateLoai,
  deleteLoai,
};
