import axios from "./Customize-axios";

const fectchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};
const postCreateUser = (name, job) => {
  return axios.post("/api/users", { name, job });
};
const loginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

export { fectchAllUser, postCreateUser, loginApi };
