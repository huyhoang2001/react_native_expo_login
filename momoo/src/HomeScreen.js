import React, { useRef } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { StatusBar } from "react-native";
import Txt from "../controll/Txt";
import Btn from "../controll/Btn";
import Btn_ico from "../controll/Btn_ico";
import Toast from "react-native-easy-toast";
const HomeScreen = ({ navigation }) => {
  const toastRef = useRef();
  const thongboa = () => {
    toastRef.current.show("Đăng nhập thành công", 2000);
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground
        source={require("../assets/058f5c20fbfc6c63e1f459123d5d0fee.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ marginTop: 100 }}>
          <Txt
            marginTop={10}
            text="Momoo"
            color="#ff8c00"
            fontSize={50}
            alignSelf="center"
            fontWeight="bold"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 350,
            marginBottom: 30,
            marginHorizontal: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "black",
              margin: 10,
            }}
          />
          <View>
            <View>
              <Txt text="Hoặc" color="black" fontSize={15} fontWeight="bold" />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "black",
              margin: 10,
            }}
          />
        </View>
        <Btn
          title="TẠO TÀI KHOẢN"
          onPress={() => navigation.navigate("Signup")}
          color="white"
          marginHorizontal={20}
          backgroundColor="purple"
          height={50}
          fontSize={16}
        />
        <View style={styles.view2} marginTop={30} marginHorizontal={90}>
          <Btn_ico
            onPress={thongboa}
            imageSource={require("../ico/facebook.png")}
          />
          <Btn_ico
            onPress={thongboa}
            imageSource={require("../ico/google.png")}
          />
          <Btn_ico
            onPress={thongboa}
            imageSource={require("../ico/twitter.png")}
          />
        </View>
        <View style={styles.view2} marginHorizontal={60} marginTop={70}>
          <Txt
            text="ĐÃ CÓ TÀI KHOẢN?"
            color="white"
            fontSize={16}
            alignSelf="center"
            fontWeight="bold"
          />
          <Btn
            title="ĐĂNG NHẬP"
            onPress={() => navigation.navigate("Login")}
            color="#00ced1"
            backgroundColor="#0000"
            fontSize={16}
            height={35}
          />
        </View>
        <Toast
          ref={toastRef}
          style={{ backgroundColor: "#333" }}
          position="bottom"
          positionValue={200}
          fadeInDuration={750}
          opacity={0.8}
          textStyle={{ color: "#fff" }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});
export default HomeScreen;
