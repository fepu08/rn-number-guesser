import { View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useGameContext } from "../components/context/gameContext";

const GameOverScreen = () => {
  const { resetGame } = useGameContext();

  return (
    <View style={styles.container}>
      <Title>Game Over</Title>
      <View>
        <PrimaryButton onPress={resetGame} textStyles={styles.button}>
          Play Again
        </PrimaryButton>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    width: "50%",
    marginHorizontal: "auto",
  },
  button: {
    fontSize: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
});

export default GameOverScreen;
