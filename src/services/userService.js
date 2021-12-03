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

            // console.log(this.axiosApiInstance);

            this.axiosApiInstance
                .post(`http://localhost:8080/api/auth/signin`, params)
                .then((user) => {
                    if (user.data.accessToken) {
                        // this.setSession(user.data.accessToken);
                        console.log('UserService : user connecté')
                        resolve(user);

                    } else {
                        console.log('UserService : pas de token')
                        reject(user.data.error);
                    }

                })
                .catch(error => {
                    console.log('UserService : erreur auth')
                    reject(error)
                });
        });
    };

    createUser = (data) => {
        return new Promise((resolve, reject) => {
            this.axiosApiInstance
                .post(`http://localhost:8080/api/auth/signup`, data)
                .then((response) => {
                    console.log(response)
                    console.log(response.data)
                    //TODO récupérer le user
                    // if (response.data.user) {
                    //     // this.setSession(response.data.accessToken);
                    //     // console.log("userService resolve", response.data.user)
                    //     // resolve(response.data.user);
                    // } else {
                    //     console.log("userService reject", response.data.error)
                    //     reject(response.data.error);
                    // }
                })
                .catch(error => {
                    console.log("userService catch", error)
                    reject(error);
                });
        });
    };

    isAuth = () => {
        return !!localStorage.getItem("jwt_access_token");
    }

    logout = () => {
        localStorage.removeItem("jwt_access_token");
    }

}
