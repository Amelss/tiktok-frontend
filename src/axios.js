import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-tiktok-clone-mern.herokuapp.com/",
});

export default instance;