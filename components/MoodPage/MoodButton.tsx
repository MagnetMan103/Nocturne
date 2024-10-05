import { Pressable, View, Text, StyleSheet } from "react-native";
import {useState} from "react";
import {LinearGradient} from 'expo-linear-gradient';

export default function MoodButton(props: { mood: string }) {
    const [opacity, setOpacity] = useState(1);
    return (
        <View>
            <LinearGradient
                // Background Linear Gradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={[styles.button, {opacity: opacity}]}
            >
            <Pressable
                onPressIn={() => setOpacity(0.5)}
                onPressOut={() => setOpacity(1)}
            >
                <Text style={{fontSize: 25, fontWeight: "bold", color: 'black'}}>{props.mood}</Text>
            </Pressable>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'lightblue',
        width: 150,
        height: 150,
        padding: 10,
        margin: 5,
        borderRadius: 75,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

