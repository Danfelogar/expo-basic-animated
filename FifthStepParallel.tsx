import { useRef } from "react";
import {
  Animated,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

const FifthStepParallel = () => {
  const circle = useRef(new Animated.Value(1)).current;
  const box = useRef(new Animated.Value(0)).current;

  const handleAnimated = () => {
    Animated.parallel([
      Animated.spring(circle, {
        toValue: 1.5,
        friction: 4,
        useNativeDriver: false,
      }),
      Animated.timing(box, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start(({ finished }) => {
      if (finished) {
        circle.setValue(1);
        box.setValue(0);
      }
    });
  };

  const circleStyle: StyleProp<ViewStyle> = {
    transform: [{ scale: circle }],
  };
  const boxStyle: StyleProp<ViewStyle> = {
    transform: [
      {
        rotate: box.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animated.View style={[styles.circle, circleStyle]} />
      </View>
      <TouchableOpacity
        onPress={handleAnimated}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start animation</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Animated.View style={[styles.box, boxStyle]} />
      </View>
    </View>
  );
};

export default FifthStepParallel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 22,
  },
  header: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  footer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dadadada",
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: "#6200ee",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#6200ee",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#ff5733",
  },
});
