import axios from "axios";

const API_URL = "https://broschat.onrender.com";

class AuthService {
  signUp(inputData) {
    return axios.post(API_URL + "/api/auth/signup", inputData);
  }

  logOut() {
    return axios.get(API_URL + "/api/auth/logout", {
      withCredentials: true,
    });
  }

  login(inputData) {
    return axios.post(API_URL + "/api/auth/login", inputData, {
      withCredentials: true,
    });
  }
}

export default new AuthService();
