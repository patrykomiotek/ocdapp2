import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Context {
  isLogged: boolean;
  toggleIsLogged: Dispatch<SetStateAction<boolean>>;
}

const contextDefaultValues = {
  isLogged: false,
  toggleIsLogged: () => null,
};

export const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);

  const toggleIsLogged = () => setIsLogged((value) => !value);
  const logIn = () => setIsLogged(true);
  const logOut = () => setIsLogged(false);

  return { isLogged, toggleIsLogged, logIn, logOut };
};

export const AuthContext = createContext<Context>(contextDefaultValues);
