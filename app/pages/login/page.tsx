import "./style.css";
import LoginOrganism from "@/components/organisms/login";
// In your page or parent component

const LoginPage = () => {
  return (
    <div className="w-screen h-screen LoginBackground flex items-center justify-center">
      <div className=" w-xxl21 h-xxl17 bg-light flex rounded-xxlg">
        <LoginOrganism />
      </div>
    </div>
  );
};

export default LoginPage;
