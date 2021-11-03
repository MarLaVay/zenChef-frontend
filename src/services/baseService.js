import axios from "axios";

export default class BaseService {
  baseUrl = "http://localhost:8080";
  axiosApiInstance;

  constructor() {
    this.axiosApiInstance = axios.create();

    // Request interceptor for API calls
    this.axiosApiInstance.interceptors.request.use(
      async (config) => {
        const token = localStorage.getItem("jwt_access_token");
        if (token == null) return config;
        config.headers = {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        };
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  }

  getAPIPagedQuery(lazyEvent) {
    let _first = lazyEvent.first == null ? 0 : lazyEvent.first;
    let _pageSize = lazyEvent.rows == null ? 0 : lazyEvent.rows;

    let pageIndex = (_first / _pageSize).toString();
    let pageSize = _pageSize.toString();
    let sortBy =
      lazyEvent.sortField == null ? "" : lazyEvent.sortField.toString();
    let sortAsc = (lazyEvent.sortOrder === 1 ? false : true).toString();

    return {
      pageIndex,
      pageSize,
      sortBy,
      sortAsc,
    };
  }

  getQueryParams(params) {
    return Object.keys(params)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
      .join("&");
  }

  handleHttpError(error) {
    console.log(error);
    throw new Error("Http Error");
  }
}
