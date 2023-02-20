import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import MainNavigation from "./navigation/MainNavigation";

export default function App() {
  return (
    <PaperProvider>
      <MainNavigation />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
