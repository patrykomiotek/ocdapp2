import { LoginFormRefs } from "@components/LoginForm/LoginFormRefs";
import { Header } from "@ui/atoms";
import { Helmet } from "react-helmet";

export type FormData = {
  email: string;
  password: string;
  language: string;
};

export const LoginPage = () => {
  const handleSubmit = (data: FormData) => {
    console.log("formData: ", data);
  };

  return (
    <>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <Header>Log in</Header>
      <LoginFormRefs onSubmit={handleSubmit} />
    </>
  );
};
