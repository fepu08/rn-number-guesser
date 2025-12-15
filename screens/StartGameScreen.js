import { StyleSheet, View, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#72063c",
    borderRadius: 8,

    // android only shadow
    // elevation: 4,

    // iOS shadow styles
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.25,

    // For newer Architectures
    boxShadow: [
      { offsetX: 0, offsetY: 4, blurRadius: 10, color: "rgba(0,0,0,0.8)" },
      {
        inset: true,
        offsetX: 0,
        offsetY: 2,
        blurRadius: 5,
        color: "rgba(255,0,0,0.1)",
      },
    ],
  },
});

export default StartGameScreen;
