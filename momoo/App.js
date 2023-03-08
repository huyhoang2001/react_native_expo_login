import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Signup from "./src/Signup";
import Login from "./src/Login";
import Profile from "./src/Profile";
import HomeScreen from "./src/HomeScreen";
import forestPw from "./src/ForestPw";
import LottieSplash from "./src/lottie_splash";

const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },

    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        headerShown: false,
      },
    },
    forestPw: {
      screen: forestPw,
      navigationOptions: {
        headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "HomeScreen",
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 4500);
  }, []);
  return isLoading ? <LottieSplash /> : <AppContainer />;
}
