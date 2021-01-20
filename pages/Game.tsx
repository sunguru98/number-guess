import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { useAppContext } from "../App.context";

const { container } = StyleSheet.create<{ container: ViewStyle }>({
  container: {},
});

type GameProps = {};

const Game: React.FC<GameProps> = () => {
  const { state, dispatch } = useAppContext();

  const generateRandomNumber = useCallback(
    (min: number, max: number, exclude: number): number => {
      const randomNumber =
        Math.floor(Math.random() * (Math.ceil(max) - Math.floor(min))) +
        Math.floor(min);
      return randomNumber === exclude
        ? generateRandomNumber(min, max, exclude)
        : randomNumber;
    },
    []
  );

  useEffect(() => {
    dispatch({
      type: "SET_CURRENT_GUESS",
      payload: generateRandomNumber(1, 100, state.selectedNumber!),
    });
  }, []);

  return <View style={container}></View>;
};

export default Game;
