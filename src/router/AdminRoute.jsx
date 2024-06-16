import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../customHooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <h2>Loading ....</h2>;
  }
  if (user && user.admin) {
    return children;
  }
  return <Navigate to={"/"} state={{ from: location }}></Navigate>;
};

export default AdminRoute;
