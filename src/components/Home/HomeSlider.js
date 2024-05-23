import { Link } from "react-router-dom";

export default function HomeSlider() {
  return (
    <section className="slider_section position-relative">
      <div className="design-box">
        <img src="images/design-1.png" alt="" />
      </div>
      <div className="slider_number-container d-none d-md-block">
        <div className="number-box">
          <span>01</span>
          <hr />
          <span className="jwel">
            J <br />
            e <br />
            w <br />
            e <br />
            l <br />
            l <br />
            e <br />
            r <br />y
          </span>
          <hr />
          <span>02</span>
        </div>
      </div>
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            >
              01
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1">
              02
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2">
              03
            </li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail_box">
                    <h2>
                      <span>New Collection</span>
                      <hr />
                    </h2>
                    <h1>Jewellery</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      elit at felis lacinia aptent taciti sociosqu ad litora
                      torquent per conubia nostra
                    </p>
                    <div>
                      <Link to="/Jewellery">Shop Now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail_box">
                    <h2>
                      <span>New Collection</span>
                      <hr />
                    </h2>
                    <h1>Jewellery</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      elit at felis lacinia aptent taciti sociosqu ad litora
                      torquent per conubia nostra
                    </p>
                    <div>
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail_box">
                    <h2>
                      <span>New Collection</span>
                      <hr />
                    </h2>
                    <h1>Jewellery</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      elit at felis lacinia aptent taciti sociosqu ad litora
                      torquent per conubia nostra
                    </p>
                    <div>
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
