import { StyleSheet, Text, View } from "react-native";
import { FONTS } from "../../constants/fonts.styles";
import { COLORS } from "../../constants/colors.styles";

const Home = () => {
  return (
    <View>
      <Text
        style={{ fontFamily: FONTS.black, fontSize: 34, color: COLORS.green }}
      >
        Welcome to Home
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
