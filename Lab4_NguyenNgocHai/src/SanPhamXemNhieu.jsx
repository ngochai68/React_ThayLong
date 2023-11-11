import { Link } from 'react-router-dom';
import './assets/css/SanPhamXemNhieu.css';
import { useGetSanPhamXemNhieuQuery } from './api/apiSlice';
import { useState } from 'react';

function SanPhamXemNhieu() {
  const [sotin, setSotin] = useState(10); // Khởi tạo state 'sotin' và hàm 'setSotin' để lưu trữ số tin sản phẩm hiển thị ban đầu.

  const { data: sortedList = [], isFetching } = useGetSanPhamXemNhieuQuery(sotin);

  if (isFetching) return <div>Loading...</div>;

  return (
    <div className="san-pham-xem-nhieu">
      <h3 className="title">Sản phẩm xem nhiều</h3>
      {sortedList.map((sp, i) => (
        <div key={i} className="product">
          <Link to={`/sp/${sp._id}`} className="product-link text-dark">
            {sp.ten_sp}
          </Link>
        </div>
      ))}
      <button onClick={() => setSotin(15)}>Hiển thị thêm</button>
    </div>
  );
}

export default SanPhamXemNhieu;
