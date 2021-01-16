import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

type HeaderProps = {
  title: string;
};

const { container, title: titleStyles } = StyleSheet.create<{
  container: ViewStyle;
  title: TextStyle;
}>({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: "#0097e6",
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#2f3640",
    fontSize: 24,
    fontWeight: "bold",
  },
});

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={container}>
      <Text style={titleStyles}>{title}</Text>
    </View>
  );
};

export default Header;
