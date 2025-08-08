import { useRef } from "react";
import {
  Animated,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

const SixthStepSequence = () => {
  const width = useRef(new Animated.Value(0)).current;
  const height = useRef(new Animated.Value(0)).current;

  const handleAnimated = () => {
    Animated.sequence([
      Animated.spring(width, {
        toValue: 1,
        friction: 8,
        delay: 0.987,
        useNativeDriver: false,
      }),
      Animated.spring(height, {
        toValue: 1,
        friction: 8,
        delay: 0.987,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const toolbarAnimatedStyles: StyleProp<ViewStyle> = {
    width: width.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp",
    }),
  };

  const animationHeight: StyleProp<ViewStyle> = {
    height: height.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp",
    }),
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFC300" }}>
      <View style={styles.container}>
        <View style={[styles.topContainer]}>
          <TouchableOpacity
            onPress={handleAnimated}
            style={[styles.button]}
            activeOpacity={0.7}
          >
            <Text style={[styles.title]}>Start animation</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.centerContainer]}>
          <Animated.View style={[styles.toolbar, toolbarAnimatedStyles]} />
          <Animated.View
            style={[styles.content, animationHeight]}
          ></Animated.View>
        </View>
        <View style={[styles.bottomContainer]}></View>
      </View>
    </SafeAreaView>
  );
};

export default SixthStepSequence;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    padding: 22,
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  centerContainer: {
    width: "100%",
    height: 225,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  button: {
    height: 45,
    width: 175,
    backgroundColor: "#FFC300",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  toolbar: {
    height: 45,
    backgroundColor: "#FF5733",
  },
  content: {
    alignSelf: "stretch",
    backgroundColor: "rgba(255,87,51,0.1)",
    justifyContent: "center",
    alignContent: "center",
  },
});
