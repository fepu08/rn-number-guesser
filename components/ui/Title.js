import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    margin: 10,
    maxWidth: "80%",
  },
});

export default Title;
