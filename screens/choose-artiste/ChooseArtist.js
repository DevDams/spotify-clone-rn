import {
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
import { Searchbar } from "react-native-paper";
import { HStack, VStack } from "native-base";

const ChooseArtist = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

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
        <VStack space={4} alignItems="center">
          <HStack space={3} justifyContent="center">
            <View>
              <View className="bg-sky-400 w-24 h-24 rounded-full"></View>
            </View>
            <View>
              <View className="bg-sky-400 w-24 h-24 rounded-full"></View>
            </View>
            <View>
              <View className="bg-sky-400 w-24 h-24 rounded-full"></View>
            </View>
          </HStack>
          
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseArtist;

const styles = StyleSheet.create({});
