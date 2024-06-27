import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
  // const [menus, setMenus] = useState([]);
  // const axiosPublic = useAxiosPublic;
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    // fetch("https://digital-solution-foods-hub-server.onrender.com/menus")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setMenus(data);
    //   });
    // fetch by only axios
    // axiosSecure.get("/menus").then((res) => {
    //   setMenus(res.data);
    // });
  }, []);

  const {
    data: menus = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["menuItem"],
    queryFn: async () => {
      const res = await axiosSecure.get("/menus");
      return res.data;
    },
  });

  return [menus, loading, refetch];
};

export default useMenu;
