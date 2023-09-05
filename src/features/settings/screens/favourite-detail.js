import React, { useState } from "react";
import { Container } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card";
import { AccordianMenu } from "../../restaurants/components/restaurant-menu";

export const FavouriteDetail = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <Container>
      <RestaurantInfoCard restaurant={restaurant} />
      <AccordianMenu />
    </Container>
  );
};
