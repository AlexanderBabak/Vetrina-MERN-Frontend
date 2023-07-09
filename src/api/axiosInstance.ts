import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// need to run local server of deploy a backend part
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
