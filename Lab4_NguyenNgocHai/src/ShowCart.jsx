import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { xoaSP, suaSL } from './cartSlice';
import { Link } from 'react-router-dom';
import './assets/css/ShowCart.css';

function ShowCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.listSP);
  return (
    <div>
      <h2 className="mb-4">Giỏ hàng của bạn</h2>
      <div className="table-responsive">
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
                    <input type="number" defaultValue={sp.soluong} onClick={(e) => dispatch(suaSL([sp._id, e.target.value]))} className="form-control" />
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
