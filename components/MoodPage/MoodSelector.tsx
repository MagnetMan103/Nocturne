import { View, StyleSheet } from "react-native";
import MoodButton from "@/components/MoodPage/MoodButton";

export default function MoodSelector() {
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
    flexDirection: "row",       // Arrange items in a row
    flexWrap: "wrap",           // Allow wrapping to the next line
    justifyContent: "center",   // Center items horizontally
    alignItems: "center",       // Center items vertically
    width: "100%",              // Take up full width of the screen
    padding: 20,                // Add padding for spacing
  },
  buttonContainer: {
    width: "45%",               // Set width of each button to take up half of the container
    aspectRatio: 1,             // Maintain square shape for buttons
    margin: 10,                 // Add margin around buttons for spacing
  }
});
