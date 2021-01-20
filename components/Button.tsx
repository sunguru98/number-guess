import React from "react";
import { Button, ButtonProps, StyleSheet, View, ViewStyle } from "react-native";

const { button } = StyleSheet.create<{ button: ViewStyle }>({
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
});

type CustomButtonProps = {
  style?: ViewStyle;
} & ButtonProps;

const CustomButton: React.FC<CustomButtonProps> = ({
  style = {},
  ...props
}) => {
  return (
    <View style={{ ...button, ...style }}>
      <Button {...props} />
    </View>
  );
};

export default CustomButton;
