import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../../features/settings/screens/camera.screen";
const SettingsStack = createStackNavigator();

const createScreenOptions = ({ route }) => {
  return {
    headerShown: "screen",
  };
};

export const SettingsNavigtor = () => {
  return (
    <SettingsStack.Navigator screenOptions={createScreenOptions}>
      <SettingsStack.Screen name="Profile" component={SettingsScreen} />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
