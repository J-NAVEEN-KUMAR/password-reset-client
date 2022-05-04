import axios from "axios";

export const register = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/register`, user);

export const login = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/login`, user);

export const forgotPassword = async (email) =>
  await axios.put(`${process.env.REACT_APP_API}/forgot-password`, email);

export const resetPassword = async (user) =>
  await axios.put(`${process.env.REACT_APP_API}/reset-password`, user);
