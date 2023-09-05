import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetail } from "../../../features/restaurants/screens/restaurant.detail-screen";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        name="RestaurantsList"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};
