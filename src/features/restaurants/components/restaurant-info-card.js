import React from "react";
import { Text } from "../../../components/typography/text.component";
import { SvgXml } from "react-native-svg";
import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  InfoWrapper,
  SectionEnd,
  Rating,
} from "./restaurant-info-card.styles";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Favourite } from "../../../components/favourites/favourite.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Jack's",
    icon,
    photos = [],
    vicinity,
    isOpenNow,
    rating,
    isClosedTemporarily,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={2}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <InfoWrapper>
          <Rating>
            {ratingArray.map((ele, index) => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={`star-${placeId}-${index}`}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="medium">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="medium">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </InfoWrapper>
        <Address>{vicinity}</Address>
      </Info>
    </RestaurantCard>
  );
};
