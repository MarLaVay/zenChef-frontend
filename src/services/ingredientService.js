import BaseService from "./baseService";

export default class IngredientService extends BaseService {
  getAll() {}
  create(data) {
    return new Promise((resolve, reject) => {
      this.axiosApiInstance
        .post(`http://localhost:8080/ingredient`, data)
        .then((response) => {
          if (response.data) {
            resolve(response.data);
          } else {
            reject(response.data.error);
          }
        });
    });
  }
  update(ingredient) {}
  delete(id) {}
}
