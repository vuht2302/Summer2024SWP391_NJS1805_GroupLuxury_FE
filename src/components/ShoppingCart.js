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

function ShoppingCart() {
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="8">
              <h2 className="fw-bold mb-4">Your Shopping Cart</h2>
              {/* Place your shopping cart items here */}
            </MDBCol>
            <MDBCol md="4">
              <div className="summary-box">
                <h4 className="fw-bold mb-3">Order Summary</h4>
                <div className="summary-item">
                  <span className="item-name">Product 1</span>
                  <span className="item-price">$10</span>
                </div>
                <div className="summary-item">
                  <span className="item-name">Product 2</span>
                  <span className="item-price">$20</span>
                </div>
                <div className="summary-total">
                  <span>Total:</span>
                  <span>$30</span>
                </div>
                <MDBBtn color="dark" className="w-100 mt-4">
                  Proceed to Checkout
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default ShoppingCart;
