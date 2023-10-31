import { listsp } from './data';
import { Link } from 'react-router-dom';
import './assets/css/SanPhamXemNhieu.css';
import { useState, useEffect } from 'react'; 

function SanPhamXemNhieu() {
  const [sotin, setSotin] = useState(10); 
  const [sortedList, setSortedList] = useState([]);

  useEffect(() => {
    const updatedList = [...listsp];
    updatedList.sort((a, b) => b.soluotxem - a.soluotxem);
    setSortedList(updatedList.slice(0, sotin));
  }, [sotin]);

  return (
    <div className="san-pham-xem-nhieu">
      <h3 className="title">Sản phẩm xem nhiều</h3>
      {sortedList.map((sp, i) => (
        <div key={i} className="product">
          <Link to={"/sp/" + sp.id_sp} className="product-link text-dark">{sp.ten_sp}</Link>
        </div>
      ))}
      <button onClick={() => setSotin(15)}>Hiển thị thêm</button> 
    </div>
  );
}

export default SanPhamXemNhieu;
