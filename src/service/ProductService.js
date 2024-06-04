import axios from "./Customize-axios";

const fetchAllProducts = (page) => {
  // Get All User From API
  return axios.get(`/api/users?page=${page}`);
};

export { fetchAllProducts };
