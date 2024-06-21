import { Link, NavLink } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import useCart from "../customHooks/useCart";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const [carts] = useCart();
  const handleLogout = () => {
    logOutUser()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const navOptions = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allMenus"}>Items</NavLink>
      </li>{" "}
      <li>
        <NavLink to={"/order/salad"}>Order</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-black fixed z-10 opacity-40  text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Petuk</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end relative">
          <FaSearch className=" absolute top-4 right-40 text-orange-700" />
          <input
            type="search"
            name="search"
            id=""
            className="w-24 p-1 me-5 rounded-full"
          />

          <Link to={`/cart`}>
            <FaShoppingCart className="text-4xl mr-4" />
          </Link>

          <p className=" absolute top-2 right-28 text-center font-extrabold  rounded-3xl text-pink-700">
            {carts.length}
          </p>

          {user ? (
            <button onClick={handleLogout}>
              <Link to={"/login"} className="btn">
                Log Out
              </Link>
            </button>
          ) : (
            <Link to={"/login"} className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
