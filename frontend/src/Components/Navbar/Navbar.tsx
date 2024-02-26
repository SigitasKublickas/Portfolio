import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="navbar w-full flex">
      <ul className="w-full h-full links">
        <li>
          <Link to="#" className="logo">
            Logo
          </Link>
        </li>
        <li>
          <Link to="#">Link 1</Link>
        </li>
        <li>
          <Link to="#">Link 2</Link>
        </li>
        <li>
          <Link to="#">Link 3</Link>
        </li>
        <li>
          <Link to="#">Link 4</Link>
        </li>
      </ul>
      <div className="login-register">
        <Link to="login">Prisijungti</Link>
        <Link to="register">Registruotis</Link>
      </div>
      <div role="button" className="import center">
        <button>Ikelti</button>
      </div>
    </nav>
  );
};

export default Navbar;
