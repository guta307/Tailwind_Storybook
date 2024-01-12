"use client";

import "./style.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Input from "@/components/molecules/input/input.client";
import Checkbox from "@/components/molecules/checkbox/checkbox";
import Link from "next/link";
import Button from "@/components/molecules/button/Button";

//image imports
import LoginButtonIcon from "../../../assets/pages/login/LoginButtonIcon.svg";
import MouseICon from "../../../assets/pages/login/mouseIcon.svg";
import AlfabitLogo from "../../../assets/components/logos/AlfabitLogo.svg";
import Stepper from "@/components/molecules/Stepper/Stepper";
import Dropdown from "@/components/molecules/dropdown/Dropdown";
import SwitchButton from "@/components/molecules/Switch/Switch";
import TextBlock from "@/components/molecules/TextBlock/TextBlock";
import SuccessImg from "../../../assets/pages/register/SuccessImg.svg";
import HomeIcon from "../../../assets/pages/register/HomeIcon.svg";
const RegisterOrganism = () => {
  type StepType = 1 | 2 | 3;

  const [Step, setStep] = useState<StepType>(3);
  const [Permission, setPermission] = useState(false);

  const goToNextStep = () => {
    setStep((prevStep) =>
      prevStep < 3 ? ((prevStep + 1) as StepType) : prevStep
    );
  };
  const handleToggle = (newState: boolean) => {
    setPermission(newState);
  };

  useEffect(() => {
    setStep(1);
  }, []);
  return (
    <>
      <div className="w-xxl14 h-xxl17 AlfabitArea_register rounded-xxlg flex items-center justify-center">
        <div
          className="relative w-xxl5 h-xxl10 rounded-2xl  border-light border-2 
            flex justify-center items-center flex-col gap-6"
        >
          <div className=" w-full h-full bg-light opacity-25 absolute -z-10" />
          <Image src={AlfabitLogo} alt="Logo da alfabit" />

          <p className="font-normal text-lg text-center text-light">
            Boas-vindas ao universo de <br />
            softwares sob medida para <br />
            a gestão de negócios de <br />
            tecnologia!
          </p>
        </div>
      </div>
      <div className=" flex flex-grow justify-center items-center flex-col gap-6 h">
        <Stepper chapter={Step} />

        <form className="flex flex-col w-xxl9 gap-5 ">
          {Step == 1 && (
            <>
              <header>
                <h1 className=" font-extrabold text-xxl leading-8">
                  Crie sua conta
                </h1>
              </header>

              <div className="flex flex-col gap-xs ">
                <label className=" flex flex-col gap-1 font-bold text-md text-gray-primary">
                  Razão Social
                  <Input
                    placeholder="Insira seu nome e sobrenome"
                    className=" w-xxl9"
                  />
                  <p className=" font-normal text-xs text-gray-placeholder text-right">
                    Exemplo: Tech Company SA
                  </p>
                </label>
                <label className=" flex flex-col gap-1 font-bold text-md text-gray-primary">
                  Email
                  <Input className=" w-xxl9" />
                  <p className=" font-normal text-xs text-gray-placeholder text-right">
                    Exemplo: adm@techcompany.com
                  </p>
                </label>

                <label className=" flex flex-col gap-1 font-bold text-md text-gray-primary">
                  Senha
                  <Input icon={true} className=" w-xxl9" />
                </label>
              </div>

              <Button
                type="button"
                onClick={() => {
                  goToNextStep();
                }}
                className="text-lg flex gap-1 align-middle"
              >
                Próxima{" "}
                <Image
                  className="inline-block"
                  src={LoginButtonIcon}
                  alt="Login button icon"
                />
              </Button>

              <div className="flex flex-col gap-1">
                <p className=" font-normal text-md text-gray-placeholder w-xxl9">
                  Já tem conta?
                </p>

                <Link
                  className=" font-bold text-sm text-primary flex gap-2"
                  href={"/pages/login"}
                >
                  Faça seu login!{" "}
                  <Image src={MouseICon} alt="Ícone de criar conta" />
                </Link>
              </div>
            </>
          )}

          {Step == 2 && (
            <>
              <div className="flex flex-col gap-xs ">
                <label className="relative flex flex-col gap-1 font-bold text-md text-gray-primary">
                  Qual Sua Área de atuação da instituição?
                  <Dropdown className=" w-xxl9" values={["teste", "teste"]}>
                    Selecione a opção que mais se aproxima{" "}
                  </Dropdown>
                </label>
                <label className=" flex flex-col gap-1 font-bold text-md text-gray-primary">
                  Website
                  <Input
                    placeholder="Cole a URL do Website da empresa"
                    className=" w-xxl9"
                  />
                  <p className=" font-normal text-xs text-gray-placeholder text-right">
                    Exemplo: adm@techcompany.com
                  </p>
                </label>

                <Button
                  type="button"
                  className="text-lg w-16xl"
                  onClick={() => {}}
                  variant="secondary"
                >
                  Adicionar
                </Button>

                <label className=" flex flex-col gap-1 font-bold text-md text-gray-primary">
                  Deseja receber contato para consultoria
                  <div className="flex gap-3 items-center">
                    <SwitchButton active={Permission} onToggle={handleToggle} />

                    <p className=" font-normal text-md text-black">
                      {Permission ? "Sim" : "Não"}
                    </p>
                  </div>
                </label>
                <div className="flex gap-3 items-center">
                  <Checkbox />{" "}
                  <p className=" font-normal text-md text-black">
                    Aceito os termos e condições deste contrato.
                  </p>
                </div>
              </div>

              <Button
                type="button"
                onClick={() => {
                  goToNextStep();
                }}
                className="text-lg flex gap-1 align-middle"
              >
                Crie minha conta{" "}
                <Image
                  className="inline-block"
                  src={LoginButtonIcon}
                  alt="Login button icon"
                />
              </Button>
            </>
          )}

          {Step == 3 && (
            <>
              <div className="flex flex-col gap-6">
                <div className=" h-xxl10 w-xxl9 bg-quaternary rounded-lg py-6 flex flex-col gap-3  items-center">
                  <TextBlock
                    Title={"Conta criada com sucesso!"}
                    headerClassName=" text-xl"
                    contentClassName="text-sm"
                  >
                    Agora é só voltar para a plataforma e <br /> impulsionar seu
                    negócio com tecnologia!
                  </TextBlock>
                  <Image src={SuccessImg} alt="Sucess image" />
                </div>

                <Link
                  className=" font-bold text-sm text-primary flex gap-2"
                  href={"/pages/login"}
                >
                  <Image src={HomeIcon} alt="Ícone da home" /> Voltar para home
                </Link>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default RegisterOrganism;
