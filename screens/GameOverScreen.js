import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useGameContext } from "../components/context/gameContext";
import Colors from "../constants/colors";

const GameOverScreen = () => {
  const {
    state: { guessNumber, guessRounds },
    resetGame,
  } = useGameContext();

  return (
    <View style={styles.container}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlight}>{guessRounds.length}</Text> rounds to
        guess the number <Text style={styles.highlight}>{guessNumber}</Text>.
      </Text>
      <PrimaryButton onPress={resetGame} textStyles={styles.button}>
        Play Again
      </PrimaryButton>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: width < 380 ? 150 : 300,
    height: width < 380 ? 150 : 300,
    borderRadius: width < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    marginVertical: 36,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    //width: "100%",
    //height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 36,
    maxWidth: "80%",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  button: {
    fontSize: width < 380 ? 18 : 24,
    paddingVertical: width < 380 ? 6 : 12,
    paddingHorizontal: width < 380 ? 12 : 24,
  },
});

export default GameOverScreen;
