import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function HomeProduct(props) {
  const { limit } = props;
  var [product, setProduct] = useState([]);
  var [category, setCategory] = useState([]);
  useEffect(() => {
    async function getProduct() {
      const res = await fetch(
        "http://localhost:3001/Products?_limit= " + limit
      );
      let data = await res.json();
      setProduct(data);
    }
    getProduct();
  }, []);
  return (
    <section className="price_section layout_padding" stlye={{ paddingTop: 0 }}>
      <div className="container">
        <div className="price_container" stlye={{ paddingTop: 0 }}>
          {product.map((prod, key) => {
            return (
              <div className="col-lg-3 col-md-6" key={key}>
                <div className="name">
                  <h6>{prod.name}</h6>
                </div>
                <div className="img-box">
                  <img
                    src={prod.image}
                    alt=""
                    style={{ width: "200px", height: "auto" }}
                  />
                </div>
                <div className="detail-box">
                  <h5>
                    $<span>{prod.price}</span>
                  </h5>
                  <a href="">Buy Now</a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center">
          <a href="" className="price_btn">
            See More
          </a>
        </div>
      </div>
    </section>
  );
}
