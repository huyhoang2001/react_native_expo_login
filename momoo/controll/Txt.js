import React from "react";
import { Text, StyleSheet, style } from "react-native";

export default function Txt(props) {
  const { text, color, fontSize, alignSelf, fontWeight, alignContent } = props;

  return (
    <Text
      style={[
        styles.texxt,
        {
          color: color,
          fontSize: fontSize,
          alignSelf: alignSelf,
          fontWeight: fontWeight,
        },
      ]}
    >
      {text}
    </Text>
  );
}
const styles = StyleSheet.create({
  texxt: {
    color: "white",
    alignContent: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
});
