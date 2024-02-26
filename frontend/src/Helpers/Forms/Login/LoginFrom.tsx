import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

type Props = {};

type FormValues = {
  email: string;
  pass: string;
};

const LoginForm = (props: Props) => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    pass: "",
  });

  const onHandle = (value: string, name: string) => {
    setFormValues({ ...formValues, [`${name}`]: value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const formData: { [key: string]: string } = {};

    form.querySelectorAll("input").forEach((input: HTMLInputElement) => {
      formData[input.name] = input.value;
    });
    //siuciami duomenys į back-end
    console.log(formData);
  };
  return (
    <div className="login-form">
      <div className="p-4">
        <div className="login-form-header">
          <h2 className="login-form-header-title">Prisijungti</h2>
          <p className="login-form-header-exist">
            Naujas vartotojas?{" "}
            <Link to="" className="login">
              Susikurk paskyrą
            </Link>
          </p>
        </div>

        <form className="login-body flex flex-col gap-y-2" onSubmit={onSubmit}>
          <div className="login-body-inputs flex flex-col gap-y-2">
            <Input
              name={"El.Paštas"}
              value={formValues.email}
              placeholder={"El.Paštas"}
              type="string"
              onHandle={(val) => onHandle(val, "email")}
            />
            <Input
              name={"Slaptažodis"}
              value={formValues.pass}
              type="password"
              placeholder={"Slaptažodis"}
              onHandle={(val) => onHandle(val, "pass")}
            />
          </div>
          <Button name={"Prisijungti"} />
          <div className="forget-pass center">
            <Link className="" to="forget">
              Pamiršote slaptažodį?
            </Link>
          </div>
          <ul className="socials-links-list w-full flex flex-col">
            <li>
              <Link
                className="socials-links-list-item"
                to="/lt/social-connect/google"
              >
                <span>Google</span>
              </Link>
            </li>
            <li>
              <Link
                className="socials-links-list-item"
                to="/lt/social-connect/facebook"
              >
                <span>Facebook</span>
              </Link>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
