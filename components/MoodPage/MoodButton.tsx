import { Pressable, View, Text, StyleSheet } from "react-native";
import {useEffect, useState} from "react";
import {LinearGradient} from 'expo-linear-gradient';
import {colors, Mood} from "@/constants/ColorMap";
import {Link, router} from "expo-router";

export default function MoodButton(props: { mood: Mood }) {
    const [opacity, setOpacity] = useState(1);

    return (
        <View>
            <Link
                href={{
                    pathname: '/mood',
                    params: { mood: props.mood }
                }} asChild>
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

