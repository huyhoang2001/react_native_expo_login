import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const Btn_ico = ({ onPress, imageSource, imageStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={imageSource} style={styles.imagee} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imagee: {
    width: 35,
    height: 35,
  },
});

export default Btn_ico;
