import React, { useContext, useState } from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card";
import styled from "styled-components/native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Text } from "../../../components/typography/text.component";
import { Container } from "../../../components/utility/safe-area.component";

const FavouritesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return !favourites.length ? (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>No favourites.</Text>
    </View>
  ) : (
    <Container>
      <FavouritesList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </Container>
  );
};
