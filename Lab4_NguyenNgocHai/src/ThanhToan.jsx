import './assets/css/ThanhToan.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { xoaSP } from './cartSlice';
import { useDispatch } from 'react-redux';

function ThanhToan() {
  const dispatch = useDispatch();
  let htRef = React.createRef();
  let emRef = React.createRef();
  const cart = useSelector((state) => state.cart.listSP);

  const submitDuLieu = () => {
    let ht = htRef.current.value;
    let em = emRef.current.value;
    if (ht === '' || em === '') {
      alert('Nhập đủ thông tin bạn ơi');
      return;
    }
    if (cart.length === 0) {
      alert('Bạn chưa chọn sản phẩm nào');
      return;
    }

    let url = 'http://localhost:3000/donhang/taodonhang';
    let tt = { ho_ten: htRef.current.value, email: emRef.current.value };
    var opt = {
      method: 'post',
      body: JSON.stringify(tt),
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(url, opt)
      .then((res) => res.json())
      .then((data) => {
        if (data.data._id) {
          let _id = data.data._id;
          console.log('Đã lưu đơn hàng', _id);
          luuchitietdonhang(_id, cart);
        } else {
          console.log('Lỗi lưu đơn hàng', data);
        }
      })
      .catch((error) => {
        console.error('Có lỗi khi gửi yêu cầu: ', error);
      });
  };

  const luuchitietdonhang = (_id, cart) => {
    let url = 'http://localhost:3000/chitietdonhang/taochitietdonhang';
    cart.forEach((sp) => {
      let t = { id_dh: _id, id_sp: sp._id, so_luong: sp.soluong };
      let opt = {
        method: 'post',
        body: JSON.stringify(t),
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(url, opt)
        .then((res) => res.json())
        .then((data) => {
          luuxongsp(data);
        })
        .catch((err) => {
          console.log('Lỗi lưu sp: ', err);
        });
    });
  };

  const luuxongsp = (data) => {
    dispatch(xoaSP(data.data.id_sp));
  };

  return (
    <div className="container mt-4">
      <h2>Thanh toán đơn hàng</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="hoTen" className="form-label">
            Họ tên
          </label>
          <input ref={htRef} type="text" className="form-control" id="hoTen" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input ref={emRef} type="email" className="form-control" id="email" />
        </div>
        <button onClick={submitDuLieu} type="button" className="btn btn-primary">
          Lưu đơn hàng
        </button>
      </form>
    </div>
  );
}
export default ThanhToan;
