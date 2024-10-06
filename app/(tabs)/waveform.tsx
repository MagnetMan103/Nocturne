import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Text } from 'react-native';
import { Audio } from 'expo-av';
import { WebView } from 'react-native-webview';

const SineWaveVisualizer = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const webviewRef = useRef<WebView>(null);

  // Example remote MP3 file for testing
  const audioUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && sound) {
      interval = setInterval(async () => {
        const status = await sound.getStatusAsync();
        if (status.isLoaded && status.isPlaying) {
          const volumeLevel = Math.random();  // Replace with actual volume detection logic if available
          setVolume(volumeLevel);  // Set volume to simulate real-time volume changes
          if (webviewRef.current) {
            webviewRef.current.postMessage(JSON.stringify({ volume: volumeLevel }));
          }
        }
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, sound]);

  async function playSound() {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
    } else {
      const { sound: newSound } = await Audio.Sound.createAsync({ uri: audioUrl });
      setSound(newSound);
      await newSound.playAsync();
      setIsPlaying(true);
    }
  }

  // HTML content with sine wave animation
  const webviewContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sine Wave Visualizer</title>
      <style>
        body, html {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          background-color: black;
        }
        canvas {
          display: block;
        }
      </style>
    </head>
    <body>
      <canvas id="sinewave"></canvas>
      <script>
        const canvas = document.getElementById('sinewave');
        const ctx = canvas.getContext('2d');
        let width, height;
        let volume = 0.5;
        const amplitude = 50;
        const frequency = 0.05;
        let t = 0;

        function resizeCanvas() {
          width = window.innerWidth;
          height = window.innerHeight;
          canvas.width = width;
          canvas.height = height;
        }

        function drawSineWave() {
          ctx.clearRect(0, 0, width, height);
          ctx.beginPath();
          ctx.moveTo(0, height / 2);
          for (let x = 0; x < width; x++) {
            const y = height / 2 + Math.sin(x * frequency + t) * amplitude * volume;
            ctx.lineTo(x, y);
          }
          ctx.strokeStyle = 'violet';
          ctx.lineWidth = 4;
          ctx.stroke();
          t += 0.05;
          requestAnimationFrame(drawSineWave);
        }

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('message', (event) => {
          const data = JSON.parse(event.data);
          if (data.volume !== undefined) {
            volume = data.volume;  // Update volume from React Native
          }
        });

        resizeCanvas();
        drawSineWave();
      </script>
    </body>
    </html>
  `;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <WebView
          ref={webviewRef}
          originWhitelist={['*']}
          source={{ html: webviewContent }}
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
      <View style={{ padding: 20 }}>
        <Button title={isPlaying ? "Pause Sound" : "Play Sound"} onPress={playSound} />
        <Text>{isPlaying ? "Playing..." : "Paused"}</Text>
      </View>
    </View>
  );
};

export default SineWaveVisualizer;
