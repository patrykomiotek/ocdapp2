import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface Context {
  isLogged: boolean;
  toggleIsLogged: () => void;
  logIn: () => void;
  logOut: () => void;
}

// const contextDefaultValues = {
//   isLogged: false,
//   toggleIsLogged: () => null,
// };

const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);

  const toggleIsLogged = () => setIsLogged((value) => !value);
  const logIn = () => setIsLogged(true);
  const logOut = () => setIsLogged(false);

  return { isLogged, toggleIsLogged, logIn, logOut };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  console.log("inside useAuthContext", context);
  if (!context) {
    throw new Error("Oh no! You need to place component inside AuthProvider");
  }
  return context;
};

export const AuthContext = createContext<Context | null>(null);
