import axios from "axios";
const instance = axios.create({
  baseURl: "...", //THE API (CLOUD FUNCTION) URL
});
export default instance;
