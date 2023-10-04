import { Dispatch, SetStateAction, createContext } from "react";

interface Context {
  isLogged: boolean;
  toggleIsLogged: Dispatch<SetStateAction<boolean>>;
}

const contextDefaultValues = {
  isLogged: false,
  toggleIsLogged: () => null,
};

export const AuthContext = createContext<Context>(contextDefaultValues);
