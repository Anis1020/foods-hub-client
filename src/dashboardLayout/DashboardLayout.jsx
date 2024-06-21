import {
  FaHistory,
  FaShoppingCart,
  FaUser,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaBook, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../customHooks/useAdmin";

const DashboardLayout = () => {
  const [admin] = useAdmin();
  return (
    <div className="grid grid-cols-12 lg:w-[95%] ">
      <ul className="col-span-3 space-y-3 bg-pink-200 min-h-screen px-4 py-8">
        <li className="list-none ">
          <NavLink to={"/"}>Home</NavLink>
        </li>{" "}
        <li className="list-none flex items-center gap-2">
          <FaUser></FaUser>
          <NavLink to={"/userHome"}>User Home</NavLink>
        </li>
        {/* <li className="list-none flex items-center gap-2">
          <FaHome></FaHome>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li> */}
        <li className="list-none flex items-center gap-2">
          <FaShoppingCart></FaShoppingCart>
          <NavLink to={"/cart"}>Cart </NavLink>
        </li>
        <li className="list-none flex items-center gap-2">
          <FaHistory></FaHistory>
          <NavLink to={"/payHistory"}>Payment History </NavLink>
        </li>
        <div className=" border  ">
          <hr />
        </div>
        {admin ? (
          <>
            <li className="list-none flex items-center gap-2">
              <FaUser></FaUser>
              <NavLink to={"/adminHome"}>Admin Home</NavLink>
            </li>
            <li className="list-none flex items-center gap-2">
              <FaUtensils></FaUtensils>
              <NavLink to={"/addAItem"}>Add A Items</NavLink>
            </li>
            <li className="list-none flex items-center gap-2">
              <FaList></FaList>
              <NavLink to={"/manageItem"}>Manage Items</NavLink>
            </li>
            <li className="list-none flex items-center gap-2">
              <FaBook></FaBook>
              <NavLink to={"/bookings"}>Manage Bookings</NavLink>
            </li>
            <li className="list-none flex items-center gap-2">
              <FaUsers></FaUsers>
              <NavLink to={"/users"}>All Users</NavLink>
            </li>
          </>
        ) : (
          <></>
        )}
      </ul>
      <div className="col-span-9 px-8 py-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
