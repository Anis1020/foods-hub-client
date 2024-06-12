import { Link } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import { useState } from "react";

const Registration = () => {
  const [showHide, setShowHide] = useState(true);
  const { createUser } = useAuth();
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { name, email, password };
    console.log(userInfo);
    createUser(email, password)
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
        <form onSubmit={handleRegistration} className="card-body">
          <div className="form-control">
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>{" "}
          <div className="form-control">
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <div>
          <button className="btn btn-accent w-full mx-8">Google Login</button>
          <h2 className="text-center">
            already have an account?{" "}
            <Link className="btn btn-link" to={"/login"}>
              Login
            </Link>{" "}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Registration;
