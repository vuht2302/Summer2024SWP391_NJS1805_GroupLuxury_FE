import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { userApi } from "../service/UserService";
import { ToastContainer, toast } from "react-toastify";
function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneName, setPhoneName] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    if (username && password && email && phoneName) {
      let res = await userApi(username, password, email, phoneName);
      if (res && res.id) {
        navigate("/Login");
        toast.success("ok");
      } else {
        if (res && res.status === 400) {
          toast.error("Username already exists ");
        }
      }
    } else {
      toast.error("Email/Password is required");
      return;
    }
  };
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://static.vecteezy.com/system/resources/previews/008/903/410/non_2x/ring-shaped-jewelry-logo-template-free-vector.jpg"
              alt="register form"
              className="rounded-start w-100"
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0">Jewelry Shop</span>
              </div>
              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Create your account
              </h5>
              <form onSubmit={handleRegister}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="User Name"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <MDBInput
                  wrapperClass="mb-4"
                  label="Confirm Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                /> */}
                <MDBInput
                  wrapperClass="mb-4"
                  label="Phone Number"
                  id="formControlLg"
                  type="tel"
                  size="lg"
                  onChange={(e) => setPhoneName(e.target.value)}
                />
                <Button
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                  style={{ backgroundColor: "black" }}
                  type="submit"
                >
                  Register
                </Button>
              </form>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Already have an account?{" "}
                <Link to="/Login" style={{ color: "#393f81" }}>
                  Login here
                </Link>
              </p>
              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
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
      {/* Same as */}
      <ToastContainer />
    </MDBContainer>
  );
}

export default Register;
