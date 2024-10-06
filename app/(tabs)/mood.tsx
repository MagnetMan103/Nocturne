import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { getColor } from "@/constants/ColorMap";
import {LinearGradient} from "expo-linear-gradient";
import { TextInput, Button } from 'react-native-paper';
import {useState} from "react";


type Color = `#${string}`;

export default function Mood() {
    const [text, setText] = useState("");
    const params = useLocalSearchParams<{ mood: string }>();
    // @ts-ignore
    const myColor = getColor(params.mood) as Color;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
            <LinearGradient colors={['rgba(0,0,0,0.3)', 'transparent']} style={{ bottom: 100, width: 200, height: 200, borderRadius: 100, backgroundColor: myColor,
                alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 25, fontWeight: "semibold"}}>{titleCase(params.mood)}</Text>
            </LinearGradient>
            <TextInput
                label="What's on your mind?"
                value={text}
                onChangeText={text => setText(text)}
                style={{width: 300, height: 0, padding:1}}
            />
            <Button icon="send" mode="contained"
                    style={{ marginTop: 30}}
                    onPress={() => console.log(text)}>
                Generate
            </Button>
        </View>
    );
}

// return the title case of a string
function titleCase(str: string): string {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}