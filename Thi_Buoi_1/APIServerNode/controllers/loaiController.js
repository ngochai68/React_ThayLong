const loaiModel = require("../models/loaiModel");

async function list(req, res, next) {
  try {
    const loais = await loaiModel.getAllLoai();
    res.json(loais);
  } catch (error) {
    next(error);
  }
}

async function get(req, res, next) {
  try {
    const id = req.params.id;
    const loai = await loaiModel.getLoaiById(id);
    res.json(loai);
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const newLoai = req.body;
    const result = await loaiModel.createLoai(newLoai);
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const id = req.params.id;
    const loai = req.body;
    await loaiModel.updateLoai(id, loai);
    res.status(200).send("Cập nhật loại thành công");
  } catch (error) {
    next(error);
  }
}

async function deleteLoai(req, res, next) {
  try {
    const id = req.params.id;
    await loaiModel.deleteLoai(id);
    res.status(200).send("Xóa loại thành công");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  list,
  get,
  create,
  update,
  delete: deleteLoai,
};
