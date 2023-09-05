import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[3]};
  width: 95%;
  align-self: center;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  border-radius: 0;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const InfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SectionEnd = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
