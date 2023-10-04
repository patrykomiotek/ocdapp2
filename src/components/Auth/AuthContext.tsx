import { createContext } from "react";

const contextDefaultValues = {
  isLogged: false,
};

export const AuthContext = createContext(contextDefaultValues);
