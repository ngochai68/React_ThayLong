const sanphamchitietModel = require("../models/sanphamchitietModel");

async function list(req, res, next) {
  try {
    const chitiets = await sanphamchitietModel.getAllSanPhamChiTiet();
    res.json(chitiets);
  } catch (error) {
    next(error);
  }
}

async function get(req, res, next) {
  try {
    const id = req.params.id;
    const chitiet = await sanphamchitietModel.getSanPhamChiTietById(id);
    res.json(chitiet);
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const newChiTiet = req.body;
    const result = await sanphamchitietModel.createSanPhamChiTiet(newChiTiet);
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const id = req.params.id;
    const chitiet = req.body;
    await sanphamchitietModel.updateSanPhamChiTiet(id, chitiet);
    res.status(200).send("Cập nhật chi tiết sản phẩm thành công");
  } catch (error) {
    next(error);
  }
}

async function deleteSanPhamChiTiet(req, res, next) {
  try {
    const id = req.params.id;
    await sanphamchitietModel.deleteSanPhamChiTiet(id);
    res.status(200).send("Xóa chi tiết sản phẩm thành công");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  list,
  get,
  create,
  update,
  delete: deleteSanPhamChiTiet,
};
