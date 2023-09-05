import React from "react";
import {
  AccountContainer,
  Background,
  AuthButton,
  AccountCover,
  AnimationCover,
} from "../components/account.styles";
import { Platform } from "react-native";
import { Container } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Title } from "../components/account.styles";
import LottieView from "lottie-react-native";

const isAndroid = Platform.OS === "android";

export const AccountScreen = ({ navigation }) => {
  return isAndroid ? (
    <Background>
      <AccountCover />
      <AnimationCover>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationCover>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          LOGIN
        </AuthButton>
        <Spacer position="top" size="large" />
        <AuthButton
          mode="contained"
          onPress={() => navigation.navigate("Register")}
          icon="email"
        >
          REGISTER
        </AuthButton>
      </AccountContainer>
    </Background>
  ) : (
    <Container>
      <Background>
        <AccountCover />
        <AnimationCover>
          <LottieView
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={require("../../../../assets/watermelon.json")}
          />
        </AnimationCover>
        <Title>Meals To Go</Title>
        <AccountContainer>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            LOGIN
          </AuthButton>
          <Spacer position="top" size="large" />
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            REGISTER
          </AuthButton>
        </AccountContainer>
      </Background>
    </Container>
  );
};
