import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { Audio } from 'expo-av';  // Using Expo's audio module for simple playback

const Waveform = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function playSound() {
    if (sound) {
      // Toggle play/pause
      if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
    } else {
      // Load and play the sound if it's not already loaded
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }  // Publicly accessible audio URL
      );
      setSound(newSound);
      await newSound.playAsync();
      setIsPlaying(true);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Simple Audio Playback</Text>
      <Button title={isPlaying ? "Pause Sound" : "Play Sound"} onPress={playSound} />
    </View>
  );
};

export default Waveform;








