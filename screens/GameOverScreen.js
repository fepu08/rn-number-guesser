import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useGameContext } from "../components/context/gameContext";
import Colors from "../constants/colors";

const GameOverScreen = () => {
  const {
    state: { guessNumber },
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
        Your phone needed <Text style={styles.highlight}>X</Text> rounds to
        guess the number <Text style={styles.highlight}>Y</Text>.
      </Text>
      <PrimaryButton onPress={resetGame} textStyles={styles.button}>
        Play Again
      </PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
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
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  button: {
    fontSize: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
});

export default GameOverScreen;
