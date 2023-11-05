import './assets/css/ThanhToan.css';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { xoaSP } from './cartSlice';
import { useDispatch } from 'react-redux';

function ThanhToan() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const htRef = useRef(null);
  const emRef = useRef(null);
  const sdtRef = useRef(null);
  const addressRef = useRef(null);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Gửi yêu cầu để lấy danh sách tỉnh/thành từ API
    axios
      .get('https://provinces.open-api.vn/api/')
      .then((response) => {
        setCities(response.data);
        setWards([]);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu tỉnh/thành: ', error);
      });
  }, []);

  const handleCityChange = (e) => {
    const selectedCityId = e.target.value;
    // Gửi yêu cầu để lấy danh sách quận/huyện dựa trên ID của tỉnh/thành đã chọn
    axios
      .get(`https://provinces.open-api.vn/api/p/${selectedCityId}?depth=2`)
      .then((response) => {
        setDistricts(response.data.districts);
        setWards([]);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu quận/huyện: ', error);
      });
  };

  const handleDistrictChange = (e) => {
    const selectedDistrictId = e.target.value;
    // Gửi yêu cầu để lấy danh sách phường/xã dựa trên ID của quận/huyện đã chọn
    axios
      .get(`https://provinces.open-api.vn/api/d/${selectedDistrictId}?depth=2`)
      .then((response) => {
        setWards(response.data.wards);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu phường/xã: ', error);
      });
  };

  const cart = useSelector((state) => state.cart.listSP);

  const validateEmail = (email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const validatePhoneNumber = (phoneNumber) => /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(phoneNumber);

  const submitDuLieu = () => {
    const ht = htRef.current.value;
    const em = emRef.current.value;
    const sdt = sdtRef.current.value;
    const diaChi = addressRef.current.value;
    const cityValue = document.querySelector('#city').value;
    const districtValue = document.querySelector('#district').value;
    const wardValue = document.querySelector('#ward').value;

    const newErrors = {};

    if (cart.length === 0) {
      alert('Bạn chưa chọn sản phẩm nào');
      return;
    }

    if (ht.trim() === '') {
      newErrors['hoTen'] = 'Vui lòng nhập họ tên';
    }

    if (sdt.trim() === '') {
      newErrors['soDienThoai'] = 'Vui lòng nhập số điện thoại';
    } else if (!validatePhoneNumber(sdt)) {
      newErrors['soDienThoai'] = 'Vui lòng nhập số điện thoại hợp lệ';
    }

    if (em.trim() === '') {
      newErrors['email'] = 'Vui lòng nhập địa chỉ email';
    } else if (!validateEmail(em)) {
      newErrors['email'] = 'Vui lòng nhập địa chỉ email hợp lệ';
    }

    if (cityValue === '') {
      newErrors['city'] = 'Vui lòng chọn tỉnh thành';
    }

    if (districtValue === '') {
      newErrors['district'] = 'Vui lòng chọn quận huyện';
    }

    if (wardValue === '') {
      newErrors['ward'] = 'Vui lòng chọn phường xã';
    }

    if (diaChi.trim() === '') {
      newErrors['diaChi'] = 'Vui lòng nhập số nhà, tên đường';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    axios
      .post('http://localhost:3000/donhang/taodonhang', {
        ho_ten: ht,
        so_dien_thoai: sdt,
        email: em,
        tinh_thanh: cityValue,
        quan_huyen: districtValue,
        phuong_xa: wardValue,
        dia_chi: diaChi,
      })
      .then((response) => {
        if (response.data.data._id) {
          const donHangId = response.data.data._id;
          console.log('Đã lưu đơn hàng', donHangId);
          luuChiTietDonHang(donHangId, cart);
        } else {
          console.log('Lỗi lưu đơn hàng', response.data);
        }
      })
      .catch((error) => {
        console.error('Có lỗi khi gửi yêu cầu: ', error);
      });
  };

  const luuChiTietDonHang = (donHangId, cart) => {
    const urlChiTiet = 'http://localhost:3000/chitietdonhang/taochitietdonhang';

    cart.forEach((sp) => {
      const chiTietData = {
        id_dh: donHangId,
        id_sp: sp._id,
        so_luong: sp.soluong,
      };

      axios
        .post(urlChiTiet, chiTietData)
        .then((response) => {
          luuXongSanPham(response.data);
        })
        .catch((err) => {
          console.log('Lỗi lưu sp: ', err);
        });
    });
  };

  const luuXongSanPham = (data) => {
    dispatch(xoaSP(data.data.id_sp));
    navigate('/camon');
  };

  return (
    <div className="container mt-4">
      <h2>Thanh toán đơn hàng</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="hoTen" className="form-label">
            Họ tên
          </label>
          <input ref={htRef} type="text" className={`form-control ${errors.hoTen ? 'is-invalid' : ''}`} id="hoTen" />
        </div>
        <div className="mb-3">
          <label htmlFor="sdt" className="form-label">
            Số điện thoại
          </label>
          <input ref={sdtRef} type="tel" className={`form-control ${errors.soDienThoai ? 'is-invalid' : ''}`} id="sdt" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input ref={emRef} type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="diaChi" className="form-label">
            Địa chỉ
          </label>
          <div className="mb-3 d-flex">
            <div className="me-2 w-100">
              <select id="city" className={`form-select ${errors.city ? 'is-invalid' : ''}`} onChange={handleCityChange} defaultValue="">
                <option value="">Chọn tỉnh thành</option>
                {cities.map((city) => (
                  <option key={city.code} value={city.code}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="me-2 w-100">
              <select id="district" className={`form-select ${errors.district ? 'is-invalid' : ''}`} onChange={handleDistrictChange} defaultValue="">
                <option value="">Chọn quận huyện</option>
                {districts.map((district) => (
                  <option key={district.code} value={district.code}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="me-2 w-100">
              <select id="ward" className={`form-select ${errors.ward ? 'is-invalid' : ''}`} defaultValue="">
                <option value="">Chọn phường xã</option>
                {wards.map((ward) => (
                  <option key={ward.code} value={ward.code}>
                    {ward.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <input ref={addressRef} type="text" className={`form-control ${errors.diaChi ? 'is-invalid' : ''}`} id="diaChi" placeholder="Số nhà, tên đường" />
        </div>
        <button onClick={submitDuLieu} type="button" className="btn btn-primary">
          Lưu đơn hàng
        </button>
        {/* Hiển thị thông báo lỗi */}
        {Object.values(errors).some((error) => error) && (
          <div className="alert alert-danger mt-3">
            <ul>
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}
export default ThanhToan;
