import React from "react";
import ProductFilters from "./ProductFilter";
import HomeProduct from "./Home/HomeProduct";

const Jewellery = () => {
  return (
    <div>
      <div className="item_section layout_padding2">
        <div className="container">
          <div className="item_container">
            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="images/i-1.png" alt="" />
              </div>
              <div className="name">
                <h5>Bracelet</h5>
              </div>
            </div>
            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="images/i-2.png" alt="" />
              </div>
              <div className="name">
                <h5>Ring</h5>
              </div>
            </div>
            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="images/i-3.png" alt="" />
              </div>
              <div className="name">
                <h5>Earings</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="price_section layout_padding"
        style={{ paddingTop: 0 }}
      >
        <div className="container">
          <div className="heading_container">
            <div>
              <h2>Our Jewellery Price</h2>
            </div>
            <div style={{ marginTop: 20 }}>
              <ProductFilters />
            </div>
          </div>
          <div className="price_container">
            <HomeProduct limit="16" />
          </div>
          <div className="d-flex justify-content-center">
            <a href="" className="price_btn">
              See More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jewellery;
