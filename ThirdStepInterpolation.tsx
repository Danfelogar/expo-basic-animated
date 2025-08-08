import {
  Animated,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import React, { useRef } from "react";

const ThirdStepInterpolation = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const handleAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  };

  const animationStyle: StyleProp<ViewStyle> = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["orange", "purple"],
      extrapolate: "clamp",
    }) as unknown as string,
    transform: [
      {
        rotate: animation.interpolate({
          // inputRange: defines the possible values of the animation driver (typically 0 to 1)
          // Here we're saying when the animation value is 0, use the first outputRange value
          // and when it's 1, use the second outputRange value
          inputRange: [0, 1],
          // outputRange: defines the CSS values to output based on inputRange
          // When animation is at 0 (start), rotation is 0deg
          // When animation reaches 1 (end), rotation is 360deg (full circle)
          outputRange: ["0deg", "360deg"],
          // extrapolate: determines what happens when input values fall outside inputRange
          // "clamp" means values will be limited to the nearest boundary (won't exceed outputRange)
          // Alternatives are "extend" (continues interpolation) or "identity" (returns input value)
          extrapolate: "clamp",
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [-100, 100],
          extrapolate: "clamp",
        }),
      },
      {
        translateX: animation.interpolate({
          inputRange: [0, 0.3, 0.6, 1],
          outputRange: [-100, 25, -50, 100],
          extrapolate: "clamp",
        }),
      },
    ],
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleAnimation}>
        <Animated.View style={[styles.box, animationStyle, animationStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ThirdStepInterpolation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 22,
  },
  box: {
    width: 150,
    height: 150,
  },
});
