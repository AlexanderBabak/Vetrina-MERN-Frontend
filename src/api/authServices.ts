import { AuthData } from "../types/userInterfaces";
import { axiosInstance } from "./axiosInstance";

export const loginUser = async (values: AuthData) => {
  const response = await axiosInstance.post("/api/users/login", {
    email: values.email,
    password: values.password,
  });
  return response;
};

export const registerUser = async (values: AuthData) => {
  const response = await axiosInstance.post("/api/users/register", {
    email: values.email,
    name: values.name,
    password: values.password,
  });
  return response;
};

export const forgotPassword = async (values: AuthData) => {
  const response = await axiosInstance.post("/api/users/forgot-password", {
    email: values.email,
  });
  return response;
};

export const verifyEmail = async (confirmCode: string) => {
  const response = await axiosInstance.get(`/api/users/verify/${confirmCode}`);
  return response;
};

export const resendVerifyEmail = async (email: string) => {
  const response = axiosInstance.post("/api/users/verify", {
    email,
  });
  return response;
};

export const setNewPassword = async (values: {
  email: string;
  newPassword: string;
}) => {
  const response = await axiosInstance.patch("/api/users/change-password", {
    email: values.email,
    newPassword: values.newPassword,
  });
  return response;
};
