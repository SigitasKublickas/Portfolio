import React, { useState } from "react";
import "./Input.css";
type Props = {
  name: string;
  value: string;
  type: string;
  placeholder: string;
  onHandle: (value: string) => void;
};

const Input = ({ name, value, type, placeholder, onHandle }: Props) => {
  return (
    <>
      <input
        className="input"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onHandle(e.target.value);
        }}
      />
    </>
  );
};

export default Input;
