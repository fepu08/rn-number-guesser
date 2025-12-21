import { Dimensions, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  text: {
    color: Colors.accent500,
    fontSize: width < 380 ? 22 : 24,
  },
});

export default InstructionText;
