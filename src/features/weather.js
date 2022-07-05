import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_WEATHER_URL,
  params: { key: process.env.REACT_APP_WEATHER_KEY },
});
