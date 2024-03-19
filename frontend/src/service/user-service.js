import axios from "axios";

const API_URL = "https://broschat.onrender.com";

class UserService {
  getConversation() {
    return axios.get(API_URL + "/api/users", { withCredentials: true });
  }
}

export default new UserService();
