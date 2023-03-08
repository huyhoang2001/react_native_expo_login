import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

export default function LottieSplash() {
  return (
    <View style={styles.container}>
      <LottieView
        style={{ backgroundColor: "orange" }}
        source={require("../assets/silme.json")}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
