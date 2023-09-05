import React from "react";
import { Container } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { AccordianMenu } from "../components/restaurant-menu";

export const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <Container>
      <RestaurantInfoCard restaurant={restaurant} />
      <AccordianMenu />
    </Container>
  );
};
