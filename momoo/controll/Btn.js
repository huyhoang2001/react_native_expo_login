import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
export default function Btn(props) {
  const {
    title,
    onPress,
    color,
    marginTop,
    marginHorizontal,
    marginVertical,
    borderRadius,
    justifyContent,
    backgroundColor,
    fontSize,
    height,
    alignSelf,
    fontWeight,
    alignContent,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor,
          marginHorizontal: marginHorizontal,
          marginVertical: marginVertical,
          marginTop: marginTop,
          height: height,
        },
      ]}
    >
      <Text style={[styles.buttonText, { fontSize, color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 9,
    justifyContent: "center",
  },
  buttonText: {
    display: "flex",
    alignSelf: "center",
    fontWeight: "bold",
  },
});
