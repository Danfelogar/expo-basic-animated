import {
  Animated,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import React, { useRef } from "react";

const SecondStepTranslateWH = () => {
  const translate = useRef(new Animated.Value(0)).current;
  const height = useRef(new Animated.Value(150)).current;
  const width = useRef(new Animated.Value(150)).current;

  const handleAnimated = () => {
    // Animated.timing(translate, {
    //   toValue: 100,
    //   duration: 1000,
    //   useNativeDriver: false,
    // }).start();
    Animated.timing(height, {
      toValue: 300,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(width, {
      toValue: 200,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const animationStyle: StyleProp<ViewStyle> = {
    height: height,
    width: width,
  };

  // const animationStyle2: StyleProp<ViewStyle> = {
  //   transform: [
  //     {
  //       translateY: translate,
  //     },
  //     {
  //       translateX: translate,
  //     },
  //   ],
  // };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleAnimated}>
        <Animated.View style={[styles.box, animationStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SecondStepTranslateWH;

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
    backgroundColor: "#2F55CB",
  },
});
