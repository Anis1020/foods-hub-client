import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cart = () => {
  const id = useParams();
  const [cart, setCart] = useState();
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specificData = data.find((item) => item._id === id._id);
        setCart(specificData);
      });
  }, [id]);
  return <div className="pt-16 w-[70%] mx-auto"></div>;
};

export default Cart;
