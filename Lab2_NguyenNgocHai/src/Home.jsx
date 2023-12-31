import { listsp } from './data';
import { Link } from 'react-router-dom';
import './assets/css/Home.css';

function Home() {
  const sortedListSP = [...listsp];
  sortedListSP.sort((a, b) => parseInt(a.id_sp) - parseInt(b.id_sp));

  return (
    <div className="row">
      <h2>Danh sách sản phẩm</h2>
      {sortedListSP.slice(0, 6).map((sp, i) => (
        <div className="col-md-4 mb-4" key={i}>
          <div className="card">
            <Link to={'/sp/' + sp.id_sp} className="text-dark text-decoration-none">
              {' '}
              <img src={sp.hinh} alt={sp.ten_sp} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{sp.ten_sp}</h5>
                <p className="card-text">
                  <del className="text-muted">{Number(sp.gia).toLocaleString('vi')} VNĐ</del>
                  <span className="fw-bold ms-2">{Number(sp.gia_km).toLocaleString('vi')} VNĐ</span>
                </p>
              </div>{' '}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
