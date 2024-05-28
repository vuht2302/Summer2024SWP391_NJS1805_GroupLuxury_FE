import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useContext, useEffect } from "react";
import { UserContext } from "./Context/UserContext";

import AppRoutes from "./routes/AppRoutes";
function App() {
  const location = useLocation();

  // Define paths where Header and Footer should not be rendered
  const noHeaderFooterPaths = [
    "/AddProduct",
    "/DashBoard",
    "/ManagerStaff",
    "/AdminHome",
    "/Login",
    "/UserProfile",
  ];
  const { user, loginContext } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      loginContext(
        localStorage.getItem("email"),
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
