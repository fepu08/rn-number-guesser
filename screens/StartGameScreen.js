import { StyleSheet, View, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

const StartGameScreen = () => {
  const [input, setInput] = useState("");

  const handleChangeText = (text) => {
    //const filtered = text.replace(/[^0-9]/g, "");
    //setInput(filtered);
    setInput(text);
  };

  const handleReset = () => {
    setInput("");
  };

  const handleConfirm = () => {
    const chosenNumber = parseInt(input, 10);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: handleReset,
          },
        ],
      );
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={input}
        onChangeText={handleChangeText}
        style={styles.numberInput}
        maxLength={2}
        inputMode={"numeric"}
        keyboardType={"number-pad"}
        autoCapitalize={"none"}
        autoCorrect={false}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#3b021f",
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
  buttonContainer: {
    flexDirection: "row",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 26,
    fontWeight: "bold",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    textAlign: "center",
  },
  button: {
    flex: 1,
  },
});

export default StartGameScreen;
