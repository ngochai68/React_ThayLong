import { listsp } from './data';

function SanPhamXemNhieu() {
  // Sắp xếp danh sách sản phẩm theo số lượt xem giảm dần
  const sortedList = listsp.sort((a, b) => b.soluotxem - a.soluotxem);

  return (
    <div id="spxn" className="sp">
      {sortedList.slice(0, 6).map((sp, i) => (
        <div key={i} className="text-dark">
          <a href={`/san-pham/${sp.id_sp}`}>
            {sp.ten_sp} 
          </a>
        </div>
      ))}
    </div>
  );
}

export default SanPhamXemNhieu;
