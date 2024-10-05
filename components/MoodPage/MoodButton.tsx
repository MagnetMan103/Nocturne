import { Pressable, View, Text, StyleSheet, Animated, Easing } from "react-native";
import { useEffect, useState, useRef } from "react";
import { LinearGradient } from 'expo-linear-gradient';

// Updated color scheme for the new moods
const colors: { [key: string]: string } = {
    "High energy unpleasant": '#FF4500',  // Red
    "High energy pleasant": '#FFD700',    // Yellow
    "Low energy unpleasant": '#4682B4',   // Blue
    "Low energy pleasant": '#32CD32',     // Green
};

// Function to get a gradient based on the base color of the orb (mood)
const getMoodGradient = (baseColor: string) => {
    return [
        `${baseColor}99`, // Medium opacity in the center
        `${baseColor}66`, // Lighter as it moves outward
        `${baseColor}22`  // Almost invisible at the edges
    ];
};

export default function MoodButton(props: { mood: keyof typeof colors }) {
    const [opacity, setOpacity] = useState(1);
    const [color, setColor] = useState<string>(colors[props.mood]); // Default to the mood color

    useEffect(() => {
        // Set base color of the orb from the color map or provide a fallback color
        setColor(colors[props.mood] || '#FFFFFF');  // Fallback to white if the mood is not found
    }, [props.mood]);

    // Animation values for aura
    const auraScale = useRef(new Animated.Value(1)).current;
    const auraOpacity = useRef(new Animated.Value(0.5)).current;

    // Start the pulsing animation (scale and opacity)
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(auraScale, {
                        toValue: 1.4,  // Slight reduction in size for ethereal effect
                        duration: 1500,
                        useNativeDriver: true,
                        easing: Easing.inOut(Easing.ease),
                    }),
                    Animated.timing(auraOpacity, {
                        toValue: 0.7,  // More visible glow effect
                        duration: 1500,
                        useNativeDriver: true,
                        easing: Easing.inOut(Easing.ease),
                    }),
                ]),
                Animated.parallel([
                    Animated.timing(auraScale, {
                        toValue: 1.2,  // Flicker back to smaller size
                        duration: 1200,
                        useNativeDriver: true,
                        easing: Easing.inOut(Easing.ease),
                    }),
                    Animated.timing(auraOpacity, {
                        toValue: 0.4,  // Softer opacity flicker
                        duration: 1200,
                        useNativeDriver: true,
                        easing: Easing.inOut(Easing.ease),
                    }),
                ]),
            ])
        ).start();
    }, [props.mood]);

    return (
        <View style={styles.container}>
            {/* Ethereal Aura View */}
            <Animated.View
                style={[
                    styles.aura,
                    {
                        opacity: auraOpacity,
                        transform: [{ scale: auraScale }],
                    }
                ]}
            >
                {/* Dynamic Gradient for Aura based on mood color */}
                <LinearGradient
                    colors={getMoodGradient(colors[props.mood] || '#FFFFFF')}  // Fallback to white if mood not found
                    style={styles.auraGradient}
                />
            </Animated.View>

            {/* Orb (the actual mood button) */}
            <Pressable
                onPressIn={() => setOpacity(0.7)}
                onPressOut={() => setOpacity(1)}
            >
                <LinearGradient
                    colors={['rgba(255,255,255,0.1)', 'rgba(0,0,0,0.3)']}  // Background gradient for the orb
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
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    aura: {
        position: 'absolute',
        width: 110,           // Moderately reduced aura size for balance
        height: 110,
        borderRadius: 55,     // Fully rounded aura
    },
    auraGradient: {
        width: '100%',
        height: '100%',
        borderRadius: 55,  // Rounded shape for the aura
    },
    button: {
        width: 120,           // Increased orb size to fit the text
        height: 120,
        padding: 15,          // Increased padding for text fitting
        margin: 5,
        borderRadius: 60,     // Fully rounded button (orb)
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 15,         // Adjusted font size to fit inside larger orb
        fontWeight: "semibold",
        color: 'black',
        textAlign: 'center',  // Center-align text for multi-word mood names
    },
});

