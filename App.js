import React from "react";
import * as firebase from "firebase/auth";
import { initializeApp } from "firebase/app";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/Infrastructure/Theme/index";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/Infrastructure/Theme/navigation/index";
import { AuthenticationContextProvider } from "./src/Infrastructure/Theme/authentication/authentication.context";

const firebaseConfig = {
  apiKey: EXPO_FIREBASE_API,
  authDomain: EXPO_FIREBASE_AUTH_DOMAIN,
  projectId: EXPO_FIREBASE_PROJECT_ID,
  storageBucket: EXPO_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: EXPO_FIREBASE_MESSAGE_SENDER_ID,
  appId: EXPO_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = firebase.getAuth(app);

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
