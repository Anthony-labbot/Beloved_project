import { BetaText } from '@/components/betaText';
import { ChatBubble } from '@/components/chatbutton';
import { TrustFooter } from '@/components/TrustFooter';
import { XendColors } from '@/constants/xend-theme';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Email() {
    const router = useRouter()
    const insets = useSafeAreaInsets()

    return(
        <ScrollView style={[styles.main_view, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <View style={[styles.inner_view_row, {marginTop: 2, padding: 10, alignItems: 'center', justifyContent: "space-between", marginRight: 15}]}>
                <BetaText font_Size='big' style={{textAlign: "left", fontWeight: 700}}>Welcome</BetaText>  
                <View style={{marginLeft: 30}}>
                <ChatBubble />
                </View>
            </View>
            <View>
                <BetaText font_Size='medium' style={{textAlign: "left", fontWeight: 500}}>Enter Your email address</BetaText>
            </View>
            <View>
                <BetaText font_Size='medsmall' font_Weight='' style={{textAlign: "left", opacity: 0.5, paddingHorizontal: 7, marginVertical: 3}}>Email</BetaText>
                <TextInput placeholder='✉ Enter your Email' style={{color: "white", marginLeft: 10, marginRight: 10, borderWidth: 0.5, borderColor: "white", borderRadius: 10, padding: 15, opacity: 0.9, fontSize: 18}}/>
            </View>
            <View style={{margin: 15, marginTop: 35, marginBottom: 20, borderRadius: "50%"}}>
            <Pressable style={({hovered, pressed} : any) => ({opacity: pressed? 0.7 : 1, backgroundColor: "#282275", borderRadius: 30, padding: 10,  marginLeft: 4, marginRight: 4,})} 
                       onPress={() => router.push("/(auth)/login")}>
                <BetaText font_Size='medium' font_Weight='large' style={{textAlign: "center", color: "white"}}>Continue</BetaText>
            </Pressable>
            </View>
            <TrustFooter />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main_view: {
        height: "100%",
        width: "100%",
        padding: 10,
        backgroundColor: XendColors.background
    },
    inner_view_row: {
        flexDirection: "row",

    },
    inner_view_column: {
        flexDirection: "column"
    }
})
