import { Link, NavLink, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function Header() {
  const { logout, user } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success("Logout Success!");
  };

  return (
    <>
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link className="navbar-brand" to="/">
              <img src="images/logo.png" alt="" />
              <span>Lodge</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Jewellery">
                    Jewellery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Contact us
                  </Link>
                </li>
                <li className="nav-item">
                  <NavDropdown
                    title={
                      user && user.auth ? `Hello ${user.email}` : "Setting"
                    }
                    id="basic-nav-dropdown"
                  >
                    {user && user.auth ? (
                      <NavDropdown.Item onClick={() => handleLogout()}>
                        LogOut
                      </NavDropdown.Item>
                    ) : (
                      <NavLink to="/Login" className="dropdown-item">
                        Login
                      </NavLink>
                    )}
                  </NavDropdown>
                </li>
              </ul>
              <div className="quote_btn-container d-flex align-items-center">
                <Link to="/ShoppingCart" className="d-flex align-items-center">
                  <img src="images/cart.png" alt="" />
                  <div className="cart_number">0</div>
                </Link>
                <form className="form-inline ml-3">
                  <button
                    className="btn my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  ></button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
