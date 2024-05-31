import React from "react";

const Checkout = () => {
  return (
    <section className="checkout spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h6>
              <span className="icon_tag_alt"></span> Have a coupon?{" "}
              <a href="#">Click here</a> to enter your code
            </h6>
          </div>
        </div>
        <div className="checkout__form">
          <h4>Billing Details</h4>
          <form action="#">
            <div className="row">
              <div className="col-lg-8 col-md-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="checkout__input">
                      <p>
                        First Name<span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="checkout__input">
                      <p>
                        Last Name<span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                {/* Additional form fields go here */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="checkout__order">
                  <h4>Your Order</h4>
                  <div className="checkout__order__products">
                    Products <span>Total</span>
                  </div>
                  <ul>
                    <li>
                      Vegetable’s Package <span>$75.99</span>
                    </li>
                    <li>
                      Fresh Vegetable <span>$151.99</span>
                    </li>
                    <li>
                      Organic Bananas <span>$53.99</span>
                    </li>
                  </ul>
                  <div className="checkout__order__subtotal">
                    Subtotal <span>$750.99</span>
                  </div>
                  <div className="checkout__order__total">
                    Total <span>$750.99</span>
                  </div>
                  {/* Additional order summary details go here */}
                  <button type="submit" className="site-btn">
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
