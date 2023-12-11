import { useState, useEffect } from "react";
import axios from "axios";

function ThongKe() {
  const [tongSoSanPham, setTongSoSanPham] = useState(0);
  const [soSanPhamHot, setSoSanPhamHot] = useState(0);
  const [soSanPhamAnHien, setSoSanPhamAnHien] = useState({ an: 0, hien: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/sanpham");
        const allProducts = response.data;

        // Tính tổng số sản phẩm
        setTongSoSanPham(allProducts.length);

        // Tính số sản phẩm hot
        const hotProducts = allProducts.filter((product) => product.hot === 1);
        setSoSanPhamHot(hotProducts.length);

        // Tính số sản phẩm ẩn và hiện
        const anHienProducts = allProducts.reduce(
          (accumulator, currentValue) => {
            if (currentValue.anhien === 1) {
              accumulator.hien++;
            } else {
              accumulator.an++;
            }
            return accumulator;
          },
          { an: 0, hien: 0 }
        );
        setSoSanPhamAnHien(anHienProducts);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Thông kê</h1>
      <p>Tổng số sản phẩm: {tongSoSanPham}</p>
      <p>Số sản phẩm hot: {soSanPhamHot}</p>
      <p>Số sản phẩm đang ẩn: {soSanPhamAnHien.an}</p>
      <p>Số sản phẩm đang hiện: {soSanPhamAnHien.hien}</p>
    </div>
  );
}

export default ThongKe;
