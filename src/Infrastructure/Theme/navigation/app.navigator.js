import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MapScreen } from "../../../features/map/screens/map.screen";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { FavouritesContextProvider } from "../../../services/favourites/favourites.context";
import { RestaurantsContextProvider } from "../../../services/restaurant/restaurants.context";
import { LocationContextProvider } from "../../../services/location/location.context";
import { SettingsNavigtor } from "./settings.navigator";
import { colors } from "../../Theme/Colors";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: colors.brand.primary,
    tabBarInactiveTintColor: colors.brand.muted,
    headerShown: false,
  };
};

export const Navigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen
              name="Restaurants"
              component={RestaurantsNavigator}
              screenOptions={(headerShown = false)}
            />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigtor} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
