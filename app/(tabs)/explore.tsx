import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, View, Text} from 'react-native';



export default function TabTwoScreen() {
  return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'} }>
        <Text>Explore Page</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
