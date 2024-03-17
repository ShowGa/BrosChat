import axios from "axios";

const API_URL = "http://localhost:8080";

class UserService {
  getConversation() {
    return axios.get(API_URL + "/api/users", { withCredentials: true });
  }
}

export default new UserService();
