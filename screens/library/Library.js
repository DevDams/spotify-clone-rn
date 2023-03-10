import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { FONTS } from "../../constants/fonts.styles";
import { COLORS } from "../../constants/colors.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { HStack, ScrollView } from "native-base";
import {
  Entypo,
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Library = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(2);

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
      <ScrollView>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          px="4"
          mt="6"
        >
          <View className="flex-row gap-x-2 items-center">
            <Image
              source={require("./../../assets/images/ninho.png")}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <Text
              className="text-white text-2xl"
              style={{ fontFamily: FONTS.bold }}
            >
              Your Library
            </Text>
          </View>
          <View>
            <Entypo name="plus" size={24} color="white" />
          </View>
        </HStack>

        <ScrollView horizontal={true}>
          <HStack space={3} px="4" mt="8">
            <View className="w-fit h-8 border border-gray-400 rounded-full items-center justify-center">
              <Text
                className="text-[12px] text-white px-6"
                style={{ fontFamily: FONTS.medium }}
              >
                Playlist
              </Text>
            </View>
            <View className="w-fit h-8 border border-gray-400 rounded-full items-center justify-center">
              <Text
                className="text-[12px] text-white px-6"
                style={{ fontFamily: FONTS.medium }}
              >
                Artist
              </Text>
            </View>
            <View className="w-fit h-8 border border-gray-400 rounded-full items-center justify-center">
              <Text
                className="text-[12px] text-white px-6"
                style={{ fontFamily: FONTS.medium }}
              >
                Albums
              </Text>
            </View>
            <View className="w-fit h-8 border border-gray-400 rounded-full items-center justify-center">
              <Text
                className="text-[12px] text-white px-6"
                style={{ fontFamily: FONTS.medium }}
              >
                Podcasts and shows
              </Text>
            </View>
            <View className="w-fit h-8 border border-gray-400 rounded-full items-center justify-center">
              <Text
                className="text-[12px] text-white px-6"
                style={{ fontFamily: FONTS.medium }}
              >
                Download
              </Text>
            </View>
          </HStack>
        </ScrollView>

        <HStack justifyContent="space-between" px="4" mt="5">
          <View className="flex-row items-center gap-x-1">
            <MaterialIcons name="import-export" size={24} color="white" />
            <Text
              className="text-white text-xs"
              style={{ fontFamily: FONTS.book }}
            >
              Recently played
            </Text>
          </View>
          <Feather name="grid" size={24} color="white" />
        </HStack>

        <View className="px-4 flex-row items-center gap-x-3 mt-8">
          <Image
            source={require("./../../assets/images/like.png")}
            className="w-16 h-16 rounded-sm"
          />
          <View>
            <Text className="text-white text-lg" style={{ fontFamily: FONTS.bold }}>Liked Songs</Text>
            <Text className="text-gray-400 text-xs mt-1" style={{ fontFamily: FONTS.medium }}>
              <MaterialCommunityIcons name="pin" size={19} color="#1ED760" />
              Playlist - 58 songs
            </Text>
          </View>
        </View>

        <View className="px-4 flex-row items-center gap-x-3 mt-5">
          <Image
            source={require("./../../assets/images/cloche.png")}
            className="w-16 h-16 rounded-sm"
          />
          <View>
            <Text className="text-white text-lg" style={{ fontFamily: FONTS.bold }}>New episodes</Text>
            <Text className="text-gray-400 text-xs mt-1" style={{ fontFamily: FONTS.medium }}>
              <MaterialCommunityIcons name="pin" size={19} color="#1ED760" />
              Updated 2 days ago
            </Text>
          </View>
        </View>

        <View className="px-4 flex-row items-center gap-x-3 mt-5">
          <Image
            source={require("./../../assets/images/imagine_dragon.png")}
            className="w-16 h-16 rounded-full"
          />
          <View>
            <Text className="text-white text-lg" style={{ fontFamily: FONTS.bold }}>Imagine Dragon</Text>
            <Text className="text-gray-400 text-xs mt-1" style={{ fontFamily: FONTS.medium }}>
              Artist
            </Text>
          </View>
        </View>

        <View className="px-4 flex-row items-center gap-x-3 mt-5">
          <Image
            source={require("./../../assets/images/billie.png")}
            className="w-16 h-16 rounded-full"
          />
          <View>
            <Text className="text-white text-lg" style={{ fontFamily: FONTS.bold }}>Billie Eilish</Text>
            <Text className="text-gray-400 text-xs mt-1" style={{ fontFamily: FONTS.medium }}>
              Artist
            </Text>
          </View>
        </View>

        <View className="px-4 flex-row items-center gap-x-3 mt-5">
          <Image
            source={require("./../../assets/images/tayc.png")}
            className="w-16 h-16 rounded-full"
          />
          <View>
            <Text className="text-white text-lg" style={{ fontFamily: FONTS.bold }}>Tayc</Text>
            <Text className="text-gray-400 text-xs mt-1" style={{ fontFamily: FONTS.medium }}>
              Artist
            </Text>
          </View>
        </View>

        <View className="px-4 flex-row items-center gap-x-3 mt-5">
          <Image
            source={require("./../../assets/images/cover.png")}
            className="w-16 h-16 rounded-sm"
          />
          <View>
            <Text className="text-white text-lg" style={{ fontFamily: FONTS.bold }}>Remastered</Text>
            <Text className="text-gray-400 text-xs mt-1" style={{ fontFamily: FONTS.medium }}>
              Albums
            </Text>
          </View>
        </View>
        
        <View className="px-4 flex-row items-center gap-x-3 mt-5">
          <Image
            source={require("./../../assets/images/album3.png")}
            className="w-16 h-16 rounded-sm"
          />
          <View>
            <Text className="text-white text-lg" style={{ fontFamily: FONTS.bold }}>Todays Tops</Text>
            <Text className="text-gray-400 text-xs mt-1" style={{ fontFamily: FONTS.medium }}>
              Playlist
            </Text>
          </View>
        </View>

        <View className="h-24"></View>
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
                source={require("./../../assets/images/home-outline.png")}
                alt=""
                className="object-contain"
                style={{ width: 18, height: 20 }}
              />
              <Text
                className="text-[#777] text-[11px] mt-1"
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
                source={require("./../../assets/images/library-bold.png")}
                alt=""
                className="object-contain"
                style={{ width: 20, height: 20 }}
              />
              <Text
                className="text-white text-[11px] mt-1"
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

export default Library;

const styles = StyleSheet.create({});
