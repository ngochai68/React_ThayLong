import "./assets/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import NotFound from "./NotFound";
import Menu from "./Menu";
import SanPhamList from "./SanPhamList";
import SanPhamSua from "./SanPhamSua";
import SanPhamThem from "./SanPhamThem";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="container">
        <header> </header>
        <nav>
          <Menu />
        </nav>
        <main>
          <Routes>
            <Route path="/" exact element={<Admin />} />
            <Route path="/admin/sp" exact element={<SanPhamList />} />
            <Route path="/admin/spthem" exact element={<SanPhamThem />} />
            <Route path="/admin/spsua/:id" exact element={<SanPhamSua />} />
            <Route path="/" exact element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <p>Họ tên sinh viên: Nguyễn Ngọc Hải</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
