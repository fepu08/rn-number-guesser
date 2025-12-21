import { StyleSheet, View, Text, Dimensions } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    paddingVertical: width < 380 ? 12 : 24,
    paddingHorizontal: width < 380 ? 18 : 36,
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
