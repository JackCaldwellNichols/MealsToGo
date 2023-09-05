import React, { createContext, useEffect, useState } from "react";
import { loginRequest, registerRequest } from "./authentication.service";
import * as firebase from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [wrongPassword, setWrongPassword] = useState(false);

  // const auth = firebase.getAuth();

  // firebase.onAuthStateChanged(auth, (usr) => {
  //   if (usr) {
  //     setUser(usr);
  //     setLoading(false);
  //   } else {
  //     setLoading(false);
  //   }
  // });

  const onLogin = (email, password) => {
    setLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.toString().split(":"));
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setWrongPassword(true);
      return;
    }
    setLoading(true);
    registerRequest(email, password, repeatedPassword)
      .then((u) => {
        setLoading(false);
        setUser(u);
      })
      .catch((e) => {
        setError(e.toString().split(":"));
        setLoading(false);
      });
  };

  const onLogout = () => {
    const auth = firebase.getAuth();
    firebase
      .signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        loading,
        error,
        onLogin,
        onRegister,
        wrongPassword,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
