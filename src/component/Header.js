import { NavDropdown } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";
import { useContext } from "react";

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
      <div className="humberger__menu__overlay"></div>
      <div class="humberger__menu__wrapper">
        <div class="humberger__menu__logo">
          <Link href="#">
            <img src="img/logo.png" alt="" />
          </Link>
        </div>
        <div class="humberger__menu__cart">
          <ul>
            <li>
              <Link href="#">
                <i class="fa fa-heart"></i> <span>1</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i class="fa fa-shopping-bag"></i> <span>3</span>
              </Link>
            </li>
          </ul>
          <div class="header__cart__price">
            item: <span>$150.00</span>
          </div>
        </div>
        <div class="humberger__menu__widget">
          <div class="header__top__right__language">
            <img src="img/language.png" alt="" />
            <div>English</div>
            <span class="arrow_carrot-down"></span>
            <ul>
              <li>
                <Link href="#">Spanis</Link>
              </li>
              <li>
                <Link href="#">English</Link>
              </li>
            </ul>
          </div>
        </div>
        <li className="nav-item"></li>
        <nav class="humberger__menu__nav mobile-menu">
          <ul>
            <li class="active">
              <Link href="./index.html">Home</Link>
            </li>
            <li>
              <Link href="./shop-grid.html">Shop</Link>
            </li>
            <li>
              <Link href="#">Pages</Link>
              <ul class="header__menu__dropdown">
                <li>
                  <Link href="./shop-details.html">Shop Details</Link>
                </li>
                <li>
                  <Link href="./shoping-cart.html">Shoping Cart</Link>
                </li>
                <li>
                  <Link href="./checkout.html">Check Out</Link>
                </li>
                <li>
                  <Link href="./blog-details.html">Blog Details</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="./blog.html">Blog</Link>
            </li>
            <li>
              <Link href="./contact.html">Contact</Link>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div class="header__top__right__social">
          <Link href="#">
            <i class="fa fa-facebook"></i>
          </Link>
          <Link href="#">
            <i class="fa fa-twitter"></i>
          </Link>
          <Link href="#">
            <i class="fa fa-linkedin"></i>
          </Link>
          <Link href="#">
            <i class="fa fa-pinterest-p"></i>
          </Link>
        </div>
        <div class="humberger__menu__contact">
          <ul>
            <li>
              <i class="fa fa-envelope"></i> hello@colorlib.com
            </li>
            <li>Free Shipping for all Order of $99</li>
          </ul>
        </div>
      </div>

      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                      <i className="fa fa-envelope"></i> hello@colorlib.com
                    </li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
                  <div className="header__top__right__language">
                    <img src="img/language.png" alt="Language" />
                    <div>English</div>
                    <span className="arrow_carrot-down"></span>
                    <ul>
                      <li>
                        <Link to="#">Spanish</Link>
                      </li>
                      <li>
                        <Link to="#">English</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    <NavDropdown
                      title={
                        user && user.auth ? `Hello ${user.username}` : "Setting"
                      }
                      id="basic-nav-dropdown"
                    >
                      {user && user.auth ? (
                        <>
                          <NavLink to="/UserProfile" className="dropdown-item">
                            Profile
                          </NavLink>
                          <NavDropdown.Item onClick={() => handleLogout()}>
                            LogOut
                          </NavDropdown.Item>
                        </>
                      ) : (
                        <NavLink to="/Login" className="dropdown-item">
                          Login
                        </NavLink>
                      )}
                    </NavDropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <Link to="./index.html">
                  <img src="img/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/ShopGrid">Shop</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                    <ul className="header__menu__dropdown">
                      <li>
                        <Link to="/ShopDetails">Shop Details</Link>
                      </li>
                      <li>
                        <Link to="/ShoppingCart">Shopping Cart</Link>
                      </li>
                      <li>
                        <Link to="/CheckOut">Check Out</Link>
                      </li>
                      <li>
                        <Link to="/BlogDetails">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/Blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fa fa-heart"></i> <span>1</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-shopping-bag"></i> <span>3</span>
                    </Link>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>$150.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
}
