import { FaHome, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 lg:w-[95%] ">
      <div className="col-span-3 space-y-3 bg-pink-200 min-h-screen px-4 py-8">
        <li className="list-none ">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="list-none flex items-center gap-2">
          <FaHome></FaHome>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
        <li className="list-none flex items-center gap-2">
          <FaShoppingCart></FaShoppingCart>
          <NavLink to={"/cart"}>Cart </NavLink>
        </li>
        <li className="list-none flex items-center gap-2">
          <FaUtensils></FaUtensils>
          <NavLink to={"/addAItem"}>Add A Items</NavLink>
        </li>{" "}
        <li className="list-none flex items-center gap-2">
          <FaUsers></FaUsers>
          <NavLink to={"/users"}>All Users</NavLink>
        </li>
      </div>
      <div className="col-span-9 px-8 py-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
