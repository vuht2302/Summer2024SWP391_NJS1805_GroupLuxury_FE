import { Routes, Route, useLocation } from "react-router-dom";
import Main from "../components/Home/Main";
import Login from "../components/Login";
import About from "../components/About";
import Contact from "../components/Contact";
import Jewellery from "../components/Jewellery";
import Register from "../components/Register";
import ShoppingCart from "../components/ShoppingCart";
import DashBoard from "../components/DashBoard";
import CheckOut from "../components/CheckOut";
import InventoryManager from "../components/InventoryManagement";
import ManagerStaff from "../components/ManagerStaff";
import AddProduct from "../components/AddProduct";
import AdminHome from "../components/Admin/AdminHome";
import UserProfile from "../components/UserProfile";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Jewellery" element={<Jewellery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/InventoryManager" element={<InventoryManager />} />
        <Route path="/ManagerStaff" element={<ManagerStaff />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
