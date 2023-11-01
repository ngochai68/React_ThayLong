import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import './assets/css/SPTrongLoai.css';

function SPTrongLoai() {
  const { id_loai } = useParams();
  const [list_sp, setListSp] = useState([]);
  const [loai, setLoai] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/loai/${id_loai}`)
      .then((response) => response.json())
      .then((data) => {
        setLoai(data);
        return fetch(`http://localhost:3000/sanpham/cungloai/${id_loai}`);
      })
      .then((response) => response.json())
      .then((data) => setListSp(data))
      .catch((error) => console.error('Error:', error));
  }, [id_loai]);

  function HienSPTrongMotTrang({ spTrongTrang }) {
    return (
      <div id="data" className="row">
        {spTrongTrang.map((sp, index) => {
          return (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <Link to={'/sp/' + sp._id} className="text-dark text-decoration-none">
                  <img src={sp.hinh} alt={sp.ten_sp} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{sp.ten_sp}</h5>
                    <p className="card-text">
                      <del className="text-muted">
                        {Number(sp.gia).toLocaleString('vi')} VNĐ
                      </del>
                      <span className="fw-bold ms-2">
                        {Number(sp.gia_km).toLocaleString('vi')} VNĐ
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  
  

  function PhanTrang({ pageSize }) {
    const [fromIndex, setfromIndex] = useState(0);
    const toIndex = fromIndex + pageSize;
    const spTrong1Trang = list_sp.slice(fromIndex, toIndex);
    const tongSoTrang = Math.ceil(list_sp.length / pageSize);
    const chuyenTrang = (event) => {
      const newIndex = (event.selected * pageSize) % list_sp.length;
      setfromIndex(newIndex);
    };
    return (
      <>
        <HienSPTrongMotTrang spTrongTrang={spTrong1Trang} />
        <ReactPaginate nextLabel=">" previousLabel="<" pageCount={tongSoTrang} pageRangeDisplayed={5} onPageChange={chuyenTrang} renderOnZeroPageCount={null} className="thanhphantrang" />{' '}
      </>
    );
  }

  // Xác thực kiểu dữ liệu của props
  SPTrongLoai.propTypes = {
    pageSize: PropTypes.number.isRequired,
  };

  HienSPTrongMotTrang.propTypes = {
    spTrongTrang: PropTypes.array.isRequired,
  };

  PhanTrang.propTypes = {
    pageSize: PropTypes.number.isRequired,
  };

  return (
    <div className="row">
      <h2>Danh sách sản phẩm trong loại {loai.ten_loai}</h2>
      <PhanTrang pageSize={6} />
    </div>
  );
}

export default SPTrongLoai;
