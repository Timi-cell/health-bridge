import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";

const icon = <BiLogIn color="var(--grey)" size={45} />;

const Login = () => {
  return <Card text="Login" icon={icon} children={loginForm()} />;
};

const loginForm = () => {
  return (
    <div>
      <form>
        <input type="email" placeholder="Email" required name="email" />
        <div className="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        <p id="forgot">Forgot Password?</p>

        <button type="submit" className="--btn --btn-primary">
          Login
        </button>
      </form>
      <span>
        <Link to="/">
          <p className="redText">Home</p>
        </Link>
        <p>&nbsp;Don't have an account? &rarr;</p>
        <Link to="/signup">
          <p className="redText">Signup</p>
        </Link>
      </span>
    </div>
  );
};

export default Login;
