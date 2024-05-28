import React, { useState } from "react";
import { Collapse, Button, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function UserNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pos-f-t">
      <Collapse in={open} dimension="width">
        <div id="navbarToggleExternalContent" className="bg-dark p-4 sidebar">
          <h4 className="text-white">
            <Nav.Link href="/" className="text-white">
              My JSM
            </Nav.Link>
          </h4>
          <Nav className="flex-column mt-4">
            <Nav.Link href="#account-info" className="text-white">
              Thông tin tài khoản
            </Nav.Link>
            <Nav.Link href="#my-coupons" className="text-white">
              Mã giảm của tôi
            </Nav.Link>
            <Nav.Link href="#purchase-history" className="text-white">
              Lịch sử mua hàng
            </Nav.Link>
            <Nav.Link href="#interested-products" className="text-white">
              Sản phẩm bạn quan tâm
            </Nav.Link>
          </Nav>
        </div>
      </Collapse>
      <Navbar bg="dark" variant="dark">
        <Button
          variant="dark"
          onClick={() => setOpen(!open)}
          aria-controls="navbarToggleExternalContent"
          aria-expanded={open}
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
      </Navbar>
      <style jsx>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 250px;
          background-color: #343a40;
          overflow-y: auto;
          transform: translateX(-250px);
          transition: transform 0.3s ease-in-out;
        }

        .collapse.show {
          transform: translateX(0);
        }

        .nav-link {
          padding: 0.5rem 1rem;
        }

        .nav-link:hover {
          background-color: #495057;
        }
      `}</style>
    </div>
  );
}

export default UserNav;
