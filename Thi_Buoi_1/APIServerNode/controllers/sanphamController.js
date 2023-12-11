const sanphamModel = require("../models/sanphamModel");

async function list(req, res, next) {
  try {
    const sanphams = await sanphamModel.getAllSanPham();
    res.json(sanphams);
  } catch (error) {
    next(error);
  }
}

async function get(req, res, next) {
  try {
    const id = req.params.id;
    const sanpham = await sanphamModel.getSanPhamById(id);
    res.json(sanpham);
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const newSanPham = req.body;
    const result = await sanphamModel.createSanPham(newSanPham);
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const id = req.params.id;
    const sanpham = req.body;
    await sanphamModel.updateSanPham(id, sanpham);
    res.status(200).send("Cập nhật sản phẩm thành công");
  } catch (error) {
    next(error);
  }
}

async function deleteSanPham(req, res, next) {
  try {
    const id = req.params.id;
    await sanphamModel.deleteSanPham(id);
    res.status(200).send("Xóa sản phẩm thành công");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  list,
  get,
  create,
  update,
  delete: deleteSanPham,
};
