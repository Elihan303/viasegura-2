import ToggleColorMode from "../../components/ToggleTheme.tsx";
import { LoginHeader } from "./components/LoginHeader.tsx";
import { LoginForm } from "./components/LoginForm.tsx";
import CenterLayout from "../../layouts/CenterLayout.tsx";

export const Login = () => {
  return (
    <CenterLayout>
      <ToggleColorMode />
      <LoginHeader />
      <LoginForm />
    </CenterLayout>
  );
};
