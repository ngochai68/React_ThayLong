import { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div>
        <Link to="/">Trang chủ</Link> |{" "}
        <Link to="/duoi-15-trieu">Dưới 15 triệu</Link> |{" "}
        <Link to="/tu-15-trieu">Từ 15 triệu</Link>
      </div>
    );
  }
}

export default Menu;
