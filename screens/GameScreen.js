import { Alert, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import { useCallback, useEffect } from "react";
import { generateRandomBetween } from "../utils";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useGameContext } from "../components/context/gameContext";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const GameScreen = () => {
  const {
    state: { userNumber, guessNumber, minBoundary, maxBoundary },
    setGuessNumber,
    setIsGameOver,
    setMinBoundary,
    setMaxBoundary,
  } = useGameContext();

  const onGameOver = useCallback(() => {
    setIsGameOver(true);
  }, [setIsGameOver]);

  useEffect(() => {
    setGuessNumber(generateRandomBetween(minBoundary, maxBoundary, userNumber));
  }, []);

  useEffect(() => {
    if (guessNumber === userNumber) {
      onGameOver();
    }
  }, [onGameOver, guessNumber, userNumber]);

  function nextGuessHandler(direction) {
    if (
      (direction === "less" && guessNumber < userNumber) ||
      (direction === "greater" && guessNumber > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    let newMinBoundary = minBoundary;
    let newMaxBoundary = maxBoundary;

    if (direction === "greater") {
      newMinBoundary = guessNumber + 1;
      setMinBoundary(newMinBoundary);
    } else if (direction === "less") {
      newMaxBoundary = guessNumber - 1;
      setMaxBoundary(newMaxBoundary);
    }
    setGuessNumber(generateRandomBetween(newMinBoundary, newMaxBoundary));
  }

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guessNumber}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Greater or less?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            onPress={() => nextGuessHandler("less")}
            containerStyles={styles.button}
          >
            <Ionicons name={"remove"} size={24} color={"white"} />
          </PrimaryButton>
          <PrimaryButton
            onPress={() => nextGuessHandler("greater")}
            containerStyles={styles.button}
          >
            <Ionicons name={"add"} size={24} color={"white"} />
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  instructionText: {
    marginBottom: 12,
  },
});

export default GameScreen;
