import "./style.css";
import React from "react";
import Image from "next/image";
import Input from "@/components/molecules/input/input.client";
import Checkbox from "@/components/molecules/checkbox/checkbox";
import Link from "next/link";
import Button from "@/components/molecules/button/Button";

//image imports
import LoginButtonIcon from "../../../assets/pages/login/LoginButtonIcon.svg";
import GoogleIcon from "../../../assets/components/logos/GoogleIcon.svg";
import CreateAccountIcon from "../../../assets/pages/login/createAccountIcon.svg";
import AlfabitLogo from "../../../assets/components/logos/AlfabitLogo.svg";

const LoginOrganism = () => {
  return (
    <>
      <div className="w-xxl14 h-xxl17 AlfabitArea_login  flex items-center justify-center">
        <div
          className="relative w-xxl5 h-xxl10 rounded-2xl  border-light border-2 
            flex justify-center items-center flex-col gap-6"
        >
          <div className=" w-full h-full bg-light opacity-25 absolute -z-10" />
          <Image src={AlfabitLogo} alt="Logo da alfabit" />

          <p className="font-normal text-lg text-center text-light">
            Boas vindas de volta! <br />
            Em que vocẽ vai inovar hoje?
          </p>
        </div>
      </div>
      <div className=" flex flex-grow justify-center items-center flex-col gap-6">
        <form className=" flex flex-col w-xxl9 gap-5 ">
          <header>
            <h1 className=" font-extrabold text-xxl leading-8">Login</h1>
          </header>

          <div className="flex flex-col gap-xs ">
            <Input label="Email ou usuário" className=" w-xxl9" />
            <Input label="Senha" className=" w-xxl9" icon={true} />
          </div>
          <div className=" w-xxl9 px-3 flex justify-between">
            <label className="flex text-sm font-normal gap-3">
              <Checkbox /> Lembrar de mim
            </label>

            <Link
              className=" font-bold text-sm text-primary"
              href={"/pages/login"}
            >
              Esqueci a senha
            </Link>
          </div>

          <Button className="text-lg flex gap-1 align-middle">
            Login{" "}
            <Image
              className="inline-block"
              src={LoginButtonIcon}
              alt="Login button icon"
            />
          </Button>
          <div className="flex flex-col gap-3 items-center">
            <div className="flex gap-3 items-center">
              <span
                style={{ width: "91px", height: 0, borderWidth: "1px" }}
                className=" inline-block border-black"
              />
              <p className=" font-normal text-md whitespace-nowrap">
                ou entre com seu email
              </p>
              <span
                style={{ width: "91px", height: 0, borderWidth: "1px" }}
                className="inline-block border-black"
              />
            </div>

            <Image src={GoogleIcon} alt="acesse pelo google" />
          </div>
        </form>

        <div className="flex flex-col gap-1">
          <p className=" font-normal text-md text-gray-placeholder w-xxl9">
            Ainda não tem cadastro?
          </p>

          <Link
            className=" font-bold text-sm text-primary flex gap-2"
            href={"/pages/register"}
          >
            Crie seu cadastro!{" "}
            <Image src={CreateAccountIcon} alt="Ícone de criar conta" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginOrganism;
