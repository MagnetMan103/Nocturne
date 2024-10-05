import { Pressable, View, Text, StyleSheet, Animated, Easing } from "react-native";
import { useEffect, useState, useRef } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { colors, Mood } from "@/constants/ColorMap";

export default function MoodButton(props: { mood: Mood }) {
    const [opacity, setOpacity] = useState(1);
    const [color, setColor] = useState('white');
    
    // Animation values for aura
    const auraScale = useRef(new Animated.Value(1)).current;
    const auraOpacity = useRef(new Animated.Value(0.5)).current;

    useEffect(() => {
        if (props.mood) {
            setColor(colors[props.mood]);
        }

        // Start the aura pulsing animation (scale and opacity)
        Animated.loop(
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(auraScale, {
                        toValue: 1.4, // Smaller scale to reduce blocking
                        duration: 1500,
                        useNativeDriver: true,  // Native driver for scale
                        easing: Easing.inOut(Easing.ease),
                    }),
                    Animated.timing(auraOpacity, {
                        toValue: 0, // Fade out completely
                        duration: 1500,
                        useNativeDriver: true,  // Native driver for opacity
                        easing: Easing.inOut(Easing.ease),
                    }),
                ]),
                Animated.parallel([
                    Animated.timing(auraScale, {
                        toValue: 1, // Return to original size
                        duration: 1500,
                        useNativeDriver: true,  // Native driver for scale
                        easing: Easing.inOut(Easing.ease),
                    }),
                    Animated.timing(auraOpacity, {
                        toValue: 0.5, // Return to initial opacity
                        duration: 1500,
                        useNativeDriver: true,  // Native driver for opacity
                        easing: Easing.inOut(Easing.ease),
                    }),
                ]),
            ])
        ).start();
    }, [props.mood]);

    return (
        <View style={styles.container}>
            {/* Aura View */}
            <Animated.View
                style={[
                    styles.aura,
                    {
                        backgroundColor: colors[props.mood],  // Use mood color for the aura
                        opacity: auraOpacity,                 // Animate aura opacity
                        transform: [{ scale: auraScale }],    // Animate aura scale
                    }
                ]}
            />
            {/* Orb (the actual mood button) */}
            <Pressable
                onPressIn={() => setOpacity(0.7)}
                onPressOut={() => setOpacity(1)}
            >
                <LinearGradient
                    // Modify opacity for lighter colors to make them more vivid
                    colors={['rgba(255,255,255,0.1)', 'rgba(0,0,0,0.3)']}  // Reduce transparency here
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
        margin: 10, // Reduce margin to avoid too much spacing between buttons
    },
    aura: {
        position: 'absolute', // Positioned around the orb
        width: 120,           // Smaller than before for reduced size
        height: 120,
        borderRadius: 60,     // Fully rounded
    },
    button: {
        width: 100,           // Reduced size of the orbs
        height: 100,
        padding: 10,
        margin: 5,
        borderRadius: 50,     // Fully rounded
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,         // Slightly smaller text to fit the new size
        fontWeight: "bold",
        color: 'black',
    }
});











