import React, { useContext, useState } from "react";
import { Button, Form, Container, Row, Col, InputGroup } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { loginApi } from "../service/UserService";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import styled from "styled-components";
// Styled-components styles
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #ffffff;
`;

const LoginForm = styled.div`
  position: relative;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LoginTitle = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const BackLink = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #000;

  a {
    color: #000;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  a:hover {
    text-decoration: underline;
  }

  i {
    margin-right: 0.5rem;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const { loginContext } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (username && password) {
      let res = await loginApi(username, password);
      if (res && res.id) {
        loginContext(username, res.id);
        navigate("/");
      } else {
        if (res && res.status === 401) {
          toast.error("User Not Found!");
        }
      }
    } else {
      toast.error("Email/Password is required");
      return;
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginContainer>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <LoginForm>
              <BackLink>
                <Link to="/">
                  <i className="fa-solid fa-angles-left"></i>Back
                </Link>
              </BackLink>
              <LoginTitle>Login</LoginTitle>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </InputGroup>
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-4 w-100">
                  Login
                </Button>
              </Form>
            </LoginForm>
          </Col>
        </Row>
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
      </Container>
    </LoginContainer>
  );
};

export default Login;
