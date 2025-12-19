import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useCallback, useEffect, useMemo, useState } from "react";
import { generateRandomBetween } from "../utils";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useGameContext } from "../components/context/gameContext";

const GameScreen = () => {
  const {
    state: { userNumber, minBoundary, maxBoundary },
    setIsGameOver,
    setMinBoundary,
    setMaxBoundary,
  } = useGameContext();
  const initialGuess = useMemo(() => {
    return generateRandomBetween(minBoundary, maxBoundary, userNumber);
  }, [generateRandomBetween, userNumber]);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const onGameOver = useCallback(() => {
    setIsGameOver(true);
  }, [setIsGameOver]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [onGameOver, currentGuess, userNumber]);

  function nextGuessHandler(direction) {
    if (
      (direction === "less" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    let newMinBoundary = minBoundary;
    let newMaxBoundary = maxBoundary;

    if (direction === "greater") {
      newMinBoundary = currentGuess + 1;
      setMinBoundary(newMinBoundary);
    } else if (direction === "less") {
      newMaxBoundary = currentGuess - 1;
      setMaxBoundary(newMaxBoundary);
    }
    setCurrentGuess(generateRandomBetween(newMinBoundary, newMaxBoundary));
  }

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default GameScreen;
