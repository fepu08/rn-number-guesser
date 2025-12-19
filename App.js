import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import { GameProvider } from "./components/context/gameContext";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <GameProvider>
      <LinearGradient
        style={styles.container}
        colors={[Colors.primary700, Colors.accent500]}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode={"cover"}
          style={styles.container}
          imageStyle={styles.imageBackground}
        >
          <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
              <HomeScreen />
            </SafeAreaView>
          </SafeAreaProvider>
        </ImageBackground>
      </LinearGradient>
    </GameProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.15,
  },
});
