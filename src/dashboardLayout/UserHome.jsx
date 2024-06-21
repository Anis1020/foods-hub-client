import useAuth from "../customHooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>user home coming soon</h1>
      {user?.displayName ? user.displayName : "user coming"}
    </div>
  );
};

export default UserHome;
