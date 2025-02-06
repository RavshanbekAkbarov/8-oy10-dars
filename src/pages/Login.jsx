import FromInput from "../components/FromInput";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen grid place-items-center w-full">
      <form className=" max-w-96 mx-auto w-full">
        <h2 className="text-5xl font-bold text-blue-400 text-center mb-5 ">
          Login
        </h2>
        <FromInput type="email" placeholder="Email" label="Email" />
        <FromInput type="password" placeholder="Password" label="Password" />
        <div className="mt-5">
          <button className="btn btn-primary btn-block"> Login</button>
        </div>
        <div className="text-center mt-1">
          <p>
            If you have accounter, <Link className="link link-primary" to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
