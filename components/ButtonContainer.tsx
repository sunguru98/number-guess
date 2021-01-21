import React from "react";
import {
  ButtonProps,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import CustomButton from "./Button";

const { container } = StyleSheet.create<{ container: ViewStyle }>({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

type ButtonContainerProps = {
  primary: ButtonProps & { style?: ViewStyle };
  secondary: ButtonProps & { style?: ViewStyle };
};

const ButtonContainer: React.FC<ButtonContainerProps> = ({
  primary,
  secondary,
}) => {
  return (
    <View style={container}>
      <CustomButton {...secondary} style={primary.style} />
      <CustomButton {...primary} style={secondary.style} />
    </View>
  );
};

export default ButtonContainer;
