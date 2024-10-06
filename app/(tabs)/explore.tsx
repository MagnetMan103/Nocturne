import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { MultiSelect } from 'react-native-element-dropdown';
import Slider from '@react-native-community/slider';  // Import Slider component

const Explore: React.FC = () => {
  // State to hold selected genres
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  // State to hold selected song length (in seconds)
  const [songLength, setSongLength] = useState<number>(30);  // Default to 30 seconds

  // Genre options
  const genres = [
    { label: 'Classical', value: 'classical' },
    { label: 'Instrumental Rock', value: 'instrumental_rock' },
    { label: 'Ambient', value: 'ambient' },
    { label: 'Jazz', value: 'jazz' },
    { label: 'Electronic', value: 'electronic' },
    { label: 'Lo-fi', value: 'lofi' },
  ];

  // Function to format time in mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;  // Format like 2:30
  };

  return (
    <>
      {/* App Bar for the Explore Screen */}
      <Appbar.Header>
        <Appbar.Content title="Explore" />
      </Appbar.Header>

      {/* Main Content of Explore Screen */}
      <ScrollView style={styles.container}>
        <Text style={styles.label}>Select Genres</Text>

        {/* Multi-Select Dropdown */}
        <MultiSelect
          style={styles.dropdown}
          data={genres}
          labelField="label"
          valueField="value"
          placeholder="Select genres"
          value={selectedGenres}
          onChange={(item) => {
            setSelectedGenres(item);
          }}
          selectedStyle={styles.selectedStyle}
          search
          searchPlaceholder="Search genres"
        />

        {/* Display selected genres */}
        <View style={styles.selectedGenres}>
          {selectedGenres.length > 0 ? (
            selectedGenres.map((genre) => (
              <Text key={genre} style={styles.genre}>
                {genres.find((g) => g.value === genre)?.label}
              </Text>
            ))
          ) : (
            <Text>No genres selected</Text>
          )}
        </View>

        {/* Song Length Slider */}
        <Text style={styles.label}>Select Song Length ({formatTime(songLength)})</Text>
        <Slider
          style={styles.slider}
          minimumValue={30}  // 30 seconds
          maximumValue={300}  // 5 minutes (300 seconds)
          step={15}  // 15-second intervals
          value={songLength}
          onValueChange={(value) => setSongLength(value)}  // Update the song length
          minimumTrackTintColor="#1E90FF"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#1E90FF"
        />
      </ScrollView>
    </>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
  },
  dropdown: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  selectedStyle: {
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
    padding: 5,
  },
  selectedGenres: {
    marginTop: 20,
  },
  genre: {
    fontSize: 16,
    marginVertical: 4,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});



