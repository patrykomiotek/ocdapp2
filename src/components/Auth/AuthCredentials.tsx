import { MouseEventHandler } from "react";
import { useAuth } from "./AuthContext";

export const AuthCredentials = () => {
  const auth = useAuth();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    auth.toggleIsLogged();
  };

  return (
    <div>
      <p>User {auth.isLogged ? "YES" : "NO"} logged in</p>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};
