import { Link, useNavigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import { useState } from "react";

const Login = () => {
  const [showHide, setShowHide] = useState(true);

  const { loginUser, resetPassword, user } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleResetPassword = (email) => {
    resetPassword(email)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="md:w-[70%] mx-auto pt-16">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label ">
              <span className="label-text">Password</span>
            </label>
            <span
              onClick={() => setShowHide(!showHide)}
              className="text-end flex justify-end absolute right-4 top-12  w-32"
            >
              {showHide ? "Show" : "Hide"}
            </span>
            <input
              type={showHide ? "password" : "text"}
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />

            <label className="label ">
              <a
                onClick={() => handleResetPassword(user?.email)}
                href="#"
                className="label-text-alt py-3 link link-hover mt-5"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
        <div>
          <button className="btn btn-accent w-full mx-8">Google Login</button>
          <h2 className="text-center">
            already have an account?{" "}
            <Link className="btn btn-link" to={"/register"}>
              Register
            </Link>{" "}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Login;
