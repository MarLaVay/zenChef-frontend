import BaseService from "./baseService";

export default class IngredientService extends BaseService {
  baseUrl = `http://localhost:8080/ingredient`;
  getAll() {
    return new Promise((resolve, reject) => {
      this.axiosApiInstance.get(this.baseUrl).then((response) => {
        if (response.data) {
          resolve(response.data);
        } else {
          reject(response.data.error);
        }
      });
    });
  }

  create(data) {
    return new Promise((resolve, reject) => {
      this.axiosApiInstance.post(this.baseUrl, data).then((response) => {
        if (response.data) {
          resolve(response.data);
        } else {
          reject(response.data.error);
        }
      });
    });
  }

  update(data) {}

  delete(id) {
    return new Promise((resolve, reject) => {
      this.axiosApiInstance.delete(this.baseUrl + "/" + id).then((response) => {
        if (response.data) {
          resolve(response.data);
        } else {
          reject(response.data.error);
        }
      });
    });
  }
}
