import { listsp } from './data';

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function Home() {
  return (
    <div className="row">
      {listsp.slice(0, 6).map((sp, i) => (
        <div className="col-md-4 mb-4" key={i}>
          <div className="card">
            <a href={`/san-pham/${sp.id_sp}`} className="text-dark text-decoration-none">
              <img src={sp.hinh} alt={sp.ten_sp} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{sp.ten_sp}</h5>
                <p className="card-text">
                  <del className="text-muted">{formatPrice(sp.gia)} đ</del>
                  <span className="fw-bold ms-2">{formatPrice(sp.gia_km)} đ</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
