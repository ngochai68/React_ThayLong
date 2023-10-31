import './assets/css/App.css';
import Menu from './Menu';
import Home from './Home';
import SanPhamXemNhieu from './SanPhamXemNhieu';
import GioiThieu from './GioiThieu';
import ChiTiet from './ChiTiet';
import SPTrongLoai from './SPTrongLoai';
import TimKiem from './TimKiem';
import NotFound from './NotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="container">
        <header className="text-center py-3 bg-dark text-light">
          <h1>Website Bán Hàng</h1>
        </header>
        <nav>
          <Menu />
        </nav>
        <main className="row">
          <article className="col-md-9">
            <Routes>
              <Route path="/" extract element={<Home />} />
              <Route path="/gioithieu" element={<GioiThieu />} />
              <Route path="/sp/:id" element={<ChiTiet />} />
              <Route path="/loai/:id_loai" element={<SPTrongLoai />} />
              <Route path="/timkiem/" element={<TimKiem />} />
              <Route element={<NotFound />} />
            </Routes>
          </article>
          <aside className="col-md-3">
            <SanPhamXemNhieu />
          </aside>
        </main>
        <footer className="text-center py-3 text-secondary">
          <p>Họ tên sinh viên: Nguyễn Ngọc Hải</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
