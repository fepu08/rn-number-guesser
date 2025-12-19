import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import { useCallback, useEffect } from "react";
import { generateRandomBetween } from "../utils";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useGameContext } from "../components/context/gameContext";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/ui/GuessLogItem";

const GameScreen = () => {
  const {
    state: { userNumber, guessNumber, minBoundary, maxBoundary, guessRounds },
    setGuessNumber,
    setIsGameOver,
    setMinBoundary,
    setMaxBoundary,
    addGuessRound,
  } = useGameContext();

  const onGameOver = useCallback(() => {
    setIsGameOver(true);
  }, [setIsGameOver]);

  useEffect(() => {
    const guess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
    addGuessRound(guess);
    setGuessNumber(guess);
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
    const newGuessNumber = generateRandomBetween(
      newMinBoundary,
      newMaxBoundary,
    );
    addGuessRound(newGuessNumber);
    setGuessNumber(newGuessNumber);
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
      <View style={styles.guessRoundsLogContainer}>
        <Text style={styles.guessRoundsLogTitle}>Previous Guesses</Text>
        <View
          style={{
            flex: 1,
            marginHorizontal: 5,
          }}
        >
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{
              paddingVertical: 8,
              paddingHorizontal: 30,
            }}
            data={guessRounds}
            renderItem={({ item, index }) => (
              <GuessLogItem
                guess={item}
                roundNumber={guessRounds.length - index}
              />
            )}
            keyExtractor={(item, _) => item}
          />
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
  guessRoundsLogContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  guessRoundsLogTitle: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 26,
  },
  guessRoundLog: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 22,
    textAlign: "right",
    paddingHorizontal: 50,
  },
});

export default GameScreen;
