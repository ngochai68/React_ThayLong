import { useParams, Link } from 'react-router-dom';
import { listsp } from './data';
import './assets/css/ChiTiet.css'; 

function ChiTiet() {
  const { id } = useParams();
  const sp = listsp.find((item) => item.id_sp === id);
  const productsSameCategory = listsp.filter((item) => item.id_loai === sp.id_loai && item.id_sp !== id);

  if (!sp) {
    return <div className="not-found">Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className="container chi-tiet">
      <div className="row">
        <div className="col-md-6">
          <img src={sp.hinh} alt={sp.ten_sp} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="product-details">
            <h1 className="product-title">{sp.ten_sp}</h1>
            <p>
              <span className="property">Giá gốc</span>: <del>{Number(sp.gia).toLocaleString('vi')} VNĐ</del>
            </p>
            <p>
              <span className="property">Giá KM</span>: {Number(sp.gia_km).toLocaleString('vi')} VNĐ
            </p>
            <p>
              <span className="property">Ngày</span>: {new Date(sp.ngay).toLocaleString('vi-VN')}
            </p>
            <p>
              <span className="property">RAM</span>: {sp.RAM}
            </p>
            <p>
              <span className="property">CPU</span>: {sp.CPU}
            </p>
            <p>
              <span className="property">Dung lượng ổ cứng</span>: {sp.Dia}
            </p>
            <p>
              <span className="property">Màu sắc</span>: {sp.Mausac}
            </p>
            <p>
              <span className="property">Cân nặng</span>: {sp.Cannang} kg
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3 className="related-products-heading">Sản phẩm liên quan</h3>
          <div className="row">
            {productsSameCategory.slice(0, 3).map((product, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <Link to={'/sp/' + product.id_sp} className="text-dark text-decoration-none">
                    <img src={product.hinh} alt={product.ten_sp} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{product.ten_sp}</h5>
                      <p className="card-text">
                        <del className="text-muted">{Number(product.gia).toLocaleString('vi')} VNĐ</del>
                        <span className="fw-bold ms-2">{Number(product.gia_km).toLocaleString('vi')} VNĐ</span>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChiTiet;
