import axios from "./Customize-axios";

const fetchAllUser = () => {
  return axios.get("product/getAllProduct");
};
const postCreateUser = (name, job) => {
  return axios.post("/api/users", { name, job });
};
const loginApi = (username, password) => {
  return axios.post("api/user/login", { username, password });
};
const putUpdateUser = (name, job) => {
  return axios.put("/api/users/", { name, job });
};
const deleteUser = (id) => {
  return axios.delete(`/api/users/${id}`);
};
const userApi = (username, password, email, phoneName) => {
  return axios.post("/api/user/register", {
    username,
    password,
    email,
    phoneName,
  });
};
export {
  fetchAllUser,
  postCreateUser,
  loginApi,
  putUpdateUser,
  deleteUser,
  userApi,
};
