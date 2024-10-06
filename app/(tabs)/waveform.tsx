import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Text } from 'react-native';
import { Audio } from 'expo-av';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';

const CircleWaveVisualizer = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const webviewRef = useRef<WebView>(null);

  // Load the local MP3 file from the assets folder
  useEffect(() => {
    async function loadAudioAsset() {
      const asset = Asset.fromModule(require('../../assets/example.mp3'));
      await asset.downloadAsync();  // Ensure the asset is ready for playback
      return asset.localUri;
    }

    loadAudioAsset().then((uri) => {
      if (uri) {
        // Set the audio file URI in the playSound function
        playSound(uri);
      } else {
        console.error("Failed to load the audio asset.");
      }
    });
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isPlaying && sound) {
      const updateVisualization = async () => {
        const status = await sound.getStatusAsync();
        if (status.isLoaded && status.isPlaying) {
          const volumeLevel = Math.random();  // Simulating volume level
          // More aggressive smoothing interpolation
          setVolume((prevVolume) => prevVolume * 0.75 + volumeLevel * 0.25); // More responsive
          if (webviewRef.current) {
            webviewRef.current.postMessage(JSON.stringify({ volume }));
          }
        }
      };

      intervalId = setInterval(updateVisualization, 60); // Refresh rate at 60ms
    }

    return () => clearInterval(intervalId); // Cleanup on stop
  }, [isPlaying, sound, volume]);

  async function playSound(audioUri?: string) {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
    } else if (audioUri) {
      const { sound: newSound } = await Audio.Sound.createAsync({ uri: audioUri });
      setSound(newSound);
      await newSound.playAsync();
      setIsPlaying(true);
    }
  }

  // HTML content with enhanced concentric circles for dramatic expansion and contraction
  const webviewContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Circle Wave Visualizer</title>
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
      <canvas id="circlewave"></canvas>
      <script>
        const canvas = document.getElementById('circlewave');
        const ctx = canvas.getContext('2d');
        let width, height;
        let volume = 0.5;

        function resizeCanvas() {
          width = window.innerWidth;
          height = window.innerHeight;
          canvas.width = width;
          canvas.height = height;
        }

        function drawConcentricCircles() {
          ctx.clearRect(0, 0, width, height);

          const centerX = width / 2;
          const centerY = height / 2;
          const maxRadius = Math.min(width, height) / 1.5;   // Increased max radius to be larger
          const numCircles = 7;  // Number of concentric circles
          
          // Adjust the spacing between circles based on volume
          const baseSpacing = maxRadius / numCircles;
          const breathingFactor = volume * 1.5 + 0.5;  // Dramatic breathing effect (adjusted)

          for (let i = 0; i < numCircles; i++) {
            // As the volume increases, inner circles grow more, and outer circles grow less
            const dynamicSpacing = baseSpacing * (1 - i / numCircles) * breathingFactor;
            const radius = (i + 1) * dynamicSpacing;

            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
            ctx.strokeStyle = 'violet';
            ctx.lineWidth = 4;  // Increased line width for better visibility
            ctx.stroke();
          }

          requestAnimationFrame(drawConcentricCircles);
        }

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('message', (event) => {
          const data = JSON.parse(event.data);
          if (data.volume !== undefined) {
            // More responsive interpolation
            volume = volume * 0.75 + data.volume * 0.25;  // Slightly more aggressive interpolation
          }
        });

        resizeCanvas();
        drawConcentricCircles();
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
        <Button title={isPlaying ? "Pause Sound" : "Play Sound"} onPress={() => playSound()} />
        <Text>{isPlaying ? "Playing..." : "Paused"}</Text>
      </View>
    </View>
  );
};

export default CircleWaveVisualizer;
