import { FormEventHandler, useEffect, useRef } from "react";
import { Input } from "@ui/molecules";
import type { FormData } from "@pages/LoginPage";

type Props = {
  onSubmit: (data: FormData) => void;
};

export const LoginFormRefs = ({ onSubmit }: Props) => {
  // export const LoginFormRefs = () => {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // if (emailFieldRef.current) {
    emailFieldRef.current?.focus();
    // }
  }, []);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    // prop prom parent
    // onSubmit({
    //   email: emailFieldRef.current?.value,
    //   password: passwordFieldRef.current?.value,
    //   language: languageFieldRef.current?.value,
    // });

    // console.log({
    //   email: emailFieldRef.current?.value,
    //   password: passwordFieldRef.current?.value,
    //   language: languageFieldRef.current?.value,
    // });
    onSubmit({
      email: emailFieldRef.current?.value || "",
      password: passwordFieldRef.current?.value || "",
      language: languageFieldRef.current?.value || "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input label="E-mail" type="text" ref={emailFieldRef} />
      </div>
      <div>
        <Input label="Password" type="password" ref={passwordFieldRef} />
      </div>
      <div>
        <Input label="Language" type="text" ref={languageFieldRef} />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};
