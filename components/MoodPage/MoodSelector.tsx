import { View, StyleSheet } from "react-native";
import MoodButton from "@/components/MoodPage/MoodButton";

export default function MoodSelector() {
  // make a grid of buttons with different moods that can be selected
  return (
    <View style={styles.container}>
      <MoodButton mood={"Happy"} />
      <MoodButton mood={"Sad"} />
      <MoodButton mood={"Angry"} />
      <MoodButton mood={"Excited"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Row direction to start
    flexWrap: "wrap",     // Wrap items to the next line when they exceed the width
    justifyContent: "center", // Center align them horizontally
    alignItems: "center", // Center align them vertically
  },
});