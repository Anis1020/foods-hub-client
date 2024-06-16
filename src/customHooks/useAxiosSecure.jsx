import axios from "axios";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  // const { logOutUser } = useAuth();
  // const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log(err);
        // if (err.response.status === 401 || err.response.status === 401) {
        //   logOutUser()
        //     .then(() => {
        //       navigate("/login");
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
        //   console.log("logout");
        // }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
