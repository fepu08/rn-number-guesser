import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import { generateRandomBetween } from "../utils";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

let minBoundary = 1;
let maxBoundary = 99;

const GameScreen = ({ selectedNumber }) => {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    selectedNumber,
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    if (
      (direction === "less" && currentGuess < selectedNumber) ||
      (direction === "greater" && currentGuess > selectedNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "greater") {
      minBoundary = currentGuess + 1;
    } else if (direction === "less") {
      maxBoundary = currentGuess - 1;
    }
    setCurrentGuess(generateRandomBetween(minBoundary, maxBoundary));
  }

  function renderGameController() {
    return (
      <View>
        <Text>Greater or less?</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler("greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("less")}>
            -
          </PrimaryButton>
        </View>
      </View>
    );
  }

  function renderContent() {
    if (currentGuess === selectedNumber) {
      return (
        <View style>
          <Title style={styles.title}>Guesser Win</Title>
        </View>
      );
    }

    return renderGameController();
  }

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {},
});

export default GameScreen;
