import React, { useState } from "react";
import { List, Divider } from "react-native-paper";
import { ScrollView } from "react-native";
import { Container } from "../../../components/utility/safe-area.component";

export const AccordianMenu = () => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);
  return (
    <Container>
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          onPress={handlePress}
          expanded={expanded}
        >
          <List.Item title="Eggs Benedict" />
          <Divider />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          onPress={handlePress}
          expanded={expanded}
        >
          <Divider />
          <List.Item title="Cheeseburger & Fries" />
          <Divider />
          <List.Item title="Mushroom Soup" />
          <Divider />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          onPress={handlePress}
          expanded={expanded}
        >
          <List.Item title="Spaghetti Carbonara" />
          <Divider />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          onPress={handlePress}
          expanded={expanded}
        >
          <List.Item title="Coke" />
          <Divider />
          <List.Item title="Beer" />
          <Divider />
          <List.Item title="Tea" />
          <Divider />
          <List.Item title="Coffee" />
        </List.Accordion>
      </ScrollView>
    </Container>
  );
};
