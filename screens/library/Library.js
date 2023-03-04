import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { FONTS } from "../../constants/fonts.styles";
import { COLORS } from "../../constants/colors.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { HStack } from "native-base";

const Library = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(2)

  const tabNavigation = (tab) => {
    setActiveTab(tab)
    if (tab === 0) {
      navigation.navigate('home')
    } else if (tab === 1) {
      navigation.navigate('search')
    } else if (tab === 2) {
      navigation.navigate('library')
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
        position: "relative",
      }}
    >
      <Text>Search</Text>

      <LinearGradient
        colors={["transparent", "#0000004f", "#00000099", "#00000099", "#000000d1", "#000000d1", "#000000d1", "#000000d1", "#000000d1"]}
        className="absolute bottom-0 w-full h-20 z-50 justify-center px-12"
        style={{ zIndex: 999 }}
      >
        <HStack space={3} justifyContent="space-between">
          <TouchableOpacity onPress={() => tabNavigation(0)}>
            <View className="items-center">
              <Image source={require("./../../assets/images/home-outline.png")} alt="" className="object-contain" style={{ width: 18, height: 20 }} />
              <Text className="text-[#777] text-[11px] mt-1" style={{ fontFamily: FONTS.medium }}>
                Home
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => tabNavigation(1)}>
            <View className="items-center">
              <Image source={require("./../../assets/images/loop-png.png")} alt="" className="object-contain" style={{ width: 20, height: 20 }} />
              <Text className="text-[#777] text-[11px] mt-1" style={{ fontFamily: FONTS.medium }}>
                Search
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => tabNavigation(2)}>
            <View className="items-center">
              <Image source={require("./../../assets/images/library-bold.png")} alt="" className="object-contain" style={{ width: 20, height: 20 }} />
              <Text className="text-white text-[11px] mt-1" style={{ fontFamily: FONTS.medium }}>
                Library
              </Text>
            </View>
          </TouchableOpacity>
        </HStack>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default Library

const styles = StyleSheet.create({})