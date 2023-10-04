import { FormEventHandler, useEffect, useRef } from "react";
import { Input } from "../../ui/molecules/Input/Input";

export const LoginFormRefs = () => {
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
    console.log({
      email: emailFieldRef.current?.value,
      password: passwordFieldRef.current?.value,
      language: languageFieldRef.current?.value,
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
