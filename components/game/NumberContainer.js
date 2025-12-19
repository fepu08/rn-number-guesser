import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 36,
    margin: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 36,
    color: Colors.accent500,
    fontWeight: "bold",
  },
});
