import React from "react";
import "./Button.css";

type Props = {
  name: string;
};

const Button = ({ name }: Props) => {
  return (
    <div className="button-body">
      <button className="" type="submit">
        <span>{name}</span>
      </button>
    </div>
  );
};

export default Button;
