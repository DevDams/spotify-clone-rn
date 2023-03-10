import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants/colors.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { FONTS } from "../../constants/fonts.styles";
import { ActivityIndicator, Button, Searchbar } from "react-native-paper";
import { HStack, VStack } from "native-base";

const ChooseArtist = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeSearch = (query) => setSearchQuery(query);

  const loadingAnimation = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      navigation.navigate('home')
    }, 5000);
  }

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
          className="text-center text-white"
          style={{ fontFamily: FONTS.black, fontSize: 13 }}
        >
          Choose 3 or more artists you like
        </Text>
      </View>
      <View className="px-4 pb-5">
        <Searchbar
          onChangeText={onChangeSearch}
          value={searchQuery}
          inputStyle={{ fontFamily: FONTS.bold, fontSize: 14, color: "black" }}
          style={{
            color: "black",
            backgroundColor: "#e5e7eb",
            height: 45,
            marginTop: 10,
          }}
          iconColor="black"
        />
      </View>

      <ScrollView className="flex-1 px-4 pt-5 pb-16">
        <VStack space={8} alignItems="center">
          <HStack space={3} justifyContent="center">
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/billie.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Billie Eilish
              </Text>
            </View>
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/imagine_dragon.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Imagine Dragon
              </Text>
            </View>
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/ninho.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Ninho
              </Text>
            </View>
          </HStack>

          <HStack space={3} justifyContent="center">
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/tayc.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Tayc
              </Text>
            </View>
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/anne_marie.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Anne Marie
              </Text>
            </View>
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/juice.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Juice WRLD
              </Text>
            </View>
          </HStack>

          <HStack space={3} justifyContent="center">
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/back_number.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Back Number
              </Text>
            </View>
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/kemmler.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Kemmler
              </Text>
            </View>
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/yoasobi.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Yoasobi
              </Text>
            </View>
          </HStack>

          <HStack space={3} justifyContent="center">
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/niska.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Niska
              </Text>
            </View>
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/kerchab.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Kerchab
              </Text>
            </View>
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/sheeran.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Ed Sheeran
              </Text>
            </View>
          </HStack>

          <HStack space={3} justifyContent="center">
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/juice.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Juice WRLD
              </Text>
            </View>
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/imagine_dragon.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Imagine Dragon
              </Text>
            </View>
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/back_number.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Back Number
              </Text>
            </View>
          </HStack>

          <HStack space={3} justifyContent="center">
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/billie.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Billie Eilish
              </Text>
            </View>
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/tayc.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Tayc
              </Text>
            </View>
            <View>
              <View className="bg-neutral-700 w-24 h-24 rounded-full">
                <Image
                  source={require("./../../assets/images/ninho.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text
                className="text-white text-xs text-center mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Ninho
              </Text>
            </View>
          </HStack>

          <View className="w-full mt-10 mb-20">
            <Button
              className="w-2/3 mx-auto h-11 bg-white rounded-full"
              contentStyle={{ height: "100%" }}
              textColor="black"
              children={
                <TouchableWithoutFeedback>
                  <Text style={{ fontFamily: FONTS.black, color: "black" }}>
                    Done
                  </Text>
                </TouchableWithoutFeedback>
              }
              onPress={() => loadingAnimation()}
            />
          </View>
        </VStack>
      </ScrollView>

      {/* Loading Page */}
      {isLoading ? <View className="absolute bottom-0 flex-1 w-full h-full bg-black items-center justify-center">
        <ActivityIndicator animating={isLoading} color="#22c55e" size="40" />
      </View> : null}
    </SafeAreaView>
  );
};

export default ChooseArtist;

const styles = StyleSheet.create({});
