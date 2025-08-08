import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import FirstStepOpacity from "./FirstStepOpacity";
import SecondStepTranslateWH from "./SecondStepTranslateWH";
import ThirdStepInterpolation from "./ThirdStepInterpolation";
import ThirdStepInterpolBtn from "./ThirdStepInterpolBtn";
import FourthStepSpring from "./FourthStepSpring";
import FifthStepParallel from "./FifthStepParallel";
import SixthStepSequence from "./SixthStepSequence";
import SeventhStepModal from "./SeventhStepModal";

export default function App() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.container}>
        {/* <FirstStepOpacity /> */}
        {/* <SecondStepTranslateWH /> */}
        {/* <ThirdStepInterpolation /> */}
        {/* <ThirdStepInterpolBtn /> */}
        {/* <FourthStepSpring /> */}
        {/* <FifthStepParallel /> */}
        {/* <SixthStepSequence /> */}
        <SeventhStepModal />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
