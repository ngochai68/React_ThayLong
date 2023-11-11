import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { themSP } from './cartSlice';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import './assets/css/SPTrongLoai.css';
import { useGetLoaiByIdQuery, useGetSanPhamCungLoaiQuery } from './api/apiSlice';

function SPTrongLoai() {
  const { id_loai } = useParams();
  const dispatch = useDispatch();

  const { data: loai, isFetching: isFetchingLoai } = useGetLoaiByIdQuery(id_loai);
  const { data: list_sp, isFetching: isFetchingSP } = useGetSanPhamCungLoaiQuery(id_loai);

  if (isFetchingLoai || isFetchingSP) return <div>Loading...</div>;

  function HienSPTrongMotTrang({ spTrongTrang }) {
    // Component để hiển thị danh sách sản phẩm trong một trang
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
                      <del className="text-muted">{Number(sp.gia).toLocaleString('vi')} VNĐ</del>
                      <span className="fw-bold ms-2">{Number(sp.gia_km).toLocaleString('vi')} VNĐ</span>
                    </p>
                  </div>
                </Link>
                <a href="#" onClick={() => dispatch(themSP({ ...sp }))} className="btn btn-primary">
                  Thêm vào giỏ
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  function PhanTrang({ pageSize }) {
    // Component để tạo phân trang
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
