import { Pressable, View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { colors, Mood } from "@/constants/ColorMap";

export default function MoodButton(props: { mood: Mood }) {
    const [opacity, setOpacity] = useState(1);
    const [color, setColor] = useState('white');

    useEffect(() => {
        if (props.mood) {
            setColor(colors[props.mood]);
        }
    }, [props.mood]);

    return (
        <View style={styles.shadowContainer}>
            <Pressable
                onPressIn={() => setOpacity(0.7)}
                onPressOut={() => setOpacity(1)}
            >
                <LinearGradient
                    // Background Linear Gradient
                    colors={['transparent', 'rgba(0,0,0,0.5)']}
                    style={[styles.button, { opacity: opacity }, { backgroundColor: colors[props.mood] }]}
                >
                    <Text style={styles.text}>
                        {props.mood}
                    </Text>
                </LinearGradient>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 150,
        padding: 10,
        margin: 5,
        borderRadius: 75,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadowContainer: {
        shadowColor: 'rgba(0, 0, 0, 0.8)', // Default shadow color
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 10, // For Android
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        color: 'black',
    }
});


