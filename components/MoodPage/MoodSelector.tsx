import { View, Text, StyleSheet } from "react-native";
import MoodButton from "./MoodButton";  // Update the path to the correct relative location

export default function MoodSelector() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select your mood</Text>
      <View style={styles.buttonGrid}>
        <MoodButton mood="High energy unpleasant" />
        <MoodButton mood="High energy pleasant" />
        <MoodButton mood="Low energy unpleasant" />
        <MoodButton mood="Low energy pleasant" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",       // Center the items horizontally
    justifyContent: "center",   // Center the items vertically
    width: "100%",              // Full width of the screen
    padding: 20,                // Add padding around the edges
  },
  header: {
    fontSize: 28,               // Large font size for the heading
    fontWeight: "bold",         // Bold font for emphasis
    color: '#333',              // Dark grey for a modern look
    marginBottom: 20,           // Space between the header and the buttons
    textAlign: 'center',        // Center the text
  },
  buttonGrid: {
    flexDirection: "row",       // Layout items in a row
    flexWrap: "wrap",           // Wrap the buttons to form a 2x2 grid
    justifyContent: "center",   // Center the grid horizontally
    alignItems: "center",       // Center the grid vertically
    width: "80%",               // Set a width that forces 2 buttons per row
  },
  buttonContainer: {
    width: "40%",               // Make each button take up 40% of the available space (2 buttons per row)
    aspectRatio: 1,             // Keep the buttons square
    margin: 30,                 // Increase margin for more spacing between buttons
  },
});




