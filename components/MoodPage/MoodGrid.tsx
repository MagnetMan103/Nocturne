import { emotionArray } from '@/constants/ColorMap';
import { View, StyleSheet, ScrollView } from 'react-native';
import MoonBox, {EmotionObject} from '@/components/MoodPage/MoonBox';
import {useRef, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {useLocalSearchParams} from "expo-router"; // Import useFocusEffect

const coordDict = {
    "High energy unpleasant": [200, 200],
    "High energy pleasant": [900, 200],
    "Low energy unpleasant": [200, 500],
    "Low energy pleasant": [900, 500],
}


export default function MoodGrid() {
    const params = useLocalSearchParams<{mood: string}>();
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
                    height: 2200,
                    width: 2200,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {Array.from({ length: 12 }).map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {Array.from({ length: 12 }).map((number, colIndex) => {
                            const emotion = emotionArray[rowIndex * 12 + colIndex];
                            if (emotion !== undefined) {
                                return <MoonBox key={colIndex} mood={emotion} />;
                            }
                            console.log('failed')
                            return null;
                        })}
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

function getColorIndex(colIndex: number, rowIndex: number) {
    if (rowIndex < 6) {
        if (colIndex < 6) {
            return "blue"
        }
        else {
            return "red"
        }
    }
    else {
        if (colIndex < 6) {
            return "yellow"
        }
        else {
            return "green"
        }
    }
}


