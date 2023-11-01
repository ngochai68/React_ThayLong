import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/Menu.css';

function Menu() {
  const [loaiList, setLoaiList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/loai')
      .then((response) => response.json())
      .then((data) => setLoaiList(data))
      .catch((error) => console.error('Error:', error));
  }, []);

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
