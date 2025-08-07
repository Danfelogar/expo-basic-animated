import { use, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  ViewStyle,
  StyleProp,
} from "react-native";

const FirstStepOpacity = () => {
  const opacityAnimated = useRef(new Animated.Value(1)).current;
  const scaleAnimated = useRef(new Animated.Value(1)).current;

  const handleAnimated = () => {
    //timing receives first a number indicating the duration of the animation
    //and then an object with the properties to animate
    Animated.timing(opacityAnimated, {
      toValue: 0, //toValue is the final value of the animation
      duration: 1000, //duration is the time in milliseconds for the animation to complete
      useNativeDriver: false, //useNativeDriver is set to true to use the native driver for better performance
    }).start(({ finished }) => {
      if (finished) {
        // If the animation finished, you can start another one or do something else
        console.log("Animation finished");
        Animated.timing(opacityAnimated, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }).start();
        Animated.timing(scaleAnimated, {
          toValue: 2,
          duration: 1000,
          useNativeDriver: false,
        }).start();
      }
    });
  };

  const animationStyle: StyleProp<ViewStyle> = {
    opacity: opacityAnimated,
    transform: [
      { scale: scaleAnimated }, // scaleAnimated is used to scale the box
    ],
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleAnimated}>
        <Animated.View style={[styles.box, animationStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FirstStepOpacity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato",
  },
});
