import React, { useContext } from "react";
import { Navigator } from "./app.navigator";
import { AuthenticationContext } from "../authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <Navigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
