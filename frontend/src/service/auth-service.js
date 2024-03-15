import axios from "axios";

const API_URL = "http://localhost:8080";

class AuthService {
  signUp(inputData) {
    return axios.post(API_URL + "/api/auth/signup", inputData);
  }
}

export default new AuthService();
