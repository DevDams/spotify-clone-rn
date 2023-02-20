import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { FONTS } from "../../constants/fonts.styles";
import { COLORS } from "../../constants/colors.styles";
import { Button } from "react-native-paper";

SplashScreen.preventAutoHideAsync();

const Starter = ({ navigation }) => {
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
        position: "relative",
      }}
      onLayout={onLayoutRootView}
    >
      <View style={{ flex: 1 }}>
        <View className="absolute top-0 left-0 w-full h-64">
          <Image
            className="mx-auto mb-3"
            source={require("./../../assets/images/background.png")}
            fadeDuration={0}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          />
        </View>
        <View className="absolute top-72 left-0 w-full h-fit px-8">
          <Image
            className="mx-auto mb-3"
            source={require("./../../assets/images/logo.png")}
            fadeDuration={0}
            style={{ width: 50, height: 50, resizeMode: "contain" }}
          />

          <Text
            className="text-white text-center text-3xl"
            style={{ fontFamily: FONTS.black }}
          >
            Millions of songs.
          </Text>
          <Text
            className="text-white text-center text-3xl"
            style={{ fontFamily: FONTS.black }}
          >
            Free on Spotify.
          </Text>

          {/* Button 1 */}
          <Button
            className="bg-green-500 w-full h-12 rounded-full text-white mt-8"
            textColor="black"
            contentStyle={{ height: "100%"}}
            children={
              <TouchableWithoutFeedback>
                <Text style={{ fontFamily: FONTS.black }}>Sign up free</Text>
              </TouchableWithoutFeedback>
            }
            onPress={() => navigation.navigate('create-account-email')}
          />

          {/* Button 2 */}
          <Button
            className="w-full h-12 rounded-full text-white mt-4"
            textColor="white"
            style={{
              fontFamily: FONTS.black,
              borderWidth: 2,
              borderColor: "white",
            }}
            children={
              <TouchableWithoutFeedback>
                <Text style={{ fontFamily: FONTS.black, color: "white" }}>
                  <Image
                    source={require("./../../assets/images/google.png")}
                    fadeDuration={0}
                    style={{ width: 20, height: 20, resizeMode: "cover" }}
                  />{" "}
                  Continue with Google
                </Text>
              </TouchableWithoutFeedback>
            }
          />

          {/* Button 3 */}
          <Button
            className="w-full h-12 rounded-full flex items-center justify-center text-white mt-4"
            textColor="black"
            style={{
              fontFamily: FONTS.black,
              borderWidth: 2,
              borderColor: "white",
            }}
            children={
              <TouchableWithoutFeedback>
                <Text style={{ fontFamily: FONTS.black, color: "white" }}>
                  <Image
                    source={require("./../../assets/images/facebook.png")}
                    fadeDuration={0}
                    style={{ width: 20, height: 20, resizeMode: "cover" }}
                  />{" "}
                  Continue with Facebook
                </Text>
              </TouchableWithoutFeedback>
            }
          />

          {/* Button 4 */}
          <Button
            className="w-full h-12 rounded-full flex items-center justify-center text-white mt-4"
            textColor="black"
            style={{
              fontFamily: FONTS.black,
              borderWidth: 2,
              borderColor: "white",
            }}
            children={
              <TouchableWithoutFeedback>
                <Text style={{ fontFamily: FONTS.black, color: "white" }}>
                  <Image
                    source={require("./../../assets/images/apple.png")}
                    fadeDuration={0}
                    style={{ width: 20, height: 20, resizeMode: "cover" }}
                  />{" "}
                  Continue with Apple
                </Text>
              </TouchableWithoutFeedback>
            }
          />

        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Starter;

const styles = StyleSheet.create({});
