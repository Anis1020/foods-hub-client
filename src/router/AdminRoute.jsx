import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import useAdmin from "../customHooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <h2>Loading ....</h2>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default AdminRoute;
