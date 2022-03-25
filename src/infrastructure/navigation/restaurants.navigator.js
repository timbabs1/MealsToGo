import React from "react";

import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerShown={false}
      headerMode={"none"}
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name={"RestaurantsStackScreen"}
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name={"RestaurantsDetail"}
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
