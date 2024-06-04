import Header from "./component/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./component/Footer";

import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./Context/UserContext";
function App() {
  const location = useLocation();

  // Define paths where Header and Footer should not be rendered
  const noHeaderFooterPaths = [
    "/AddProduct",
    "/DashBoard",
    "/ManagerStaff",
    "/AdminMain",
    "/Login",
    "/UserProfile",
    "/Product",
    "/AdminMain/ManageProduct",
  ];
  const { user, loginContext } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      loginContext(
        localStorage.getItem("username"),
        localStorage.getItem("token")
      );
    }
  }, []);
  const shouldRenderHeaderFooter = !noHeaderFooterPaths.includes(
    location.pathname
  );
  return (
    <div className="App">
      {shouldRenderHeaderFooter && <Header />}
      <AppRoutes />
      {shouldRenderHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
