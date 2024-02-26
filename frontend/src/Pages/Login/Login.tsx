import React, { FormEventHandler } from "react";
import LoginForm from "../../Helpers/Forms/Login/LoginFrom";
type Props = {};

export default function Login({}: Props) {
  const onHandleSubmit = (e: React.FormEvent) => {
    console.log(e);
  };
  return (
    <div className="login">
      <LoginForm />
      <form onSubmit={onHandleSubmit}></form>
    </div>
  );
}
