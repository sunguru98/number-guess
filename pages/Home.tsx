import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  BackHandler,
  Button,
  TextInput,
} from "react-native";
import Card from "../components/Card";

type HomePageProps = {};

const {
  container,
  title,
  buttonsContainer,
  button,
  textInput,
} = StyleSheet.create<{
  container: ViewStyle;
  title: TextStyle;
  textInput: TextStyle;
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

  textInput: {
    marginVertical: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#353b48",
    color: "#2f3640",
    fontWeight: "500",
    fontSize: 20,
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
        <TextInput
          style={textInput}
          onChange={handleChange}
          textContentType="telephoneNumber"
          keyboardType="numeric"
        />
        <View style={buttonsContainer}>
          <View style={button}>
            <Button
              title="RESET NUMBER"
              onPress={BackHandler.exitApp}
              color="red"
            />
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
