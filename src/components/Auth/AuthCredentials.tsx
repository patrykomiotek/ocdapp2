import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useContext(AuthContext);

  // const isLogged = false;
  return (
    <div>
      <p>User {context.isLogged ? "YES" : "NO"} logged in</p>
    </div>
  );
};
