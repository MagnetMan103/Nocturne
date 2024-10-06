import { Pressable, View, Text, StyleSheet } from "react-native";
import {useEffect, useState} from "react";
import {LinearGradient} from 'expo-linear-gradient';
import {Link, router} from "expo-router";


type HexCode = `#${string}`;

export type EmotionObject = {
    [emotion: string]: string;  // Key is an emotion (string), and value is the hex color code (string)
};

export default function MoodButton(props: { mood: EmotionObject }) {
    const [opacity, setOpacity] = useState(1);
    const moodKey = Object.keys(props.mood)[0] as keyof typeof props.mood;
    const moodValue = props.mood[moodKey] as unknown as HexCode; // Cast to unknown first, then to HexCode
    return (
        <View>
            <Link
                href={{
                    pathname: '/mood',
                    params: { mood: moodKey }
                }} asChild>
                <Pressable
                    onPressIn={() => setOpacity(0.5)}
                    onPressOut={() => setOpacity(1)}
                >

                    <LinearGradient
                        // Background Linear Gradient
                        colors={['transparent', 'rgba(0,0,0,0.5)']}
                        style={[styles.button, {opacity: opacity}, {backgroundColor: moodValue as HexCode}]}
                    >
                        <Text style={{fontSize: 17, fontWeight: "bold", color: 'black', textAlign: 'center'}}>
                            {moodKey}
                        </Text>
                    </LinearGradient>
                </Pressable>
            </Link>
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
    }
})
