import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const BASE_URL = "http://localhost:3000"; // TODO: create from env

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// by default add authorization token from redux store if it exists
axiosInstance.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  }
  return config;
});
