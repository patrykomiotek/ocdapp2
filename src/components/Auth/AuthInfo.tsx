import { AuthCredentials } from ".";
import { AuthProvider } from "./AuthContext";

export const AuthInfo = () => {
  return (
    <div>
      <AuthProvider>
        <h2>Auth info component</h2>
        <AuthCredentials />
      </AuthProvider>
    </div>
  );
};
