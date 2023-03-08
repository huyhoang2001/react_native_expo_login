import React, { useState, useRef } from "react";
import { StyleSheet, View, ImageBackground, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";//npm i react-native-paper
import { StatusBar } from "react-native";//npm i react-native
import { CheckBox } from "react-native-elements";//npm i react-native-elements
import Txt from "../controll/Txt";
import Btn from "../controll/Btn";
import Btn_ico from "../controll/Btn_ico";
import Toast from "react-native-easy-toast";//npm i react-native-easy-toast
const Login = ({ navigation }) => {
  const taikhoan = [
    { id: "1", Email: "ledangviet@gmail.com", Password: "123" },
    { id: "2", Email: "truonghuyhoang@gmail.com", Password: "123" },
    { id: "3", Email: "buiductu@gmail.com", Password: "123" },
    { id: "4", Email: "admin", Password: "admin" },
  ];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check1, setCheck1] = useState(false);
  const toastRef = useRef();
  const thongboa = () => {
    toastRef.current.show("Đăng nhập thành công", 2000);
  };
  const handleSubmit = () => {
    console.log(email);
    const login = taikhoan.find(
      (e) => e.Email == email && e.Password == password
    );
    if (!login) {
      toastRef.current.show("Đăng nhập thất bại", 2000);
    } else {
      toastRef.current.show("Đăng nhập thành công", 2000);
      navigation.navigate("Profile");
    }
  };
  const data = [
    {
      key: "email",
      label: "Email",
      value: email,
      onChangeText: setEmail,
    },
    {
      key: "password",
      label: "Mật khẩu",
      value: password,
      onChangeText: setPassword,
      secureTextEntry: true,
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground
        source={require("../assets/backgroud.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <ScrollView nestedScrollEnabled={true} style={styles.container1}>
          <View style={{ marginTop: 100 }}>
            <Txt
              text="Đăng nhập"
              color="white"
              fontSize={50}
              alignSelf="center"
              fontWeight="bold"
            />
          </View>
          {data.map((item, index) => (
            <View key={index} style={styles.inputContainer}>
              <TextInput
                label={item.label}
                value={item.value}
                mode="outlined"
                onChangeText={item.onChangeText}
                secureTextEntry={item.secureTextEntry}
                style={styles.input}
              ></TextInput>
            </View>
          ))}
          <View>
            <View style={styles.view2}>
              <CheckBox
                title="Lưu mật khẩu"
                checked={check1}
                onPress={() => setCheck1(!check1)}
                containerStyle={{
                  backgroundColor: "#00000000",
                  borderColor: "#00000000",
                }}
              ></CheckBox>
              <Btn
                title="Quên mật khẩu?"
                onPress={() => navigation.navigate("forestPw")}
                color="red"
                backgroundColor="#0000"
                marginHorizontal={25}
                fontSize={15}
              />
            </View>
          </View>
          <Btn
            title="Đăng nhập"
            onPress={handleSubmit}
            color="white"
            backgroundColor="#6495ed"
            fontSize={16}
            marginTop={20}
            marginHorizontal={120}
            marginVertical={10}
            height={35}
          />
          <Btn
            title="Đăng kí tài khoản mới!"
            onPress={() => navigation.navigate("Signup")}
            color="black"
            marginTop={5}
            backgroundColor="#0000"
            fontSize={16}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 30,
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
                <Txt
                  text="Hoặc"
                  color="black"
                  fontSize={15}
                  fontWeight="bold"
                />
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
          <View style={styles.view2} marginTop={40} marginHorizontal={90}>
            <Btn_ico
              //onPress={() => navigation.navigate("Signup")}
              onPress={thongboa}
              imageSource={require("../ico/facebook.png")}
            />
            <Btn_ico
              //onPress={() => navigation.navigate("Signup")}
              onPress={thongboa}
              imageSource={require("../ico/google.png")}
            />
            <Btn_ico
              //onPress={() => navigation.navigate("Signup")}
              onPress={thongboa}
              imageSource={require("../ico/twitter.png")}
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
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    marginTop: 20,
    flex: 1,
    width: "100%",
  },
  inputContainer: {
    marginVertical: 5,
  },
  input: {
    backgroundColor: "#fff",
    marginStart: 20,
    marginEnd: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  view2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});
export default Login;
