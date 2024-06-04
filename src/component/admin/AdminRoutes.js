import { Route, Routes } from "react-router-dom";
import ManageProduct from "./ManageProduct";
import TableUsers from "./TableUsers";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<AdminHome />} /> */}
        <Route path="/AdminHome/ManageProduct" element={<ManageProduct />} />
        <Route path="/AdminHome/TableUsers" element={<TableUsers />} />
      </Routes>
    </>
  );
};

export default AdminRoutes;
