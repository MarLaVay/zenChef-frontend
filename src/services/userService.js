import axios from "axios";
import BaseService from "./baseService";

export default class UserService extends BaseService {
  setSession = (access_token) => {
    if (access_token) {
      localStorage.setItem("jwt_access_token", access_token);
      axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
      localStorage.removeItem("jwt_access_token");
      delete axios.defaults.headers.common.Authorization;
    }
  };

  login = (nameOrEmail, password) => {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append("nameOrEmail", nameOrEmail);
      params.append("password", password);

      console.log(this.axiosApiInstance);

      this.axiosApiInstance
        .post(`http://localhost:8080/api/auth/signin`, params)
        .then((user) => {
          if (user.data.accessToken) {
            this.setSession(user.data.accessToken);
            resolve(user);
          } else {
            reject(user.data.error);
          }
        });
    });
  };

  createUser = (data) => {
    return new Promise((resolve, reject) => {
      this.axiosApiInstance
        .post(`http://localhost:8080/api/auth/signup`, data)
        .then((response) => {
          if (response.data.user) {
            this.setSession(response.data.accessToken);
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        });
    });
  };
}
