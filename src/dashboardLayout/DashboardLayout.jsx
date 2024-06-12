import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 bg-slate-100 min-h-screen">
        <h2>left side bar</h2>
        <h1>
          <Link to={"/"}>Home</Link>
        </h1>
        <h1>
          <Link to={"/dashboard"}>Dashboard</Link>
        </h1>
        <h1>
          <Link to={"/addAItem"}>Add A Items</Link>
        </h1>
      </div>
      <div className="col-span-9">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
