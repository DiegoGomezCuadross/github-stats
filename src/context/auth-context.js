import { createContext, useContext, useEffect, useState } from "react";

import { createUser, getUser, updateUser } from "../services/user-service";
import * as auth from "../services/auth-service";
import { tokenKey } from "../config";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // getUser().then(user => setUser(user)).catch(error => console.log(error))
    getUser()
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  function login(credentials) {
    console.log("Login");
    auth.login(credentials).then(setUser).catch(console.log);
  }

  function signup(userData) {
    createUser(userData).then(setUser).catch(console.log);
  }

  function updateProfile(userData) {
    updateUser(userData).then(setUser).catch(console.log);
  }

  function logout() {
    auth.logout().then(() => {
      sessionStorage.removeItem(tokenKey);
      setUser(null);
    });
  }

  if (loading) return <p>Loading...</p>;

  const value = {
    user,
    login,
    signup,
    logout,
    updateProfile,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
