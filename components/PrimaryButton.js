import { StyleSheet, View, Pressable, Text } from "react-native";

const PrimaryButton = ({ children }) => {
  return (
    <View>
      <Pressable>
        <Text>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PrimaryButton;
