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
import { useAppContext } from "../App.context";
import ButtonContainer from "../components/ButtonContainer";

import Card from "../components/Card";
import Input from "../components/Input";

type HomePageProps = {};

const { container, title } = StyleSheet.create<{
  container: ViewStyle;
  title: TextStyle;
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
});

const Home: React.FC<HomePageProps> = () => {
  const [number, setNumber] = useState<string>("");
  const inputRef = useRef<TextInput | null>(null);
  const { state, dispatch } = useAppContext();

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

  const startGame = () => {
    dispatch({ type: "SET_NUMBER", payload: parseInt(number, 10) });
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
          <ButtonContainer
            secondary={{
              disabled: number === "",
              title: "RESET NUMBER",
              onPress: handleReset,
              color: "red",
            }}
            primary={{
              disabled: number === "" || number === "0",
              title: "START GAME",
              onPress: startGame,
            }}
          />
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
