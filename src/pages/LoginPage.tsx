import { LoginFormRefs } from "@components/LoginForm/LoginFormRefs";
import { logIn } from "@services/users";
import { Header } from "@ui/atoms";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { userLogInWithPayload } from "../user/userSlice";

export type FormData = {
  email: string;
  password: string;
  language: string;
};

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data: FormData) => {
    console.log("formData: ", data);

    logIn(data).then((response) => {
      const data = response.data;
      // parse
      dispatch(userLogInWithPayload({ email: data.email }));
    });
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
