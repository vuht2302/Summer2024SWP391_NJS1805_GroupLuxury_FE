import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const ManagerStaff = () => {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="p-4">
              <MDBRow>
                <MDBCol>
                  <MDBTypography tag="h5" className="mb-4">
                    Manager Staff
                  </MDBTypography>
                  <form>
                    <MDBInput
                      label="First Name"
                      type="text"
                      size="lg"
                      className="mb-4"
                    />
                    <MDBInput
                      label="Last Name"
                      type="text"
                      size="lg"
                      className="mb-4"
                    />
                    <MDBInput
                      label="Email"
                      type="email"
                      size="lg"
                      className="mb-4"
                    />
                    <MDBInput
                      label="Password"
                      type="password"
                      size="lg"
                      className="mb-4"
                    />
                    <MDBInput
                      label="Confirm Password"
                      type="password"
                      size="lg"
                      className="mb-4"
                    />
                    <MDBBtn color="primary" block size="lg" type="submit">
                      <MDBIcon fas icon="user-plus" className="me-2" />
                      Add Staff
                    </MDBBtn>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ManagerStaff;
