import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title="Guess me" />
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
