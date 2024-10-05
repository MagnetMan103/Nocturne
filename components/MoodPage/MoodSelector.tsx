import { View, Text, StyleSheet } from "react-native";
import MoodButton from "./MoodButton";  // Update the path to the correct relative location

export default function MoodSelector() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={{    fontSize: 28, fontWeight: "semibold",
      }}>Select your mood</Text>
      </View>
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
    padding: 20,
    flex: 1
  },
  header: {
    color: '#333',              // Dark grey for a modern look
    justifyContent: 'flex-end',
    flex: 2,
    marginBottom: 20,

  },
  buttonGrid: {
    flexDirection: "row",       // Layout items in a row
    flexWrap: "wrap",           // Wrap the buttons to form a 2x2 grid
    justifyContent: "center",   // Center the grid horizontally
    alignItems: "center",       // Center the grid vertically
    flex:4,               // Set a width that forces 2 buttons per row
  },
});




