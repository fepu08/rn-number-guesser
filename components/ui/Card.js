import Colors from "../../constants/colors";
import { Dimensions, StyleSheet, View } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: width < 380 ? 25 : 50,
    marginHorizontal: 24,
    backgroundColor: Colors.primary700,
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

export default Card;
