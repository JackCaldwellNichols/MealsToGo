import React from "react";
import styled from "styled-components/native";
import { View, Image, Platform } from "react-native";
import { Text } from "../typography/text.component";
import { WebView } from "react-native-webview";

const Img = styled(Image)`
  height: 100px;
  width: 120px;
  border-radius: 10px;
`;

const Container = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactWebview = styled(WebView)`
  height: 100px;
  width: 120px;
  border-radius: 10px;
`;

const isAndroid = Platform.OS === "android";

export const CompactMapInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : Img;

  return (
    <Container>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
    </Container>
  );
};
