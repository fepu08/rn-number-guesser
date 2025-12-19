import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginBottom: 10,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    boxShadow: [
      { offsetX: 0, offsetY: 0, blurRadius: 3, color: "rgba(0,0,0,0.25)" },
    ],
  },
  itemText: {
    fontFamily: "open-sans",
  },
});

export default GuessLogItem;
