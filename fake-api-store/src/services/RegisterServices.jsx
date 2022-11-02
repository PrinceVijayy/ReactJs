import axios from "axios";
const registerBaseUrl = "http://localhost:3013/register";
class RegisterServices {
  getAllCredentials() {
    return axios.get(registerBaseUrl);
  }
  addUserCredentials(data) {
    return axios.post(registerBaseUrl, data);
  }
}
export default new RegisterServices();
