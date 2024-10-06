import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import {Button} from 'react-native-paper'
import { Audio } from 'expo-av';
import { WebView } from 'react-native-webview';
import {useLocalSearchParams} from "expo-router";

const CircleWaveVisualizer = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0);
  const webviewRef = useRef<WebView>(null);
  const searchParams = useLocalSearchParams();

  const warmUpIPFS = async (url: string) => {
    try {
      await fetch(url, { method: "HEAD" });
      console.log("Warm-up successful");
    } catch (error) {
      console.error("Warm-up failed:", error);
    }
  };
  useEffect( () => {
    const url = `https://${searchParams.id}`
    console.log(url)
    async function Playing() {
      await warmUpIPFS(url);
      try {
        playSound(url)
        // setSound(sound);
        console.log('Playing Sound');
        // await sound.playAsync();
      } catch (error) {
        console.error('Error loading or playing sound:', error);
      }
    }
    Playing().then(() => {
      console.log('Playing Sound');
  });

    // playSound(searchParams.id as string);
    // async function loadAudioAsset() {
    //   const asset = Asset.fromModule(require('../../assets/example.mp3'));
    //   await asset.downloadAsync();  // Ensure the asset is ready for playback
    //   return asset.localUri;
    // }
    //
    // loadAudioAsset().then((uri) => {
    //   if (uri) {
    //     // Set the audio file URI in the playSound function
    //     playSound(searchParams.id);
    //   } else {
    //     console.error("Failed to load the audio asset.");
    //   }
    // });
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

  // HTML content with enhanced sinusoidal circles for dramatic expansion and contraction
  const webviewContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sinusoidal Circle Wave Visualizer</title>
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
        let rotationAngle = 0; // Add a variable to track rotation

        function resizeCanvas() {
          width = window.innerWidth;
          height = window.innerHeight;
          canvas.width = width;
          canvas.height = height;
        }

        function drawSinusoidalCircles() {
          ctx.clearRect(0, 0, width, height);

          const centerX = width / 2;
          const centerY = height / 2;
          const maxRadius = Math.min(width, height) / 1.5;   // Increased max radius to be larger
          const numCircles = 7;  // Number of concentric sinusoidal waves
          
          // Adjust the spacing between sinusoids based on volume
          const baseSpacing = maxRadius / numCircles;
          const breathingFactor = volume * 1.5 + 0.5;  // Dramatic breathing effect (adjusted)
          const sineFrequency = 10; // Frequency of the sinusoidal wave
          const sineAmplitude = 10 * volume;  // Amplitude of the sinusoidal distortion

          // Increment the rotation angle for continuous rotation
          rotationAngle += 0.01; // Adjust rotation speed if necessary

          for (let i = 0; i < numCircles; i++) {
            const dynamicSpacing = baseSpacing * (1 - i / numCircles) * breathingFactor;
            const radius = (i + 1) * dynamicSpacing;

            ctx.beginPath();
            for (let angle = 0; angle <= Math.PI * 2; angle += 0.01) {
              const xUnrotated = centerX + (radius + Math.sin(angle * sineFrequency) * sineAmplitude) * Math.cos(angle);
              const yUnrotated = centerY + (radius + Math.sin(angle * sineFrequency) * sineAmplitude) * Math.sin(angle);
              
              // Apply rotation transformation
              const rotatedX = centerX + (xUnrotated - centerX) * Math.cos(rotationAngle) - (yUnrotated - centerY) * Math.sin(rotationAngle);
              const rotatedY = centerY + (xUnrotated - centerX) * Math.sin(rotationAngle) + (yUnrotated - centerY) * Math.cos(rotationAngle);

              if (angle === 0) {
                ctx.moveTo(rotatedX, rotatedY);
              } else {
                ctx.lineTo(rotatedX, rotatedY);
              }
            }

            ctx.strokeStyle = 'violet';
            ctx.lineWidth = 4;  // Increased line width for better visibility
            ctx.stroke();
          }

          requestAnimationFrame(drawSinusoidalCircles);
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
        drawSinusoidalCircles();
      </script>
    </body>
    </html>
  `;

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
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
      <View style={{ marginBottom: 100, padding: 20, backgroundColor: 'black', alignItems: 'center' }}>
        <Button style={{backgroundColor:'lightblue', width: 200}} onPress={() => playSound()}
                theme={{ colors: {text: '#E0B0FF' } }}>
          {isPlaying ? "Pause Sound" : "Play Sound"}
        </Button>
      </View>
    </View>
  );
};

export default CircleWaveVisualizer;
