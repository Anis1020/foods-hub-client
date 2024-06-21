import useAuth from "../customHooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>Admin Home coming soon </h1>
      {user?.displayName ? user.displayName : "Admin Coming"}
    </div>
  );
};

export default AdminHome;
