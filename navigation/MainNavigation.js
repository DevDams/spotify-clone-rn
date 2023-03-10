import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Home from "../screens/home/Home";
import Starter from "../screens/starter/Starter";
import { SafeAreaProvider } from "react-native-safe-area-context";
import EmailScreen from "../screens/create-account/EmailScreen";
import ChooseArtist from "../screens/choose-artiste/ChooseArtist";
import Search from "../screens/search/Search";
import Library from "../screens/library/Library";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="starter">
          <Stack.Screen
            name="starter"
            component={Starter}
            options={{
              title: "Starter",
              headerShown: false,
              animation: "slide_from_right",
            }}
          />
          <Stack.Screen
            name="create-account-email"
            component={EmailScreen}
            options={{
              title: "Create account",
              headerShown: false,
              animation: "slide_from_right",
            }}
          />
          <Stack.Screen
            name="choose-artist"
            component={ChooseArtist}
            options={{
              title: "Choose Artist",
              headerShown: false,
              animation: "slide_from_right",
            }}
          />
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              title: "Home",
              headerShown: false,
              animation: "none",
            }}
          />
          <Stack.Screen
            name="search"
            component={Search}
            options={{
              title: "Rechercher",
              headerShown: false,
              animation: "none",
            }}
          />
          <Stack.Screen
            name="library"
            component={Library}
            options={{
              title: "Biblioth??que",
              headerShown: false,
              animation: "none",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
