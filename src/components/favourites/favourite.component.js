import React, { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: -5px;
  z-index: 9;
  width: 64px;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
