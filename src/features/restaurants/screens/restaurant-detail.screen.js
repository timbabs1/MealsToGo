import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = React.useState(false);
  const [lunchExpanded, setLunchExpanded] = React.useState(false);
  const [dinnerExpanded, setDinnerExpanded] = React.useState(false);
  const [drinksExpanded, setDrinksExpanded] = React.useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title={"Breakfast"}
          left={(props) => <List.Icon {...props} icon={"bread-slice"} />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title={"Eggs Benedict"} />
          <List.Item title={"Classic Breakfast"} />
        </List.Accordion>
        <List.Accordion
          title={"Lunch"}
          left={(props) => <List.Icon {...props} icon={"bread-slice"} />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title={"Burger w/ Fried"} />
          <List.Item title={"Steak Sandwich"} />
          <List.Item title={"Mushroom Soup"} />
        </List.Accordion>
        <List.Accordion
          title={"Dinner"}
          left={(props) => <List.Icon {...props} icon={"bread-slice"} />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title={"Spaghetti Bolognese"} />
          <List.Item title={"Veal Cutlet with Chicken Mushroom"} />
          <List.Item title={"Steak Frites"} />
        </List.Accordion>
        <List.Accordion
          title={"Drinks"}
          left={(props) => <List.Icon {...props} icon={"bread-slice"} />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title={"Coffee"} />
          <List.Item title={"Tea"} />
          <List.Item title={"Modelo"} />
          <List.Item title={"Coke"} />
          <List.Item title={"Fanta"} />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
