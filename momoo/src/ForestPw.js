import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import { StatusBar } from "react-native";
import { Icon } from "react-native-elements";
import { CheckBox } from "react-native-elements";
import Txt from "../controll/Txt";
import Toast from "react-native-easy-toast";
import Btn from "../controll/Btn";
import Btn_ico from "../controll/Btn_ico";
const forestPw = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [check1, setCheck1] = useState(false);
  const toastRef = useRef();
  const handleSubmit = () => {
    console.log(email);
    toastRef.current.show("Đã gữi mã", 2000);
  };
  const data = [
    {
      key: "email",
      label: "Email",
      value: email,
      onChangeText: setEmail,
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
              text="Moonoo"
              color="white"
              fontSize={50}
              alignSelf="center"
              fontWeight="bold"
            />
          </View>
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 10,
            }}
          >
            <Txt
              text="Quên mật khẩu?"
              color="black"
              fontSize={22}
              fontWeight="bold"
            />
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Txt
                text="Nhập email của bạn vào bên dưới, bạn sẽ nhận được email hướng dẫn cách đặt lại mật khẩu sau vài phút. Bạn cũng có thể đặt mật khẩu mới nếu bạn chưa từng đặt mật khẩu trước đây."
                color="black"
                fontSize={12}
              />
            </View>
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Txt
                text="Địa chỉ email"
                color="black"
                fontSize={14}
                fontWeight="bold"
              />
            </View>
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
          <CheckBox
            title="Đồng ý các điều khoản của chúng tôi"
            checked={check1}
            onPress={() => setCheck1(!check1)}
            containerStyle={{
              backgroundColor: "#00000000",
              borderColor: "#00000000",
              color: "red",
            }}
          ></CheckBox>
          <Btn
            title="Gửi mã"
            onPress={handleSubmit}
            color="white"
            backgroundColor="#6495ed"
            fontSize={16}
            marginTop={4}
            marginHorizontal={120}
            marginVertical={10}
            height={35}
          />
          <View>
            <TouchableOpacity
              style={styles.backk}
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrow-back" type="material" />
            </TouchableOpacity>
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
  backk: {
    backgroundColor: "white",
    width: 70,
    height: 50,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 40,
    marginTop: 70,
  },
});
export default forestPw;
