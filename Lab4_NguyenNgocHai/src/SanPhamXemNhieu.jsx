import { Link } from 'react-router-dom';
import './assets/css/SanPhamXemNhieu.css';
import { useState, useEffect } from 'react';

function SanPhamXemNhieu() {
  const [sotin, setSotin] = useState(10); // Khởi tạo state 'sotin' và hàm 'setSotin' để lưu trữ số tin sản phẩm hiển thị ban đầu.
  const [sortedList, setSortedList] = useState([]); // Khởi tạo state 'sortedList' và hàm 'setSortedList' để lưu trữ danh sách sản phẩm được sắp xếp.

  useEffect(() => {
    // Sử dụng useEffect để thực hiện các side effects trong component, được gọi sau mỗi lần render.
    fetch(`http://localhost:3000/sanpham/xemnhieu/${sotin}`)
    // Gửi yêu cầu fetch đến API để lấy danh sách sản phẩm được xem nhiều, với số lượng sản phẩm tối đa là 'sotin'.
      .then((response) => response.json())
      .then((data) => setSortedList(data)) // Lưu danh sách sản phẩm được trả về từ API vào state 'sortedList'.
      .catch((error) => console.error('Error:', error));
  }, [sotin]); // useEffect sẽ chạy lại mỗi khi 'sotin' thay đổi.

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
