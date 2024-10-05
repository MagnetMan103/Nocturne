import {View} from "react-native";
import MoodButton from "@/components/MoodPage/MoodButton";

export default function MoodSelector() {
    // make a grid of buttons with different moods that can be selected
    // use <Text> , <Pressable> components
    return (
        <View>
            <MoodButton mood={"Happy"} />
            <MoodButton mood={"Sad"} />
        </View>
    )
}