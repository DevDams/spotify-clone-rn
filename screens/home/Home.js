import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FONTS } from "../../constants/fonts.styles";
import { COLORS } from "../../constants/colors.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "native-base";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <ScrollView
      className="flex-1 w-full h-full bg-white"
      style={{ backgroundColor: COLORS.black }}
    >
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Homme</Text>
      <Text className="text-3xl text-white">Femme</Text>
    </ScrollView>
  );
};

const SettingsScreen = () => {
  return (
    <View className="flex-1 w-full h-full bg-white">
      <Text className="text-3xl text-white">Femme</Text>
    </View>
  );
};

const AboutScreen = () => {
  return (
    <View className="flex-1 w-full h-full bg-white">
      <Text className="text-3xl text-white">About</Text>
    </View>
  );
};

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
        position: "relative",
      }}
    >
      <ScrollView
        className="relative flex-1 w-full h-full bg-white z-10"
        style={{ backgroundColor: COLORS.black }}
      >
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Homme</Text>
        <Text className="text-3xl text-white">Femme</Text>
      </ScrollView>

      <LinearGradient
        // Button Linear Gradient
        colors={["transparent", "transparent", "#000", "#000"]}
        className="absolute bottom-0 w-full h-16 z-50 justify-center"
        style={{ zIndex: 999 }}
      >
        <Text className="text-white">Sign in with Facebook</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
