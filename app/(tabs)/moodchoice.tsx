import MoodGrid from "@/components/MoodPage/MoodGrid";
import {Pressable, View} from "react-native";
import {router} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function MoodChoice() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'} }>
            <Pressable style={{position: "absolute", left: -10, bottom: 740, padding: 10, height:50, width: 50, margin: 30,
                borderRadius: 100, justifyContent: 'center', alignItems: 'center', zIndex: 100}}
                       onPress={() => router.push('/')}>
                <Ionicons name="arrow-back" size={25} color="white" />
            </Pressable>
            <MoodGrid/>
        </View>

    )
}