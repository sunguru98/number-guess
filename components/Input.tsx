import React, { forwardRef } from "react";
import { TextInput, StyleSheet, TextStyle, TextInputProps } from "react-native";

const { input } = StyleSheet.create<{ input: TextStyle }>({
  input: {
    marginVertical: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#353b48",
    color: "#2f3640",
    fontWeight: "500",
    fontSize: 20,
  },
});

type InputProps = TextInputProps & {
  style?: TextStyle;
};

const Input = forwardRef<TextInput, InputProps>(
  ({ style = {}, ...props }, ref) => {
    return <TextInput ref={ref} style={{ ...input, ...style }} {...props} />;
  }
);

export default Input;
