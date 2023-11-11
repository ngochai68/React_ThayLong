import { Link } from 'react-router-dom';
import './assets/css/Menu.css';
import { useGetLoaiQuery } from './api/apiSlice';

function Menu() {
  const { data: loaiList = [], isFetching } = useGetLoaiQuery();

  if (isFetching) return <div>Loading...</div>;

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
      <li className="nav-item">
        <Link to={'/showcart'} className="nav-link text-dark">
          Giỏ hàng
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
