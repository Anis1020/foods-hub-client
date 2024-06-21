import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ErrorPage from "../share/ErrorPage";
import Dashboard from "../dashboardLayout/Dashboard";
import DashboardLayout from "../dashboardLayout/DashboardLayout";
import AllMenus from "../pages/AllMenus";
import AddAItems from "../dashboardLayout/AddAItems";
import Order from "../pages/Order";
import CheckOut from "../pages/CheckOut";
import Cart from "../pages/Cart";
import AllUsers from "../dashboardLayout/AllUsers";
import ManageItem from "../dashboardLayout/ManageItem";
import UpdateItem from "../dashboardLayout/UpdateItem";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/allMenus",
        element: <AllMenus></AllMenus>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/payNow",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/cart/:_id",
        element: <Cart></Cart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/addAItem",
        element: <AddAItems></AddAItems>,
      },
      {
        path: "/manageItem",
        element: <ManageItem></ManageItem>,
      },
      {
        path: "/updateItem/:id",
        element: <UpdateItem></UpdateItem>,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/menus/${params.id}`),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
