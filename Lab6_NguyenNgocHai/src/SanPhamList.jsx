import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./assets/css/SanPhamList.css";

function SanPhamList() {
  const [listSP, ganListSP] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/sanpham/moi/100")
      .then((res) => res.json())
      .then((data) => {
        ganListSP(data);
        console.log(data);
      });
  }, []);

  const navigate = useNavigate();

  const xoaSP = (id) => {
    if (window.confirm("Xóa thật không bồ") === false) return false;
    fetch("http://localhost:3000/sanpham/xoa/" + id, { method: "delete" })
      .then((res) => res.json())
      // eslint-disable-next-line no-unused-vars
      .then((data) => navigate(0));
  };

  return (
    <div id="adminspList">
      <h5 className="sp" key={0}>
        <b>Tên SP</b> <b>Ngày</b> <b>Giá</b>{" "}
        <b>
          <a href="/admin/spthem">Thêm</a>
        </b>
      </h5>
      {listSP.map((sp) => (
        <div className="sp" key={sp._id}>
          <span>{sp.ten_sp}</span>{" "}
          <span>{new Date(sp.ngay).toLocaleDateString("vi")}</span>{" "}
          <span>{sp.gia.toLocaleString("vie")} VNĐ</span>
          <span>
            <a
              href="#/"
              className="btn btn-danger"
              onClick={() => xoaSP(sp._id)}
            >
              Xóa
            </a>
            &nbsp;
            <Link to={"/admin/spsua/" + sp._id} className="btn btn-primary">
              Sửa
            </Link>
          </span>
        </div>
      ))}
    </div>
  );
}

export default SanPhamList;
