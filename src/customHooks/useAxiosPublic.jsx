import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://digital-solution-foods-hub-server.onrender.com",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
