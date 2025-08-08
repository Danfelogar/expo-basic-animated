import { ForwardRefExoticComponent, RefAttributes, useRef } from "react";
import {
  Animated,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const ThirdStepInterpolBtn = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const handleAnimated = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 3500,
      useNativeDriver: false,
    }).start();
  };

  const animationProgress: StyleProp<ViewStyle> = {
    width: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp",
    }),
    backgroundColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgba(247,247,247,1)", "rgba(1,175,103,1)"],
    }) as unknown as string,
  };

  const textStyles: StyleProp<TextStyle> = {
    color: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgba(1,175,103,0.7))", "rgba(245,245,245,1)"],
      extrapolate: "clamp",
    }) as unknown as string,
  };

  const iconStyles: StyleProp<ViewStyle> = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0.9, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.98}
        onPress={handleAnimated}
        style={[styles.buttonContainer]}
      >
        <Animated.View style={[styles.progress, animationProgress]} />
        <Animated.Text style={[styles.buttonText, textStyles]}>
          ThirdStepInterpolBtn
        </Animated.Text>
        <Animated.View style={[iconStyles]}>
          <AntDesign name="checkcircleo" style={[styles.iconCheck]} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default ThirdStepInterpolBtn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 22,
  },
  buttonContainer: {
    height: 50,
    alignSelf: "stretch",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(1,175,103,0.1)",
    borderWidth: 0.5,
    borderColor: "#dadada",
    overflow: "hidden",
    flexDirection: "row",
  },
  progress: {
    flex: 1,
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 15,
  },
  iconCheck: {
    fontSize: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
});
