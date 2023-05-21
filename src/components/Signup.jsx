import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";

const icon = <AiOutlineUserAdd color="var(--grey)" size={45} />;

const Signup = () => {
  return <Card text="Signup" icon={icon} children={registerForm()} />;
};

const registerForm = () => {
  return (
    <div className="children">
      <form>
        <input type="text" placeholder="Username" name="name" required />
        <input type="email" placeholder="Email" name="email" required />
        <div className="password">
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </div>
        <div className="password">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            required
          />
        </div>
        <button type="submit" className="--btn --btn-primary">
          Register
        </button>
      </form>
      <span>
        <Link to="/">
          <p className="redText">Home</p>
        </Link>
        <p>&nbsp; Already have an account? &rarr;</p>
        <Link to="/login">
          <p className="redText">Login</p>
        </Link>
      </span>
    </div>
  );
};

export default Signup;
