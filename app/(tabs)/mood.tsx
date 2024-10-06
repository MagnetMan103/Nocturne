import {router, useLocalSearchParams} from "expo-router";
import React from 'react';
import { View, Text } from "react-native";
import { getColor } from "@/constants/ColorMap";
import {LinearGradient} from "expo-linear-gradient";
import { TextInput, Button } from 'react-native-paper';
import {useState} from "react";
import {setState} from "jest-circus";
import {Audio} from "expo-av";


type Color = `#${string}`;

export default function Mood() {
    const [text, setText] = useState("");
    const [enabled, setEnabled] = useState(true);
    const [genState, setGenState] = useState("Generate");
    const params = useLocalSearchParams<{ mood: string }>();
    // @ts-ignore
    const myColor = getColor(params.mood) as Color;

    const songData = {
        text: text,
        user_id: 1,
        mood: params.mood,
        genre: [],
        duration: 10

    }
    const onPress = async () => {
        setEnabled(false);
        setGenState("Generating...");

        await fetch("http://35.194.89.40/api/queries/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(songData)
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            console.log(data)

            router.push({ pathname: '/waveform', params: { id: data["pinata_url"] } });
        })
    }
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
                    onPress={onPress}
                    disabled={!enabled}
                    theme={{ colors: {surfaceDisabled: '#E0B0FF' } }}
            >
                {genState}
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

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}