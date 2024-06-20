import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = useAuth();
  useEffect(() => {
    // Add a request interceptor
    axiosSecure.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        const token = localStorage.getItem("token");
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const status = err.response.status;
        if (status === 401 || status === 403) {
          logOutUser()
            .then(() => {
              navigate("/login");
            })
            .catch((err) => {
              console.log(err);
            });
          console.log("logout");
        }
      }
    );
  }, [logOutUser, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
