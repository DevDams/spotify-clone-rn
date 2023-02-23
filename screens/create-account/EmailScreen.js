import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/colors.styles";
import { FONTS } from "../../constants/fonts.styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, RadioButton, Divider } from "react-native-paper";

const EmailScreen = ({ navigation }) => {
  const [step, setStep] = useState("EMAIL");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGendre] = useState("");
  const [username, setUsername] = useState("");
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
        position: "relative",
      }}
    >
      <View className="relative w-full h-14 bg-transparent flex flex-row items-center justify-center">
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("starter")}
        >
          <View className="absolute left-3 w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
          </View>
        </TouchableWithoutFeedback>
        <Text
          className="text-xl text-center text-white"
          style={{ fontFamily: FONTS.black }}
        >
          Create account
        </Text>
      </View>

      {step === "EMAIL" ? (
        <View className="px-5 mt-8">
          <Text
            className="text-xl text-white"
            style={{ fontFamily: FONTS.black }}
          >
            What's your email ?
          </Text>
          <TextInput
            className="w-full h-11 bg-zinc-700 rounded-md px-4 mt-2 font-medium"
            style={{ fontFamily: FONTS.medium, color: "white" }}
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <Text
            className="text-white mt-2"
            style={{ fontFamily: FONTS.medium, fontSize: 10 }}
          >
            You will need to confirm this email later.
          </Text>

          <Button
            className={
              email
                ? "bg-green-500 w-1/2 mx-auto h-11 rounded-full mt-20"
                : "bg-gray-300/50 w-1/2 mx-auto h-11 rounded-full mt-20"
            }
            textColor="black"
            contentStyle={{ height: "100%" }}
            style={{
              fontFamily: FONTS.black,
            }}
            children={
              <Text
                style={{
                  fontFamily: FONTS.black,
                  color: "black",
                  fontSize: 14,
                }}
              >
                Next
              </Text>
            }
            onPress={() => setStep("PASSWORD")}
          />
        </View>
      ) : step === "PASSWORD" ? (
        <View className="px-5 mt-8">
          <Text
            className="text-xl text-white"
            style={{ fontFamily: FONTS.black }}
          >
            Create a password
          </Text>
          <TextInput
            className="w-full h-11 bg-zinc-700 rounded-md px-4 mt-2 font-medium"
            style={{ fontFamily: FONTS.medium, color: "white" }}
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
          <Text
            className="text-white mt-2"
            style={{ fontFamily: FONTS.medium, fontSize: 10 }}
          >
            Use at least 8 caracters
          </Text>

          <Button
            className={
              password
                ? "bg-green-500 w-1/2 mx-auto h-11 rounded-full mt-20"
                : "bg-gray-300/50 w-1/2 mx-auto h-11 rounded-full mt-20"
            }
            textColor="black"
            contentStyle={{ height: "100%" }}
            style={{
              fontFamily: FONTS.black,
            }}
            children={
              <Text
                style={{
                  fontFamily: FONTS.black,
                  color: "black",
                  fontSize: 14,
                }}
              >
                Next
              </Text>
            }
            onPress={() => setStep("GENDER")}
          />
        </View>
      ) : step === "GENDER" ? (
        <View className="px-5 mt-8">
          <Text
            className="text-xl text-white"
            style={{ fontFamily: FONTS.black }}
          >
            What's your gender ?
          </Text>
          <TextInput
            className="w-full h-11 bg-zinc-700 rounded-md px-4 mt-2 font-medium"
            style={{ fontFamily: FONTS.medium, color: "white" }}
            value={gender}
            onChangeText={(e) => setGendre(e)}
          />

          <Button
            className={
              gender
                ? "bg-green-500 w-1/2 mx-auto h-11 rounded-full mt-20"
                : "bg-gray-300/50 w-1/2 mx-auto h-11 rounded-full mt-20"
            }
            textColor="black"
            contentStyle={{ height: "100%" }}
            style={{
              fontFamily: FONTS.black,
            }}
            children={
              <Text
                style={{
                  fontFamily: FONTS.black,
                  color: "black",
                  fontSize: 14,
                }}
              >
                Next
              </Text>
            }
            onPress={() => setStep("LAST")}
          />
        </View>
      ) : (
        <View className="mt-8 flex-1">
          <Text
            className="text-xl text-white px-5"
            style={{ fontFamily: FONTS.black }}
          >
            What's your name ?
          </Text>
          <TextInput
            className="w-11/12 mx-auto h-11 bg-zinc-700 rounded-md px-4 mt-2 font-medium"
            style={{ fontFamily: FONTS.medium, color: "white" }}
          />
          <Text
            className="text-white mt-2 px-5"
            style={{ fontFamily: FONTS.medium, fontSize: 10 }}
          >
            This appears on your spotify profile
          </Text>

          <Divider style={{ marginVertical: 30, marginHorizontal: 15 }} />

          <View className="mx-4">
            <Text className="text-white text-xs" style={{ fontFamily: FONTS.book }}>
              By tapping on "Create an account", you agree to the spotify Terms
              of Use.
            </Text>

            <View className="mt-5">
              <Text className="text-green-500 text-sm" style={{ fontFamily: FONTS.medium }}>Terms of Use</Text>
              <Text className="text-white text-xs mt-1" style={{ fontFamily: FONTS.book }}>
                To learn more about how Spotify collect, uses, shares and
                protects your personal data, Please see the Spotify Privacy
                Policy.
              </Text>
            </View>

            <View className="mt-7">
              <Text className="text-green-500 text-sm" style={{ fontFamily: FONTS.medium }}>Privacy Policy</Text>
              <View className="flex flex-row items-center justify-between gap-x-3">
                <Text className="text-white text-xs" style={{ fontFamily: FONTS.book }}>
                  Please send me news and offers from Spotify.
                </Text>
                <RadioButton
                  value={checked}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => setChecked(!checked)}
                  color="#22c55e"
                />
              </View>
              <View className="flex flex-row items-center justify-between gap-x-3 mt-1">
                <Text className="text-white text-xs" style={{ fontFamily: FONTS.book }}>
                  Share my registration data with Spotify’s content providers
                  for marketing purposes.
                </Text>
                <RadioButton
                  value={checked2}
                  status={checked2 ? "checked" : "unchecked"}
                  onPress={() => setChecked2(!checked2)}
                  color="#22c55e"
                />
              </View>
            </View>
          </View>

          <View className="absolute bottom-10 w-full">
            <Button
              className="bg-white w-1/2 mx-auto h-11 rounded-full mt-20"
              textColor="black"
              contentStyle={{ height: "100%" }}
              style={{
                fontFamily: FONTS.black,
              }}
              children={
                <Text
                  style={{
                    fontFamily: FONTS.black,
                    color: "black",
                    fontSize: 14,
                  }}
                >
                  Create an account
                </Text>
              }
              onPress={() => navigation.navigate('choose-artist')}
            />
          </View>
        </View>
      )}

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({});
