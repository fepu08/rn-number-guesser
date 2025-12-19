import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ddb42f",
    borderWidth: 2,
    borderColor: "#ddb42f",
    padding: 12,
    margin: 10,
  },
});

export default Title;
