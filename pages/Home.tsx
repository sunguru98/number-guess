import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
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
  const [number, setNumber] = useState<string>("");
  const inputRef = useRef<TextInput | null>(null);

  const handleChange = (enteredNumber: string) => {
    setNumber(enteredNumber.replace(/[^0-9]/g, ""));
  };

  const handleReset = () => {
    setNumber("");
    inputRef.current?.focus();
  };

  const handlePress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={container}>
        <Text style={title}>Guess the right number !!</Text>
        <Card>
          <Text>Enter a number to get started</Text>
          <Input
            ref={inputRef}
            maxLength={2}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={handleChange}
            textContentType="telephoneNumber"
            keyboardType="number-pad"
            value={number}
          />
          <View style={buttonsContainer}>
            <View style={button}>
              <Button
                disabled={number === ""}
                title="RESET NUMBER"
                onPress={handleReset}
                color="red"
              />
            </View>
            <View style={button}>
              <Button title="START GAME" onPress={console.log} />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
