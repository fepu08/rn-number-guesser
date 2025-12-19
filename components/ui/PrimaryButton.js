import React, { useRef } from "react";
import { Animated, Pressable, Text, StyleSheet, Easing } from "react-native";
import Colors from "../../constants/colors";
import { hexToRgba } from "../../utils";

const PrimaryButton = ({ children, onPress, isDisabled = false }) => {
  const animation = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.timing(animation, {
      toValue: 1, // move to lighter color
      duration: 100,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(animation, {
      toValue: 0, // back to normal
      duration: 200,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start();
  };

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.primary500, Colors.primary400], // normal → lighter
  });

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={isDisabled}
    >
      <Animated.View style={[styles.container, { backgroundColor }]}>
        <Text style={styles.buttonText}>{children}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    boxShadow: [
      {
        offsetX: 0,
        offsetY: 3,
        blurRadius: 10,
        color: hexToRgba(Colors.primary700, 0.5),
      },
    ],
    margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;
