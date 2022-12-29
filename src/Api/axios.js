import axios from "axios";


const axios_mern = axios.create({
  baseURL: process.env.REACT_APP_MERN_CRUD,
});



export { axios_mern };