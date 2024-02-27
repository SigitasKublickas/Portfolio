import React from "react";
import RegisterForm from "../../Helpers/Forms/Register/RegisterForm";
import FormHeader from "../../Components/FormHeader/FormHeader";
import FormFooter from "../../Components/FormFooter/FormFooter";

type Props = {};

export default function Regitser({}: Props) {
  return (
    <div className="register">
      <FormHeader />
      <main className="flex p-4 form-main center flex-col gap-y-10">
        <h1 className="login-page-title">
          Sveiki! <br /> Gera jus matyti!
        </h1>
        <div className="w-full p-4 center">
          <RegisterForm />
        </div>
      </main>
      <FormFooter />
    </div>
  );
}
