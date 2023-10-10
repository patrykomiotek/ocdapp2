import { Helmet } from "react-helmet";

import { AuthCredentials } from ".";
import { AuthProvider } from "./AuthContext";

export const AuthInfo = () => {
  return (
    <div className="p-4">
      <Helmet>
        <title>Auth page</title>
      </Helmet>
      <AuthProvider>
        <h2>Auth info component</h2>
        <AuthCredentials />
      </AuthProvider>
    </div>
  );
};
