import { MouseEventHandler } from "react";
import { useAuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useAuthContext();

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
