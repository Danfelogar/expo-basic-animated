import { useRef } from "react";
import {
  Animated,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

const FourthStepSpring = () => {
  const animation = useRef(new Animated.Value(1)).current;

  const handleAnimation = () => {
    Animated.spring(animation, {
      toValue: 3,
      //this is the resistance against the spring, best values are between 1 - 5
      friction: 2,
      //this is the stiffness of the spring
      tension: 100,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        Animated.spring(animation, {
          toValue: 1,
          friction: 7,
          tension: 40,
          useNativeDriver: false,
        }).start();
      }
    });
  };

  const animatedStyle: StyleProp<ViewStyle> = {
    transform: [
      {
        scale: animation,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleAnimation}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FourthStepSpring;

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
    backgroundColor: "purple",
  },
});
