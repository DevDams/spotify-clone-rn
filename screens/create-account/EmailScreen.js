import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/colors.styles";
import { FONTS } from "../../constants/fonts.styles";
import { Button, } from "react-native-paper";

const EmailScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
        position: "relative",
      }}
    >
      <View className="relative w-full h-14 bg-transparent flex flex-row items-center justify-center">
        <View className="absolute left-3 w-12 h-12 bg-black rounded-full flex items-center justify-center"><Button icon="camera" /></View>
        <Text
          className="text-xl text-center text-white"
          style={{ fontFamily: FONTS.black }}
        >
          Create account
        </Text>
      </View>

      <View className="px-5 mt-6">
        <Text className="text-xl text-white" style={{ fontFamily: FONTS.black }}>What's your email ?</Text>
        <TextInput className="w-full h-11 bg-gray-300 rounded-md px-4 font-medium" style={{ fontFamily: FONTS.medium }} />
        <Text className="text-white mt-2" style={{ fontFamily: FONTS.medium, fontSize: 10 }}>You will need to confirm this email later.</Text>

        <View className="mt-16">
          <Button children='Next' />
        </View>
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({});
