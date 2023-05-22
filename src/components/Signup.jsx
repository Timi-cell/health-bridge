import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";

const icon = <AiOutlineUserAdd color="var(--grey)" size={45} />;

const Signup = () => {
  return <Card text="Sign Up" icon={icon} children={registerForm()} />;
};

const registerForm = () => {
  return (
    <div className="children">
      <form>
        <input type="text" placeholder="Name" name="name" required />
        <input type="email" placeholder="Email" name="email" required />

        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          required
        />

        <button type="submit" className="--btn --btn-primary">
          Sign Up
        </button>
      </form>
      <span>
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>&nbsp; Already have an account? &rarr;</p>
        <Link to="/login">
          <p>Login</p>
        </Link>
      </span>
    </div>
  );
};

export default Signup;
