import {
  ChangeEvent,
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    if (language.toLowerCase().includes("php")) {
      setLanguage("****");
    }
  }, [language]);

  const handleChange =
    (setter: Dispatch<SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement>) =>
      setter(event.target.value);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log({ email, password, language });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        E-mail: {email}, Password: {password}, Language: {language}
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" onChange={handleChange(setEmail)} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={handleChange(setPassword)}
        />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input
          id="language"
          type="text"
          onChange={handleChange(setLanguage)}
          value={language}
        />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};
