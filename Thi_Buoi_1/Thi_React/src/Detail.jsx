import { useParams } from "react-router-dom";

function Detail() {
  let { id } = useParams();
  return <div>Chi tiết sản phẩm với ID: {id}</div>;
}

export default Detail;
