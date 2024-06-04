import HomeMain from "../component/HomeMain";
import ShopGrid from "../component/ShopGrid";
import ShopDetails from "../component/ShopDetails";
import Contact from "../component/Contact";
import Blog from "../component/Blog";
import ShoppingCart from "../component/ShoppingCart";
import Checkout from "../component/CheckOut";
import { Route, Routes } from "react-router-dom";
import Login from "../component/Login";
import Register from "../component/Register";
import StaffPage from "../component/StaffPage";
import AdminMain from "../component/admin/AdminMain";
import ManageProduct from "../component/admin/ManageProduct";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/CheckOut" element={<Checkout />} />
        <Route path="/ShopGrid" element={<ShopGrid />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shopdetails" element={<ShopDetails />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/StaffPage" element={<StaffPage />} />
        <Route path="/AdminMain/ManageProduct" element={<ManageProduct />} />
        <Route path="/AdminMain" element={<AdminMain />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
