import { useEffect, useRef, useState } from "react";
import {
  Animated,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

const NinthStepPointerEvents = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const [toggle, setToggle] = useState(false);

  const handleAnimated = () => {
    Animated.timing(animation, {
      toValue: toggle ? 1 : 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    handleAnimated();
  }, [toggle]);

  const animationStyle: StyleProp<ViewStyle> = {
    opacity: animation,
  };

  const list = [
    { id: 1, title: "Description 1" },
    { id: 2, title: "Description 2" },
    { id: 3, title: "Description 3" },
    { id: 4, title: "Description 4" },
    { id: 5, title: "Description 5" },
    { id: 6, title: "Description 6" },
  ];

  const Box = () => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => setToggle(!toggle)}
      >
        <Text>Toggle Animation</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.View
        //pointerEvent is used to control the touch events for not interrupting the other interactions if this components not show
        pointerEvents={toggle ? "auto" : "none"}
        style={[styles.listContainer, animationStyle]}
      >
        {list.map((item) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item.id}
            style={[
              styles.item,
              {
                borderBottomWidth: item.id !== list[list.length - 1].id ? 1 : 0,
                borderBottomColor: "#dadada",
              },
            ]}
            onPress={() => setToggle(!toggle)}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
      <Box />
    </View>
  );
};

export default NinthStepPointerEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 22,
  },
  button: {
    height: 55,
    alignSelf: "stretch",
    borderWidth: 1.5,
    borderColor: "#DADADADA",
    paddingHorizontal: 12,
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    height: 55,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  listContainer: {
    height: "auto",
    width: "100%",
    position: "absolute",
    backgroundColor: "#ffff",
    zIndex: 2,
    borderWidth: 1,
    borderColor: "#dadada",
    borderRadius: 4,
  },
});
