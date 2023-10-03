import {
  ChangeEvent,
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

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
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" ref={emailFieldRef} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={passwordFieldRef} />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input
          id="language"
          type="text"
          ref={languageFieldRef}
          defaultValue="java"
        />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};
