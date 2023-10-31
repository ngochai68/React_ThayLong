import { useParams } from 'react-router-dom';
import { listloai, listsp } from './data';
import { Link } from 'react-router-dom';
import './assets/css/Home.css'; // Import CSS từ Home

function SPTrongLoai() {
  let { id_loai } = useParams();
  let list_sp = listsp.filter((sp) => sp.id_loai === id_loai);
  let loai = listloai.find((loai) => loai.id_loai === id_loai);

  return (
    <div className="row">
      <h2>Danh sách sản phẩm trong loại {loai.ten_loai}</h2>
      {list_sp.map((sp, i) => (
        <div className="col-md-4 mb-4" key={i}>
          <div className="card">
            <Link to={'/sp/' + sp.id_sp} className="text-dark text-decoration-none">
              <img src={sp.hinh} alt={sp.ten_sp} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{sp.ten_sp}</h5>
                <p className="card-text">
                  <del className="text-muted">{Number(sp.gia).toLocaleString('vi')} VNĐ</del>
                  <span className="fw-bold ms-2">{Number(sp.gia_km).toLocaleString('vi')} VNĐ</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SPTrongLoai;
