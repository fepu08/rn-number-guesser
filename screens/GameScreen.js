import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

const GameScreen = ({ selectedNumber }) => {
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
  },
  title: {},
});

export default GameScreen;
