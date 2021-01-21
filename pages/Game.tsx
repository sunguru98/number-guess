import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { useAppContext } from "../App.context";

import ButtonContainer from "../components/ButtonContainer";

const { container, h1 } = StyleSheet.create<{
  container: ViewStyle;
  h1: TextStyle;
}>({
  container: { flex: 1, padding: 10, alignItems: "center" },
  h1: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
    marginVertical: 20,
  },
});

type GameProps = {};

const Game: React.FC<GameProps> = () => {
  const { state, dispatch } = useAppContext();

  const generateRandomNumber = useCallback(
    (min: number, max: number, exclude?: number): number => {
      const randomNumber =
        Math.floor(Math.random() * (Math.ceil(max) - Math.floor(min))) +
        Math.floor(min);
      return randomNumber === exclude
        ? generateRandomNumber(min, max, exclude)
        : randomNumber;
    },
    []
  );

  const handleGuessSelection = useCallback(
    (selection: string): void => {
      console.log(selection);
    },
    [state.selectedNumber]
  );

  useEffect(() => {
    dispatch({
      type: "SET_CURRENT_GUESS",
      payload: generateRandomNumber(1, 100, state.selectedNumber!),
    });
  }, []);

  return (
    <View style={container}>
      <Text style={h1}>Computer's Guess</Text>
      <ButtonContainer
        primary={{
          onPress: handleGuessSelection.bind(this, "higher"),
          title: "HIGHER",
        }}
        secondary={{
          onPress: handleGuessSelection.bind(this, "lower"),
          title: "LOWER",
        }}
      />
    </View>
  );
};

export default Game;
