import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';  // Correct hook to retrieve params

// Example list of 144 emotions (12x12 grid)
const emotions = Array.from({ length: 144 }, (_, index) => `Emotion ${index + 1}`);

export default function EmotionGrid() {
  const params = useLocalSearchParams();  // Get the search params
  let quadrant: string | undefined;

  // Safely extract the 'quadrant' parameter, handle both string and string[] cases
  if (Array.isArray(params.quadrant)) {
    quadrant = params.quadrant[0];  // Take the first value if it's an array
  } else {
    quadrant = params.quadrant;  // Use directly if it's a string
  }

  // Map the quadrant to a range of items in the grid
  const getQuadrantData = (quadrant: string | undefined) => {
    const q = parseInt(quadrant || '1', 10);
    switch (q) {
      case 1: return emotions.slice(0, 36);       // First quadrant (1-36)
      case 2: return emotions.slice(36, 72);      // Second quadrant (37-72)
      case 3: return emotions.slice(72, 108);     // Third quadrant (73-108)
      case 4: return emotions.slice(108, 144);    // Fourth quadrant (109-144)
      default: return emotions.slice(0, 36);      // Default to first quadrant
    }
  };

  const quadrantData = getQuadrantData(quadrant);  // Get the appropriate quadrant data

  // Render each emotion item in the grid
  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity style={styles.emotionButton}>
      <Text style={styles.emotionText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={quadrantData}  // Display only the selected quadrant data
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={6}  // Use 6 columns for a smaller grid (quadrant)
      contentContainerStyle={styles.grid}
    />
  );
}

const styles = StyleSheet.create({
  grid: {
    padding: 10,
  },
  emotionButton: {
    flex: 1,
    margin: 5,
    aspectRatio: 1,  // Keeps the button square
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  emotionText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});



