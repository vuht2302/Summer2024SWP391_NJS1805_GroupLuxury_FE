import React from "react";
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
import { Link } from "react-router-dom";

function Register() {
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
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Confirm Password"
                id="formControlLg"
                type="password"
                size="lg"
              />
              <MDBBtn className="mb-4 px-5" color="dark" size="lg">
                Register
              </MDBBtn>
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
    </MDBContainer>
  );
}

export default Register;
