import React from 'react';
import { listloai } from './data';
import { Link } from 'react-router-dom';
import './assets/css/Menu.css';

class Menu extends React.Component {
  render() {
    const sortedListLoai = [...listloai];
    sortedListLoai.sort((a, b) => parseInt(a.thutu) - parseInt(b.thutu));

    return (
      <ul className="navbar">
        <li className="nav-item">
          <Link to={'/'} className="nav-link text-dark">
            Trang chủ
          </Link>
        </li>
        {sortedListLoai.map((loai, i) => (
          <li className="nav-item" key={i}>
            <Link to={'/loai/' + loai.id_loai} className="nav-link text-dark">
              {loai.ten_loai}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Menu;
