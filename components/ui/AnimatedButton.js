import { StyleSheet, View, Pressable, Text, Animated } from "react-native";
import { useRef } from "react";

const AnimatedButton = ({ children, onPress }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
        <Text style={styles.buttonText}>{children}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    boxShadow: [
      { offsetX: 0, offsetY: 4, blurRadius: 10, color: "rgba(0,0,0,0.2)" },
    ],
    margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default AnimatedButton;
