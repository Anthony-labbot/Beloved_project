import { BetaText } from '@/components/betaText';
import { ChatBubble } from '@/components/chatbutton';
import { TrustFooter } from '@/components/TrustFooter';
import { XendColors } from '@/constants/xend-theme';
import { AntDesign, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter()
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.view_, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
      <ChatBubble />
      <Image source={require("@/assets/images/icon.png")} 
        style={
          {height: 160,
           width: 160, 
           borderRadius: 80, 
           borderWidth: 5,
           borderColor: "#6ff7f775",
           marginTop: 20}} 
      />
      <View style={styles.inner_view}>
        <BetaText font_Size='big' font_Weight='large' style={{fontFamily: "Britannic Bold"}}>Welcome to the</BetaText>
        <BetaText font_Size='big' font_Weight='large' style={{fontFamily: "Britannic Bold"}}>Future of finance</BetaText>
        <BetaText font_Size='small' font_Weight='large'>to get started create an account, if you already have an account we will log you in</BetaText>
      </View>

      <View style={styles.inner_view}>
        <Pressable style={[styles.option_btn, {backgroundColor: XendColors.primaryBlue}]} onPress={() => router.push("/(auth)/email")}>
          <BetaText font_Size='medium' font_Weight='large'><Feather name='mail' size={20} color={"white"}/> Continue with Email</BetaText>
        </Pressable>

        <Pressable style={styles.option_btn}>
          <BetaText font_Size='medium' font_Weight='large'><AntDesign name='google' size={20} color={"Blue"}/> Continue with Google</BetaText> 
        </Pressable>

        <Pressable style={styles.option_btn}>
          <BetaText font_Size='medium' font_Weight='large'><FontAwesome name='apple' size={20} color={"white"}/> Continue with Apple</BetaText>
        </Pressable>
      </View>
      
      <View style={styles.inner_view}>
        <View style={styles.flex}>
          <Ionicons name="shield-checkmark" size={24} color="green" />
          <BetaText font_Size='small' font_Weight='small'>credit to emrancis</BetaText>
          <Pressable style={({ pressed }) => [
                                              styles.button,
                                              { opacity: pressed ? 0.7 : 1 }
                                             ]} 
                     ><Text>..Saga</Text></Pressable>
        </View>
        <TrustFooter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view_:{
    textAlign: "center",
    height: "100%",
    alignItems: "center",
    backgroundColor: XendColors.background,
    color: "white",
    paddingHorizontal: 5
  },

  inner_view: {
    margin: 10,
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center"
  },

  lil_text:{
    fontSize: 5,
    fontFamily: "TimesNewRoman"
  },

  flex: {
    flexDirection: "row"
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
  },

  option_btn: {
    borderRadius: 25,
    width: 300,
    padding: 3, 
    borderWidth: 1,
    borderColor: "blue",
    margin: 3.5,
    marginBottom: 10,
  }

})


