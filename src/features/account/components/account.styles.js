import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../Infrastructure/Theme/Colors";
import { Button, TextInput } from "react-native-paper";

export const Background = styled(ImageBackground).attrs({
  source: {
    uri: "https://cdn.pixabay.com/photo/2017/02/15/10/38/background-2068211_1280.jpg",
  },
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.9);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.brand.primary};
  border-radius: 5px;
  padding: ${(props) => props.theme.space[0]};
  width: 200px;
`;

export const Input = styled(TextInput)`
  width: 200px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const Title = styled(Text)`
  font-size: 30px;
  color: white;
`;

export const AnimationCover = styled(View)`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
