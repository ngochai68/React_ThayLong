import React from 'react';
import { listloai } from './data';

class Menu extends React.Component {
  render() {
    const sortedListLoai = [...listloai];
    sortedListLoai.sort((a, b) => parseInt(a.thutu) - parseInt(b.thutu));

    return (
      <ul className="nav">
        <li className="nav-item">
          <a href="/" className="nav-link text-dark">
            Trang chủ
          </a>
        </li>
        {sortedListLoai.map((loai, i) => (
          <li className="nav-item" key={i}>
            <a href={`/danh-muc/${loai.id_loai}`} className="nav-link text-dark">
              {loai.ten_loai}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Menu;
