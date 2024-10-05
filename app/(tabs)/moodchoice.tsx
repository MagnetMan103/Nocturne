import MoodGrid from "@/components/MoodPage/MoodGrid";
import {View} from "react-native";


export default function MoodChoice() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'} }>
            <MoodGrid/>
        </View>

    )
}