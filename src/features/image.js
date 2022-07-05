import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_IMAGE_URL,
  params: { client_id: process.env.REACT_APP_IMAGE_KEY },
});
