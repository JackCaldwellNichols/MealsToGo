import React, { useContext, useState } from "react";
import {
  Background,
  AccountContainer,
  AccountCover,
  AuthButton,
  Input,
  Title,
  ErrorContainer,
} from "../components/account.styles";
import { Platform, Button } from "react-native";
import { Container } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../Infrastructure/Theme/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const isAndroid = Platform.OS === "android";

export const RegisterScreen = ({ navigation }) => {
  const { onRegister, error, wrongPassword, loading } = useContext(
    AuthenticationContext
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  return isAndroid ? (
    <Background>
      <AccountCover />
      <Title>Sign Up</Title>
      <AccountContainer>
        <Input
          label="Email"
          textContentType="emailAddress"
          onChangeText={(u) => setEmail(u)}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <ErrorContainer>
          {error && <Text variant="error">{error[2]}</Text>}
          {wrongPassword && <Text variant="error">Passwords don't match.</Text>}
        </ErrorContainer>

        <Input
          label="Password"
          onChangeText={(p) => setPassword(p)}
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
        />
        <Spacer position="top" size="large" />
        <Input
          label="Repeat Password"
          onChangeText={(r) => setPasswordRepeat(r)}
          value={passwordRepeat}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
        />
        <Spacer position="top" size="large" />
        {!loading ? (
          <AuthButton
            onPress={() => onRegister(email, password, passwordRepeat)}
            mode="contained"
            icon="email"
          >
            SIGN UP
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={MD2Colors.blue300} />
        )}
        <Spacer position="top" size="large" />
        <AuthButton
          title="Back"
          mode="contained"
          onPress={() => navigation.navigate("Account")}
        >
          BACK
        </AuthButton>
      </AccountContainer>
    </Background>
  ) : (
    <Container>
      <Background>
        <AccountCover />
        <Title>Sign Up</Title>
        <AccountContainer>
          <Input
            label="Email"
            textContentType="emailAddress"
            onChangeText={(u) => setEmail(u)}
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <ErrorContainer>
            {error && <Text variant="error">{error[2]}</Text>}
            {wrongPassword && (
              <Text variant="error">Passwords don't match.</Text>
            )}
          </ErrorContainer>
          <Input
            label="Password"
            onChangeText={(p) => setPassword(p)}
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
          />
          <Spacer position="top" size="large" />
          <Input
            label="Repeat Password"
            onChangeText={(r) => setPasswordRepeat(r)}
            value={passwordRepeat}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
          />
          <Spacer position="top" size="large" />
          {!loading ? (
            <AuthButton
              onPress={() => onRegister(email, password, passwordRepeat)}
              mode="contained"
              icon="email"
            >
              SIGN UP
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={MD2Colors.blue300} />
          )}
          <Spacer position="top" size="large" />
          <AuthButton
            title="Back"
            mode="contained"
            onPress={() => navigation.navigate("Account")}
          >
            BACK
          </AuthButton>
        </AccountContainer>
      </Background>
    </Container>
  );
};
