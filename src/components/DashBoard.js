import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

function DashBoard() {
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="3">
              <div className="sidebar">
                <ul className="sidebar-nav">
                  <li>
                    <MDBIcon fas icon="home" />
                    <span>Dashboard</span>
                  </li>
                  <li>
                    <MDBIcon fas icon="users" />
                    <span>Users</span>
                  </li>
                  <li>
                    <MDBIcon fas icon="shopping-cart" />
                    <span>Orders</span>
                  </li>
                  <li>
                    <MDBIcon fas icon="chart-bar" />
                    <span>Reports</span>
                  </li>
                </ul>
              </div>
            </MDBCol>
            <MDBCol md="9">
              <h2 className="fw-bold mb-4">Admin Dashboard</h2>
              {/* Dashboard content goes here */}
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default DashBoard;
