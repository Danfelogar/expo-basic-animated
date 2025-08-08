import { useRef, use } from "react";
import {
  Animated,
  StyleProp,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

const EighthStepRest = () => {
  const translate = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const handleAnimation = () => {
    //stagger receive first the number of successive delays between animations
    // Animated.stagger(1500, [
    //   Animated.timing(translate, {
    //     toValue: 1,
    //     duration: 500,
    //     useNativeDriver: true,
    //   }),
    //   Animated.timing(scale, {
    //     toValue: 1.5,
    //     duration: 500,
    //     useNativeDriver: true,
    //   }),
    // ]).start();

    Animated.sequence([
      Animated.delay(2000),
      Animated.timing(translate, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.delay(3500),
      Animated.timing(scale, {
        toValue: 1.5,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const animatedStyle: StyleProp<ViewStyle> = {
    transform: [
      {
        translateY: translate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -100],
          extrapolate: "clamp",
        }),
      },
      {
        scale: scale,
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

export default EighthStepRest;

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
    backgroundColor: "orange",
  },
});
