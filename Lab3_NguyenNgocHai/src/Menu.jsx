import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/Menu.css';

function Menu() {
  const [loaiList, setLoaiList] = useState([]); // Khởi tạo state 'loaiList' và hàm 'setLoaiList' để lưu trữ danh sách các loại sản phẩm.

  useEffect(() => {
    // Sử dụng useEffect để thực hiện các side effects trong component, được gọi sau mỗi lần render.
    fetch('http://localhost:3000/loai')
    // Gửi yêu cầu fetch đến API để lấy danh sách các loại sản phẩm.
      .then((response) => response.json())
      .then((data) => setLoaiList(data)) // Lưu danh sách loại sản phẩm được trả về từ API vào state 'loaiList'.
      .catch((error) => console.error('Error:', error));
  }, []); // useEffect sẽ chỉ chạy một lần sau khi component được mount lần đầu tiên.

  return (
    <ul className="navbar">
      <li className="nav-item">
        <Link to={'/'} className="nav-link text-dark">
          Trang chủ
        </Link>
      </li>
      {loaiList.map((loai, i) => (
        <li className="nav-item" key={i}>
          <Link to={'/loai/' + loai._id} className="nav-link text-dark">
            {loai.ten_loai}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
