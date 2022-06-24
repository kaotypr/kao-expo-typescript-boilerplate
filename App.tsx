import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>{Constants?.manifest?.extra?.APP_NAME}</Text>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
