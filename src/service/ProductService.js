import axios from "./Customize-axios";

const fetchAllProducts = (page) => {
  // Get All User From API
  return axios.get(`/api/users?page=${page}`);
};
const postCreateProduct = (name, job) => {
  // truyen vao cai api yc
  return axios.post("/api/users", { name, job }); // link api va data muon gui di
};
const patchUpdateProduct = (name, job) => {
  return axios.patch("/api/users/2", { name, job });
};
export { fetchAllProducts, postCreateProduct, patchUpdateProduct };
