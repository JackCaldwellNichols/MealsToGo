import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { AccountScreen } from "../../../features/account/screens/account.screen";
import { LoginScreen } from "../../../features/account/screens/login.screen";
import { RegisterScreen } from "../../../features/account/screens/register.screen";

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
