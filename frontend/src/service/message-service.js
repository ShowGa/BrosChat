import axios from "axios";

const API_URL = "https://broschat.onrender.com";

class MessageService {
  getMessage(receiverId) {
    return axios.get(API_URL + "/api/messages/" + receiverId, {
      withCredentials: true,
    });
  }

  sendMessage(receiverId, inputMessage) {
    return axios.post(
      API_URL + "/api/messages/send/" + receiverId,
      inputMessage,
      { withCredentials: true }
    );
  }
}

export default new MessageService();
