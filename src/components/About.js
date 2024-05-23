const About = () => (
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud
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
);

const InfoSection = () => (
  <section className="info_section">
    <div className="container">
      <div className="info_container">
        <div className="row">
          <div className="col-md-3">
            <div className="info_logo">
              <a href="">
                <img src="images/logo.png" alt="" />
                <span>Lodge</span>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_contact">
              <a href="">
                <img src="images/location.png" alt="" />
                <span>Address</span>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_contact">
              <a href="">
                <img src="images/phone.png" alt="" />
                <span>+01 1234567890</span>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_contact">
              <a href="">
                <img src="images/mail.png" alt="" />
                <span>demo@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="info_form">
          <div className="d-flex justify-content-center">
            <h5 className="info_heading">Newsletter</h5>
          </div>
          <form action="">
            <div className="email_box">
              <label htmlFor="email2">Enter Your Email</label>
              <input type="text" id="email2" />
            </div>
            <div>
              <button type="submit">subscribe</button>
            </div>
          </form>
        </div>
        <div className="info_social">
          <div className="d-flex justify-content-center">
            <h5 className="info_heading">Follow Us</h5>
          </div>
          <div className="social_box">
            <a href="">
              <img src="fb.png" alt="" />
            </a>
            <a href="">
              <img src="twitter.png" alt="" />
            </a>
            <a href="">
              <img src="linkedin.png" alt="" />
            </a>
            <a href="">
              <img src="insta.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
