import React, { useContext } from "react";
import { AuthenticationContext } from "../../../Infrastructure/Theme/authentication/authentication.context";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TouchableOpacity } from "react-native";
import { View, ImageBackground } from "react-native";
import { colors } from "../../../Infrastructure/Theme/Colors";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
`;

const AvatarContainer = styled(View)`
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

const SettingsView = styled.View`
  background-color: white;
  height: 100%;
`;

export const SettingsBackground = styled(ImageBackground).attrs({
  source: {
    uri: "https://images.pexels.com/photos/4725742/pexels-photo-4725742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SettingsCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const SettingsScreen = ({ navigation }) => {
  const { user, onLogout } = useContext(AuthenticationContext);
  return (
    <SettingsView>
      <SettingsBackground>
        <SettingsCover>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            <AvatarContainer>
              <Avatar.Icon
                size={180}
                icon="human"
                backgroundColor={colors.brand.primary}
              />
              <Spacer position="top" size="large">
                <Text variant="label" style={{ color: "black" }}>
                  {user.user.email}
                </Text>
              </Spacer>
            </AvatarContainer>
          </TouchableOpacity>
          <List.Section>
            <SettingsItem
              title="Favourites"
              description="View your favourites"
              left={(props) => (
                <List.Icon {...props} color={colors.ui.error} icon="heart" />
              )}
              onPress={() => navigation.navigate("Favourites")}
            />
            <Spacer />
            <SettingsItem
              title="Logout"
              left={(props) => (
                <List.Icon {...props} color={colors.ui.secondary} icon="door" />
              )}
              onPress={onLogout}
            />
          </List.Section>
        </SettingsCover>
      </SettingsBackground>
    </SettingsView>
  );
};
