import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Row,
  Col,
  Form,
  ProgressBar,
  Table,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function UserNav({ open }) {
  return (
    <div className={`sidebar ${open ? "show" : ""}`}>
      <div className="bg-dark p-4">
        <h4 className="text-white">My JSM</h4>
        <span className="text-muted">Toggleable via the navbar brand.</span>
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

        .sidebar.show {
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
}

function UserProfile() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("HUY VŨ");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("0562372995");
  const [birthday, setBirthday] = useState("2000-03-04");
  const [address, setAddress] = useState("ĐỒNG KHỞI");
  const [ward, setWard] = useState("PHƯỜNG TAM HIỆP");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleWardChange = (event) => {
    setWard(event.target.value);
  };

  return (
    <div
      className="min-h-100vh flex flex-col bg-slate-50 dark:bg-navy-900"
      id="HeaderAdmin"
    >
      <div
        className="min-h-100vh flex flex-col bg-slate-50 dark:bg-navy-900"
        id="HeaderAdmin"
      >
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand onClick={() => setOpen(!open)}>
            <span
              className={`navbar-toggler-icon ${open ? "open" : ""}`}
            ></span>
          </Navbar.Brand>
        </Navbar>

        <Container fluid className="user-profile">
          <Row className="pt-4">
            <Col lg={4} className={`mb-4 ${open ? "menu-open" : ""}`}>
              {/* Content for user profile left section */}
            </Col>
            <Col lg={8} className="mb-4">
              {/* Content for user profile right section */}
            </Col>
          </Row>
        </Container>
        <UserNav open={open} />
        <style jsx>{`
          .user-profile {
            transition: margin-left 0.3s;
            margin-left: ${open ? "250px" : "56px"};
          }

          .nav-link {
            padding-left: ${open ? "30px" : "15px"};
          }

          .navbar-toggler-icon {
            transition: margin-left 0.3s;
            margin-left: ${open ? "250px" : "0"};
          }

          .open {
            transform: rotate(180deg);
          }

          .menu-open {
            margin-left: 250px;
          }
        `}</style>
      </div>

      <Container fluid className={`user-profile ${open ? "menu-open" : ""}`}>
        <Row className="pt-4">
          <Col lg={4} className="mb-4">
            <div className="text-center mb-4">
              <img
                src="path-to-avatar.jpg"
                alt="User Avatar"
                className="rounded-circle"
                width="100"
                height="100"
              />
              <h4>HUY VŨ</h4>
              <p className="text-muted">Kết nối [0103590505]</p>
              <div className="mb-4">
                <h5>Điểm của bạn</h5>
                <ProgressBar now={1} max={99} label={`${1}/99 điểm`} />
                <p>Bạn cần 99 điểm nữa để tăng hạng!</p>
              </div>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Họ và tên:</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Địa chỉ email:</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter email address"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Số điện thoại:</Form.Label>
                <Form.Control
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="birthday">
                <Form.Label>Ngày sinh:</Form.Label>
                <Form.Control
                  type="date"
                  value={birthday}
                  onChange={handleBirthdayChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Địa chỉ:</Form.Label>
                <Form.Control
                  type="text"
                  value={address}
                  onChange={handleAddressChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ward">
                <Form.Label>Phường xã:</Form.Label>
                <Form.Control
                  type="text"
                  value={ward}
                  onChange={handleWardChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="district">
                <Form.Label>Quận/Huyện:</Form.Label>
                <Form.Control type="text" value="Enter district" disabled />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={8} className="mb-4">
            <h2 className="profile-title">Thông tin tài khoản</h2>
            <div className="profile-level mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <span>Kết Nối</span>
                <span>Thành Viên</span>
                <span>Đồng Hành</span>
                <span>Thân Thiết</span>
              </div>
            </div>
            <div className="profile-benefits mb-4">
              <h3>Quyền lợi của bạn</h3>
              <p>Chiết khấu 5% cho mẫu đồng hồ Longines & Tissot</p>
              <p>Chiết khấu 10% cho các mẫu đồng hồ còn lại</p>
            </div>
            <div className="profile-policy">
              <Table bordered>
                <thead>
                  <tr>
                    <th>Chính sách</th>
                    <th>Nhóm hàng</th>
                    <th>Doanh thu quy đổi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Vàng</td>
                    <td>Kim cương rời, nữ trang 24K</td>
                    <td>2,000,000 vnđ = 1 điểm</td>
                  </tr>
                  <tr>
                    <td>Vàng</td>
                    <td>Vàng Miếng</td>
                    <td>6,000,000 vnđ = 1 điểm</td>
                  </tr>
                  <tr>
                    <td>Vàng</td>
                    <td>Tất cả dòng sản phẩm vàng còn lại</td>
                    <td>1,000,000 vnđ = 1 điểm</td>
                  </tr>
                  <tr>
                    <td>Đồng hồ</td>
                    <td>Tất cả các brand</td>
                    <td>1,000,000 vnđ = 1 điểm</td>
                  </tr>
                  <tr>
                    <td>Bạc</td>
                    <td>Bạc, Thau, Jemma</td>
                    <td>500,000 vnđ = 10,000 vnđ tiền chiết khấu</td>
                  </tr>
                </tbody>
              </Table>
              <a href="#" className="policy-link">
                Xem chi tiết thể lệ
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <UserNav open={open} />
    </div>
  );
}

export default UserProfile;
