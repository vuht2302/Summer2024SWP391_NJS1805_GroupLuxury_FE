import axios from "./Customize-axios";

const fetchAllProducts = (page) => {
  // Get All User From API
  return axios.get(`/api/users?page=${page}`);
};
const postCreateProduct = (name, job) => {
  return axios.post("/api/users", { name, job }); // link api va data muon gui di
};

export { fetchAllProducts, postCreateProduct };
