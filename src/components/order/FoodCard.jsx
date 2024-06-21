import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../customHooks/useAxiosSecure";
import useAuth from "../../customHooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../customHooks/useCart";
// import axios from "axios";

const FoodCard = ({ menuItem }) => {
  const { _id, image, price, name, recipe } = menuItem;
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddToCard = () => {
    if (user && user?.email) {
      // fetch data
      const cartItem = {
        foodId: _id,
        email: user.email,
        name,
        price,
        image,
      };
      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Item Added !",
              text: "Your item has been added.",
              icon: "success",
            });
            refetch();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // alert
      Swal.fire({
        title: "You are not login ?",
        text: "Please login first if you want to added to cart an item!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card h-full bg-base-100 shadow-xl">
        <figure className=" pt-5">
          <img src={image} alt="Shoes" className="rounded-xl" />
          <p className="absolute top-10 right-10 bg-slate-900 text-white">
            $ {price}
          </p>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>

          <p>{recipe}</p>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
            <Link to={``}>
              <button
                onClick={() => handleAddToCard(menuItem)}
                className="btn btn-primary"
              >
                Add to card
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
