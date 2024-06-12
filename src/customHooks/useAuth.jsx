import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};

export default useAuth;
