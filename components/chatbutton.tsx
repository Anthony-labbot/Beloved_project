import { Ionicons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

export function ChatBubble() {
    return(
    <View style={{backgroundColor: "white", borderRadius: "50%", padding: 10, alignItems: "center", zIndex: 1, left: "44%", margin: 10}}>
      <Pressable>
        <Ionicons name="chatbubble-outline" size={24} color="black" />
      </Pressable>
    </View>
    )
}