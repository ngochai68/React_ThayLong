import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { themSP } from './cartSlice';
import ReactPaginate from 'react-paginate';
import { useGetSanPhamMoiQuery } from './api/apiSlice';
import './assets/css/Home.css';

function Home() {
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 6;
  const dispatch = useDispatch();

  const { data: sortedListSP = [], isFetching } = useGetSanPhamMoiQuery(100);

  if (isFetching) return <div>Loading...</div>;

  const pagesVisited = pageNumber * itemsPerPage;
  const displayItems = sortedListSP.slice(pagesVisited, pagesVisited + itemsPerPage);

  const changePage = ({ selected }) => {
    // Hàm xử lý sự kiện thay đổi trang (phân trang).
    setPageNumber(selected); // Cập nhật trang hiện tại khi người dùng chuyển trang.
  };

  return (
    <div className="row">
      <h2>Danh sách sản phẩm</h2>
      {displayItems.map((sp, i) => (
        <div className="col-md-4 mb-4" key={i}>
          <div className="card">
            <Link to={`/sp/${sp._id}`} className="text-dark text-decoration-none">
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
      ))}

      <ReactPaginate
        nextLabel=">"
        previousLabel="<"
        pageCount={Math.ceil(sortedListSP.length / itemsPerPage)} // Tính số lượng trang cần hiển thị dựa trên số sản phẩm và số lượng sản phẩm trên mỗi trang.
        pageRangeDisplayed={5} // Số lượng trang hiển thị ở thanh phân trang.
        marginPagesDisplayed={2} // Số lượng trang ở đầu và cuối thanh phân trang.
        onPageChange={changePage} // Xử lý sự kiện khi người dùng chuyển trang.
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default Home;
