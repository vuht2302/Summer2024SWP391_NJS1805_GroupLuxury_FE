import React, { useEffect, useState } from "react";
import HomeSlider from "./HomeSlider";
import HomeProduct from "./HomeProduct";

export default function Main() {
  return (
    <div>
      <HomeSlider />

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

      <section className="about_section layout_padding2-top layout_padding-bottom">
        <div className="design-box">
          <img src="images/design-2.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Jewellery Shop</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud
                </p>
                <div>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="heading_container">
        <h2 style={{ paddingLeft: 100 }}>Our Jewellery Price</h2>
      </div>
      <HomeProduct limit="4" />

      <section className="ring_section layout_padding">
        <div className="design-box">
          <img src="images/design-1.png" alt="" />
        </div>
        <div className="container">
          <div className="ring_container layout_padding2">
            <div className="row">
              <div className="col-md-5">
                <div className="detail-box">
                  <h4>special</h4>
                  <h2>Wedding Ring</h2>
                  <a href="">Buy Now</a>
                </div>
              </div>
              <div className="col-md-7">
                <div className="img-box">
                  <img src="images/ring-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
