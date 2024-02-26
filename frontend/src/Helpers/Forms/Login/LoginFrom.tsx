import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

type Props = {};

type FormValues = {
  email: string;
  pass: string;
  rpass: string;
};

const LoginForm = (props: Props) => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    pass: "",
    rpass: "",
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
          <h2 className="login-form-header-title">Sukurti paskyrą</h2>
          <h3 className="login-form-header-exist">
            Jau turi paskyrą?{" "}
            <Link to="" className="login">
              Prisijunk
            </Link>
          </h3>
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
            <Input
              name={"PSlaptažodis"}
              value={formValues.rpass}
              placeholder={"Pakartok slaptažodį"}
              type="password"
              onHandle={(val) => onHandle(val, "rpass")}
            />
          </div>
          <div className="login-body-pass flex flex-col gap-y-2">
            <div className="login-body-pass-requirements">
              <span>Ne mažiau kaip 8 simboliai</span>
            </div>
            <div className="login-body-pass-requirements">
              <span>Bent vienas skaičius (0-9) arba specialusis simbolis</span>
            </div>
          </div>
          <Button name={"Sukurti paskyrą"} />
          <ul className="socials-links-list w-full">
            <li>
              <a
                className="socials-links-list-item"
                href="/lt/social-connect/google"
              >
                <span>Google</span>
              </a>
            </li>
            <li>
              <a
                className="socials-links-list-item"
                href="/lt/social-connect/facebook"
              >
                <span>Facebook</span>
              </a>
            </li>
          </ul>
          <div className="privacy">
            <p className="privacy-text">
              Sukurdamas paskyrą patvirtinu, kad sutinku su{" "}
              <Link className="mrsIMG" target="_blank" to="TermsAndConditions">
                Taisyklėmis ir Sąlygomis
              </Link>{" "}
              bei{" "}
              <Link className="mrsIMG" target="_blank" to="Privacy">
                Privatumo Pranešimu.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
