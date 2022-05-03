import { User } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../services/auth/config";

type Props = {
  children?: React.ReactNode;
};

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContext = React.createContext<User | null>(null);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsub;
  }, []);

  const value: {} = {
    currentUser,
  };

  return (
    //@ts-ignore TODO:
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// export const useAuthState = () => {
//   const auth = useContext(AuthContext);
//   return { ...auth, isAuthenticated: auth?.email != null };
// };
