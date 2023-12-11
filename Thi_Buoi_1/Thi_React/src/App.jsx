import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import TrangChu from "./TrangChu";
import ThongKe from "./ThongKe";
import Detail from "./Detail";
import Laptop from "./Laptop";

function App() {
  return (
    <Router>
      <div className="container">
        <header className="bg-primary text-white" style={{ height: "60px" }}>
          <Menu />
        </header>

        <main className="bg-light" style={{ minHeight: "300px" }}>
          <Routes>
            <Route path="/" element={<TrangChu />} />
            <Route path="/thongke" element={<ThongKe />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/duoi-15-trieu" element={<Laptop />} />
            <Route path="/tu-15-trieu" element={<Laptop />} />
          </Routes>
        </main>

        <footer className="bg-info" style={{ height: "45px" }}>
          Họ tên sinh viên
        </footer>
      </div>
    </Router>
  );
}

export default App;
