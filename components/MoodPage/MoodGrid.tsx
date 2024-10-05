import { colors, Mood, emotions } from '@/constants/ColorMap';
import { View, StyleSheet, ScrollView } from 'react-native';
import MoonBox from '@/components/MoodPage/MoonBox';
import { useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {useLocalSearchParams} from "expo-router"; // Import useFocusEffect

const coordDict = {
    "High energy unpleasant": [200, 200],
    "High energy pleasant": [900, 200],
    "Low energy unpleasant": [200, 500],
    "Low energy pleasant": [900, 500],
}


export default function MoodGrid() {
    const colorArray = Object.keys(colors);
    const params = useLocalSearchParams<{mood: string}>();
    const rows = [...Array(Math.ceil(colorArray.length / 5))].map((_, i) =>
        colorArray.slice(i * 5, i * 5 + 5)
    );
    const coords = coordDict[params.mood as keyof typeof coordDict];
    // This will run every time the screen is focused

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentOffset={{ x: coords[0], y: coords[1]}}
        >
            <View
                style={{
                    backgroundColor: 'white',
                    height: 1500,
                    width: 1500,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {rows.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((color, colIndex) => (
                            <MoonBox key={colIndex} mood={color as Mood} />
                        ))}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
});
