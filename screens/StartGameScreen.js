import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
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

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Pick a number from 1 to 99</InstructionText>
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
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 26,
    fontWeight: "bold",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    textAlign: "center",
  },
  button: {
    flex: 1,
  },
});

export default StartGameScreen;
