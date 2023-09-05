import React, { useContext, useState } from "react";
import { Search } from "../components/search.component";
import { FlatList, View, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import styled from "styled-components/native";
import { Container } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.js";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { FadeInView } from "../../../components/animations/fade.animation";
import { colors } from "../../../Infrastructure/Theme/Colors";

const Spinner = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { loading, error, restaurants } = useContext(RestaurantsContext);
  const { add, remove, favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Container>
      <Search
        isFavouritesToggled={isToggled}
        onFavouriteToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {loading ? (
        <Spinner>
          <ActivityIndicator
            animating={true}
            size="large"
            color={colors.brand.primary}
          />
        </Spinner>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </Container>
  );
};
