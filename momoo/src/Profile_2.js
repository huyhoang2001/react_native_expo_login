import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "react-native";
import Txt from "../controll/Txt";
import Btn_ico from "../controll/Btn_ico";
const Profile_2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <Btn_ico imageSource={require("../ico/veterinarian.png")} />
      </View>
      <View marginTop={20}>
        <Txt text="Bùi Đức Tú" color="black" fontSize={15} fontWeight="bold" />
      </View>
      <View marginTop={10}>
        <Txt text="162000618" color="red" fontSize={15} fontWeight="bold" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: "50%",
    alignItems: "center",
  },
});
export default Profile_2;
