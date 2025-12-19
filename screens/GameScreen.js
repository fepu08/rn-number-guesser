import { StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import { generateRandomBetween } from "../utils";
import NumberContainer from "../components/game/NumberContainer";

const GameScreen = ({ selectedNumber }) => {
  const initialGuess = generateRandomBetween(1, 99, selectedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
      </View>
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
