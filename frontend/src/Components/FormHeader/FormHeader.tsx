import React from "react";
import { Link } from "react-router-dom";
import "./FormHeader.css";

type Props = {};

const FormHeader = (props: Props) => {
  return (
    <header className="form-header">
      <Link to="/">
        <h1 className="logo">Funko</h1>
      </Link>
    </header>
  );
};

export default FormHeader;
