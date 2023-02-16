import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Home from "../screens/home/Home";
import Starter from "../screens/starter/Starter";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Starter">
          <Stack.Screen name="Starter" component={Starter} options={{ title: "Starter", headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ title: "Home", headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
