import axios from "axios";
export const signIn = (formData) =>
  axios.post("http://127.0.0.1:8000/api/login/contractor", formData, {
    withCredentials: true,
  });

export const signup = (formData) =>
  axios.post("http://127.0.0.1:8000/api/register/contractor", formData, {
    withCredentials: true,
  });
