import RegisterOrganism from "@/components/organisms/register";
import "./style.css";
// In your page or parent component

const RegisterPage = () => {
  return (
    <div className=" w-screen h-screen LoginBackground flex items-center justify-center">
      <div className=" w-xxl21 h-xxl17 bg-light flex rounded-xxlg">
        <RegisterOrganism />
      </div>
    </div>
  );
};

export default RegisterPage;
