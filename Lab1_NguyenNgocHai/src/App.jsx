import './App.css';
import Menu from './Menu';
import Home from './Home';
import SanPhamXemNhieu from './SanPhamXemNhieu';

function App() {
  return (
    <div className="container">
      <header className="text-center py-3 bg-dark text-light">
        <h1>Website Bán Hàng</h1>
      </header>
      <nav>
        <Menu />
      </nav>
      <main className="row">
        <article className="col-md-9">
          <h2>Danh sách sản phẩm</h2>
          <Home />
        </article>
        <aside className="col-md-3">
          <h3>Sản phẩm xem nhiều</h3>
          <SanPhamXemNhieu />
        </aside>
      </main>
      <footer className="text-center py-3 text-secondary">
        <p>Họ tên sinh viên: Nguyễn Ngọc Hải</p>
      </footer>
    </div>
  );
}

export default App;
