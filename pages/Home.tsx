import React from "react";
import { View, StyleSheet, Text, ViewStyle } from "react-native";

type HomePageProps = {};

const { container } = StyleSheet.create<{ container: ViewStyle }>({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

const Home: React.FC<HomePageProps> = () => {
  return (
    <View style={container}>
      <Text>Enter a number to get started !!</Text>
    </View>
  );
};

export default Home;
