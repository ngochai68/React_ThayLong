import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Laptop() {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/sanpham");
        const allProducts = response.data;

        // Lọc sản phẩm dưới 15 triệu
        const productsUnder15 = allProducts.filter(
          (product) => product.gia < 15000000
        );

        // Lọc sản phẩm từ 15 triệu trở lên
        const productsOver15 = allProducts.filter(
          (product) => product.gia >= 15000000
        );

        // Dựa vào đường dẫn để xác định hiển thị sản phẩm nào
        if (location.pathname === "/duoi-15-trieu") {
          setProducts(productsUnder15);
        } else if (location.pathname === "/tu-15-trieu") {
          setProducts(productsOver15);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [location.pathname]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Danh sách sản phẩm:</h1>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id_sp} className="list-group-item">
            {product.ten_sp}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Laptop;
