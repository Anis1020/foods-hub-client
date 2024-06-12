import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center transform translate-y-20">
      <h1 className="text-5xl mb-10">Page Not Found</h1>
      <Link to={"/"}>
        <button className="btn btn-primary">Back to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
