import { MouseEventHandler, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useContext(AuthContext);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    context.toggleIsLogged((value) => !value);
  };

  return (
    <div>
      <p>User {context.isLogged ? "YES" : "NO"} logged in</p>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};
