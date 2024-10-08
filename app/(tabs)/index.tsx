import React from 'react'; // Add this line
import { View, Text, StyleSheet } from 'react-native';
import MoodSelector from "@/components/MoodPage/MoodSelector";
import {useState} from "react";
import MoodGrid from "@/components/MoodPage/MoodGrid";

export default function HomeScreen() {
  const [active, setActive] = useState(false);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'} }>
      <MoodSelector/>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

