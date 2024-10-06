import { emotionArray } from '@/constants/ColorMap';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import MoonBox from '@/components/MoodPage/MoonBox';
import {useLocalSearchParams} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons"; // Import useFocusEffect
import {router} from "expo-router";

const coordDict = {
    "Low energy unpleasant": [200, 200],
    "High energy unpleasant": [1500, 200],
    "Low energy pleasant": [200, 1300],
    "High energy pleasant": [1500, 1300],
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
            bounces={false}
            alwaysBounceVertical={false}
            alwaysBounceHorizontal={false}
            decelerationRate="normal" // Disable momentum scrolling

        >
            <View
                style={{
                    backgroundColor: 'black',
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
                                // @ts-ignore
                                return <MoonBox key={colIndex} mood={emotion} />;
                            }
                            return null;
                        })}
                    </View>
                ))}
                <Pressable style={{position: "absolute", left: 0, bottom: 2050, padding: 5, height:50, width: 50, margin: 30,
                    borderRadius: 100, justifyContent: 'center', alignItems: 'center', zIndex: 100}}
                           onPress={() => router.push('/')}>
                    <Ionicons name="arrow-back" size={50} color="white" />
                </Pressable>
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


