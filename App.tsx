import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import Home from "./pages/Home";
import AppContextProvider, { useAppContext } from "./App.context";
import Game from "./pages/Game";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const {
    state: { selectedNumber },
  } = useAppContext();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title="Guess me" />
      {!selectedNumber ? <Home /> : <Game />}
    </View>
  );
};

export default AppContextProvider<AppProps>(App);
