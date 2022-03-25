import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { initializeApp, getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAjAdO3l74TfQqjyoi_7gZsMlpPmdH-Cxc",
  authDomain: "mealstogo-36806.firebaseapp.com",
  projectId: "mealstogo-36806",
  storageBucket: "mealstogo-36806.appspot.com",
  messagingSenderId: "594189399362",
  appId: "1:594189399362:web:92fbdc6dbdb1c8d0b284db",
};

// const app = getApp();
// if (!app.length) {
//   initializeApp(firebaseConfig);
// }

initializeApp(firebaseConfig);

export default function App() {
  const auth = getAuth();

  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "timtimothy1@hotmail.com", "test123")
        .then((user) => {
          console.log(user);
          setIsAuthenticated(true);
        })
        .catch((e) => console.log(e));
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style={"auto"} />
    </>
  );
}

console.log("test");
