import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import { Spacer } from "../spacer/spacer.component";
import { CompactMapInfo } from "../restaurant/compact-restaurant-info";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled(Card)`
  padding: 10px;
  z-index: 999;
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 15px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper elevation={2}>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer position="left" size="medium" key={key}>
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", { restaurant })}
              >
                <CompactMapInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
