import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../customHooks/useAuth";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <h1>loading...</h1>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} replace to={"/login"}></Navigate>;
};

export default PrivetRoute;
