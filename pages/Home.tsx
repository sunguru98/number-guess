import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  BackHandler,
  Button,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";

type HomePageProps = {};

const { container, title, buttonsContainer, button } = StyleSheet.create<{
  container: ViewStyle;
  title: TextStyle;
  buttonsContainer: ViewStyle;
  button: ViewStyle;
}>({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    flex: 1,
    marginHorizontal: 10,
  },
});

const Home: React.FC<HomePageProps> = () => {
  const handleChange = () => {};

  return (
    <View style={container}>
      <Text style={title}>Guess the right number !!</Text>
      <Card>
        <Text>Enter a number to get started</Text>
        <Input
          maxLength={2}
          autoCorrect={false}
          autoCapitalize="none"
          onChange={handleChange}
          textContentType="telephoneNumber"
          keyboardType="number-pad"
        />
        <View style={buttonsContainer}>
          <View style={button}>
            <Button title="RESET NUMBER" onPress={console.log} color="red" />
          </View>
          <View style={button}>
            <Button title="START GAME" onPress={console.log} />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default Home;
