import { Container } from "react-bootstrap";
import NavBarAdmin from "./NavbarAdmin";
import ManageProduct from "./ManageProduct";
import AdminHome from "./AdminHome";
import { Route, Routes } from "react-router-dom";

function AdminMain() {
  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/AdminMain/ManageProduct" element={<ManageProduct />} />
      </Routes>
    </div>
  );
}
export default AdminMain;
