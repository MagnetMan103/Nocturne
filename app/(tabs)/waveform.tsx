import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { Audio } from 'expo-av';
import { Asset } from 'expo-asset';

const Waveform = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [audioUri, setAudioUri] = useState<string | null>(null);

  // Load the audio file using expo-asset
  useEffect(() => {
    async function loadAudioAsset() {
      const asset = Asset.fromModule(require('../../assets/example.mp3'));  // Using Asset module to load the file
      await asset.downloadAsync();  // Make sure the asset is downloaded and available
      setAudioUri(asset.localUri);  // Set the local URI of the asset
      setIsLoaded(true);  // Mark asset as loaded
    }

    loadAudioAsset();
  }, []);

  async function playSound() {
    if (!isLoaded || !audioUri) {
      console.log('Audio file not loaded yet');
      return;
    }

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
      // Load and play the sound from the local URI
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: audioUri }
      );
      setSound(newSound);
      await newSound.playAsync();
      setIsPlaying(true);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Playing Example Sound</Text>
      <Button title={isPlaying ? "Pause Sound" : "Play Sound"} onPress={playSound} disabled={!isLoaded} />
    </View>
  );
};

export default Waveform;










