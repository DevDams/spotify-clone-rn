import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { FONTS } from "../../constants/fonts.styles";
import { COLORS } from "../../constants/colors.styles";

SplashScreen.preventAutoHideAsync();

const Starter = () => {
  const [fontsLoaded] = useFonts({
    "Gotham-Book": require("./../../assets/fonts/GothamBook.ttf"),
    "Gotham-Black": require("./../../assets/fonts/Gotham-Black.otf"),
    "Gotham-Bold": require("./../../assets/fonts/Gotham-Bold.otf"),
    "Gotham-Medium": require("./../../assets/fonts/GothamMedium.ttf"),
    "Gotham-Light": require("./../../assets/fonts/GothamLight.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black, alignItems: "center", justifyContent: "center" }} onLayout={onLayoutRootView}>
      <View>
        <Text style={{ fontFamily: FONTS.black, fontSize: 34, color: COLORS.green }}>Starter</Text>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Starter;

const styles = StyleSheet.create({});
