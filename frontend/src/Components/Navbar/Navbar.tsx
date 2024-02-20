import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="navbar">
      <Link to="#" className="logo">
        Logo
      </Link>
      <Link to="#">Link 1</Link>
      <Link to="#">Link 2</Link>
      <Link to="#">Link 3</Link>
      <Link to="#">Link 4</Link>
      <div className="login-register">
        <Link to="#">Login</Link>
        <Link to="#">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
