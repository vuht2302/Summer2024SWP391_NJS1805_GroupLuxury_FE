import axios from "./Customize-axios";

const fetchAllProduct = () => {
  return axios.get("/products");
};

export { fetchAllProduct };
