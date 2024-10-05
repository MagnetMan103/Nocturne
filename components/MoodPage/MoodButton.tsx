import { Pressable, View, Text, StyleSheet } from "react-native";
import {useEffect, useState} from "react";
import {LinearGradient} from 'expo-linear-gradient';
import {colors, Mood} from "@/constants/ColorMap";

export default function MoodButton(props: { mood: Mood }) {
    const [opacity, setOpacity] = useState(1);
    const [color, setColor] = useState('white');
    useEffect(() => {
        if (props.mood) {
            setColor(colors[props.mood]);
        }
    }, [props.mood]);

    return (
        <View>
            <Pressable
                onPressIn={() => setOpacity(0.5)}
                onPressOut={() => setOpacity(1)}
            >

            <LinearGradient
                // Background Linear Gradient
                colors={['transparent', 'rgba(0,0,0,0.5)']}
                style={[styles.button, {opacity: opacity}, {backgroundColor: colors[props.mood]}]}
            >
                <Text style={{fontSize: 25, fontWeight: "bold", color: 'black'}}>
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
    }
})

