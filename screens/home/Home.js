import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { FONTS } from "../../constants/fonts.styles";
import { COLORS } from "../../constants/colors.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { HStack, ScrollView, VStack } from "native-base";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabNavigation = (tab) => {
    setActiveTab(tab);
    if (tab === 0) {
      navigation.navigate("home");
    } else if (tab === 1) {
      navigation.navigate("search");
    } else if (tab === 2) {
      navigation.navigate("library");
    }
  };

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
        <HStack space={3} justifyContent="space-between" px="4" mt="8">
          <Text
            className="text-lg text-white"
            style={{ fontFamily: FONTS.black }}
          >
            Recently played
          </Text>
          <HStack space={5} justifyContent="center">
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color="white"
            />
            <Entypo name="back-in-time" size={24} color="white" />
            <Feather name="settings" size={24} color="white" />
          </HStack>
        </HStack>

        <ScrollView horizontal={true}>
          <HStack space={3} px="4" mt="8">
            <View className="w-24">
              <Image
                source={require("./../../assets/images/cover.png")}
                alt=""
                className="w-full h-24"
                style={{ resizeMode: "cover" }}
              />
              <Text
                className="text-[12px] text-white mt-3"
                style={{ fontFamily: FONTS.bold }}
              >
                1(Remastered)
              </Text>
            </View>
            <View className="w-24">
              <Image
                source={require("./../../assets/images/ninho.png")}
                alt=""
                className="w-full h-24 rounded-full"
                style={{ resizeMode: "cover" }}
              />
              <Text
                className="text-[12px] text-white mt-3 text-center"
                style={{ fontFamily: FONTS.bold }}
              >
                Ninho
              </Text>
            </View>
            <View className="w-24">
              <Image
                source={require("./../../assets/images/imagine_dragon.png")}
                alt=""
                className="w-full h-24 rounded-full"
                style={{ resizeMode: "cover" }}
              />
              <Text
                className="text-[10px] text-white mt-3 text-center"
                style={{ fontFamily: FONTS.bold }}
              >
                Imagine Dragon
              </Text>
            </View>
            <View className="w-24">
              <Image
                source={require("./../../assets/images/cover2.png")}
                alt=""
                className="w-full h-24"
                style={{ resizeMode: "cover" }}
              />
              <Text
                className="text-[12px] text-white mt-3"
                style={{ fontFamily: FONTS.bold }}
              >
                Indie Pop
              </Text>
            </View>
          </HStack>
        </ScrollView>

        <View className="mt-10 px-4 flex-row gap-x-3">
          <View>
            <Image
              source={require("./../../assets/images/winner.png")}
              alt=""
              className="w-16 h-16 rounded-sm"
            />
          </View>
          <View>
            <Text
              className="text-white text-xs"
              style={{ fontFamily: FONTS.medium }}
            >
              #SPOTIFYWRAPPED
            </Text>
            <Text
              className="text-white text-xl"
              style={{ fontFamily: FONTS.black }}
            >
              Your 2021 in review
            </Text>
          </View>
        </View>

        <HStack space={3} justifyContent="flex-start" px="4" mt="8">
          <View>
            <Image
              source={require("./../../assets/images/topsong.png")}
              alt=""
              className="w-36 h-36 rounded-sm"
            />
            <Text
              className="text-white text-xs mt-2"
              style={{ fontFamily: FONTS.bold }}
            >
              Your top songs 2021
            </Text>
          </View>
          <View>
            <Image
              source={require("./../../assets/images/revelated.png")}
              alt=""
              className="w-36 h-36 rounded-sm"
            />
            <Text
              className="text-white text-xs mt-2"
              style={{ fontFamily: FONTS.bold }}
            >
              Your artists revelated
            </Text>
          </View>
        </HStack>

        <Text className="text-white text-2xl mt-8 px-4" style={{ fontFamily: FONTS.black }}>Editor's picks</Text>
        <ScrollView horizontal={true}>
          <HStack space={3} px="4" mt="4" mb={24}>
            <View className="w-36">
              <Image
                source={require("./../../assets/images/album1.png")}
                alt=""
                className="w-full h-36"
                style={{ resizeMode: "cover" }}
              />
              <Text
                className="text-[12px] text-white mt-3"
                style={{ fontFamily: FONTS.bold }}
              >
                1(Remastered)
              </Text>
            </View>
            <View className="w-36">
              <Image
                source={require("./../../assets/images/album2.png")}
                alt=""
                className="w-full h-36"
                style={{ resizeMode: "cover" }}
              />
              <Text
                className="text-[12px] text-white mt-3 text-center"
                style={{ fontFamily: FONTS.bold }}
              >
                Ninho
              </Text>
            </View>
            <View className="w-36">
              <Image
                source={require("./../../assets/images/album3.png")}
                alt=""
                className="w-full h-36"
                style={{ resizeMode: "cover" }}
              />
              <Text
                className="text-[10px] text-white mt-3 text-center"
                style={{ fontFamily: FONTS.bold }}
              >
                Imagine Dragon
              </Text>
            </View>
            <View className="w-36">
              <Image
                source={require("./../../assets/images/album1.png")}
                alt=""
                className="w-full h-36"
                style={{ resizeMode: "cover" }}
              />
              <Text
                className="text-[12px] text-white mt-3"
                style={{ fontFamily: FONTS.bold }}
              >
                Indian
              </Text>
            </View>
          </HStack>
        </ScrollView>
      </ScrollView>

      <LinearGradient
        colors={[
          "transparent",
          "#000000d1",
          "#000000d1",
          "#000000d1",
          "#000000d1",
        ]}
        className="absolute bottom-0 w-full h-20 z-50 justify-center px-12"
        style={{ zIndex: 999 }}
      >
        <HStack space={3} justifyContent="space-between">
          <TouchableOpacity onPress={() => tabNavigation(0)}>
            <View className="items-center">
              <Image
                source={require("./../../assets/images/home-png.png")}
                alt=""
                className="object-contain"
                style={{ width: 20, height: 20 }}
              />
              <Text
                className="text-white text-[11px] mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Home
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => tabNavigation(1)}>
            <View className="items-center">
              <Image
                source={require("./../../assets/images/loop-png.png")}
                alt=""
                className="object-contain"
                style={{ width: 20, height: 20 }}
              />
              <Text
                className="text-[#777] text-[11px] mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Search
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => tabNavigation(2)}>
            <View className="items-center">
              <Image
                source={require("./../../assets/images/library-png.png")}
                alt=""
                className="object-contain"
                style={{ width: 20, height: 20 }}
              />
              <Text
                className="text-[#777] text-[11px] mt-1"
                style={{ fontFamily: FONTS.medium }}
              >
                Library
              </Text>
            </View>
          </TouchableOpacity>
        </HStack>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
