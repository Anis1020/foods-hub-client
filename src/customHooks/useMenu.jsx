import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
  const [menus, setMenus] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // fetch("http://localhost:5000/menus")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setMenus(data);
    //   });
    axiosSecure.get("/menus").then((res) => {
      setMenus(res.data);
    });
  }, [axiosSecure]);

  return [menus];
};

export default useMenu;
