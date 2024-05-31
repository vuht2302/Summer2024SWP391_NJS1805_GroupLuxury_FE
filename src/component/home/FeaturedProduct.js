import axios from "axios";
import { useEffect, useState } from "react";

export default function Featured() {
  const [product, setproduct] = useState([]);
  useEffect(async () => {
    let res = await axios.get("http://localhost:8080/product/getAllProduct");
    let data = res && res.data ? res.data : [];
    setproduct(data);
  }, []);
  return (
    <>
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Product</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".oranges">Oranges</li>
                  <li data-filter=".fresh-meat">Fresh Meat</li>
                  <li data-filter=".vegetables">Vegetables</li>
                  <li data-filter=".fastfood">Fastfood</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            {product &&
              product.length > 0 &&
              product.map((item) => (
                <div
                  key={item.id}
                  className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"
                >
                  <div className="featured__item">
                    <div
                      className="featured__item__pic set-bg"
                      style={{
                        backgroundImage: `url(${item.images})`,
                      }}
                    >
                      <ul className="featured__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="featured__item__text">
                      <h6>
                        <a href="#">{item.productName}</a>
                      </h6>
                      <h5>1</h5>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
