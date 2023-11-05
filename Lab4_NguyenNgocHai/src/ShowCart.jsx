import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { xoaSP, xoaHetSP, suaSL } from './cartSlice';
import { Link } from 'react-router-dom';
import './assets/css/ShowCart.css';

function ShowCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.listSP);

  const [error, setError] = useState('');

  const handleQuantityChange = (e, spId) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 1) {
      dispatch(suaSL([spId, newQuantity]));
      setError(''); // Reset error message
    } else {
      setError('Số lượng phải lớn hơn hoặc bằng 1');
    }
  };

  return (
    <div>
      <h2 className="mb-4">Giỏ hàng của bạn</h2>
      <div className="table-responsive">
        <button onClick={() => dispatch(xoaHetSP())} className="btn btn-danger mb-3">
          Xóa toàn bộ giỏ hàng
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((sp, index) => {
              return (
                <tr key={index}>
                  <td>{sp.ten_sp}</td>
                  <td>
                    <input type="number" value={sp.soluong} onChange={(e) => handleQuantityChange(e, sp._id)} className="form-control" />
                    {error && <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{error}</p>}
                  </td>
                  <td>{Number(sp.gia).toLocaleString('vi')} VNĐ</td>
                  <td>{Number(sp.gia * sp.soluong).toLocaleString('vi')} VNĐ</td>
                  <td>
                    <a href="#" onClick={() => dispatch(xoaSP(sp._id))} className="text-danger">
                      Xóa
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to="/thanhtoan" className="btn btn-primary">
          Thanh toán
        </Link>
      </div>
    </div>
  );
}

export default ShowCart;
