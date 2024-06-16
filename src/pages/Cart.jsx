import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../customHooks/useAxiosSecure";

const Cart = () => {
  const id = useParams();
  // const [cart, setCart] = useState();
  const axiosSecure = useAxiosSecure();

  const url = "/menus";
  useEffect(() => {
    // fetch("/menu.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const specificData = data.find((item) => item._id === id._id);
    //     setCart(specificData);
    //   });
    axiosSecure.get(url).then((res) => {
      const menuData = res.data;
      const specificData = menuData.find((item) => item._id === id._id);
      // setCart(specificData);
      console.log(specificData);
    });
  }, [id, axiosSecure]);
  return <div className="pt-16 w-[70%] mx-auto"></div>;
};

export default Cart;
