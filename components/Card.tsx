import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

const { card } = StyleSheet.create<{ card: ViewStyle }>({
  card: {
    width: "100%",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 20,
    backgroundColor: "#f5f6fa",
    shadowColor: "#353b48",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 10,
  },
});

type CardProps = {
  style?: ViewStyle;
};

const Card: React.FC<CardProps> = ({ children, style }) => {
  return <View style={{ ...card, ...style }}>{children}</View>;
};

export default Card;
