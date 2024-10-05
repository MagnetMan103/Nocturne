import {useLocalSearchParams} from "expo-router";
import {View, Text} from "react-native";


export default function Mood() {
    const params = useLocalSearchParams<{mood: string}>();


    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Mood: {params.mood}</Text>
        </View>
    )
}