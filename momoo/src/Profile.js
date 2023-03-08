import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Profile_1 from "./Profile_1";
import Profile_2 from "./Profile_2";
import Profile_3 from "./Profile_3";
import { Icon } from "react-native-elements";
import { View, TouchableOpacity, StyleSheet } from "react-native";
function Profile({ navigation }) {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backk}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" type="material" />
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{
          backgroundColor: "#87cefa",
          marginBottom: 10,
          marginHorizontal: 10,
          borderWidth: 0.5,
          borderBottomWidth: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderBottomStartRadius: 30,
          borderBottomEndRadius: 30,
          borderColor: "transparent",
          overflow: "hidden",
        }}
      >
        <Tab.Screen
          name="Hoàng"
          component={Profile_1}
          options={{
            tabBarLabel: "Hoàng",
            headerTitleStyle: { fontWeight: "bold" },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={"orange"} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Tú"
          component={Profile_2}
          options={{
            tabBarLabel: "Tú",
            headerTitleStyle: { fontWeight: "bold" },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={"orange"} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Việt"
          component={Profile_3}
          options={{
            tabBarLabel: "Việt",
            headerTitleStyle: { fontWeight: "bold" },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={"orange"} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  backk: {
    backgroundColor: "white",
    width: 70,
    height: 50,
    justifyContent: "center",
    borderRadius: 40,
  },
});
export default Profile;
