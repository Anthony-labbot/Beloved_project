import { BetaText } from '@/components/betaText';
import { XendColors } from '@/constants/xend-theme';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, LinkTrigger, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function Referral() {
    const insets = useSafeAreaInsets()
    const router = useRouter()
    const referralCode = "XEND-ANTHONY-1234"
    const referrals = "0"
    const points = "0"

    return(
        <View style={{backgroundColor: "black",
                     height: "100%",
                     paddingTop: insets.top, 
                     paddingBottom: insets.bottom, 
                     paddingHorizontal: 15}}>
            <ScrollView>
                <View style={[{paddingTop: insets.top}, styles.header]}>
                    <BetaText font_Size="big" style={{textAlign: "left", fontWeight: 700}}>Referral</BetaText>
                    <BetaText font_Weight="small" style={{textAlign: "left", opacity: 0.6, fontSize: 18, paddingVertical: 5}}>Share your code and earn rewards with every friend who joins.</BetaText>
                </View>
                <Pressable style={styles.blue_box}>
                        <View style={styles.gift_box}>
                        <MaterialCommunityIcons name="gift" size={24} color="blue" />
                        </View>
                        <View style={styles.gift_text_view}>
                            <BetaText font_Weight="large" style={{textAlign: "left", fontSize: 20, marginBottom: 7}}>Rewards</BetaText>
                            <BetaText font_Weight="small" style={{textAlign: "left", opacity: 0.9, fontSize: 13}}>Let&apos;s grow together &mdash; refer your friends and family with your referral code</BetaText>
                        </View>
                </Pressable>
                <View style={styles.refcode_box}>
                    <BetaText font_Size="medsmall" font_Weight='small' style={{opacity: 0.7}}>Your referral code</BetaText>
                    <BetaText font_Weight="large" style={{letterSpacing: 1, fontSize: 21, paddingVertical: 9}}>{referralCode}</BetaText>
                    <Link href=".." style={{color: "blue"}}>
                        <LinkTrigger>
                        <BetaText style={{color: "#3137f5", fontWeight: 500, fontSize: 17}}>
                            <Feather name="copy" size={20} color="blue" />
                             Copy code
                        </BetaText>
                        </LinkTrigger>
                    </Link>
                </View>
                
                <View style={styles.lil_box_container}>
                    <View style={styles.lil_box}>
                        <BetaText font_Size="big" font_Weight="large">{referrals}</BetaText>
                        <BetaText style={{opacity: 0.7}}>Referrals</BetaText>
                    </View>
                    <View style={styles.lil_box}>
                        <BetaText font_Size="big" font_Weight="large">{points}</BetaText>
                        <BetaText style={{opacity: 0.7}}>Points</BetaText>
                    </View> 
                </View>
                <Pressable style={styles.link_button} onPress={() => router.push("/(auth)/welcome")}>
                    <BetaText style={{fontSize: 16, fontWeight: 600}}>Share invite link</BetaText>
                </Pressable>  
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "column",
        width: "100%",
        marginBottom: 15
    },
    share_text: {
        opacity: 0.7
    },
    blue_box: {
        backgroundColor: "#2a7ddb",
        borderRadius: 15,
        padding: 12,
        paddingHorizontal: 15,
        flexDirection: "row",
        marginVertical: 10,
        height: 110
    },

    gift_box: {
        padding: 16,
        backgroundColor: "white",
        borderRadius: 10,
        marginVertical: "4.2%",
        alignItems: "center",
    },
    gift_text_view: {
        flexDirection: "column",
        marginHorizontal: 15,
        marginVertical: 6,
        paddingRight: 10,
        flex: 1
    },

    refcode_box: {
        backgroundColor: XendColors.card,
        padding: 20,
        borderWidth: 1,
        borderColor: "#3d3d3d",
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "flex-start",
        height: 125
    },
    lil_box_container: {
        marginVertical: 10,
        flex: 1,
        height: 80,
        flexDirection: "row",
        gap: 10
    },
    lil_box: {
        backgroundColor: XendColors.card,
        borderWidth: 1,
        borderColor: "#3d3d3d",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: 80,
        borderRadius: 10
    },
    link_button: {
        backgroundColor: "#2a7ddb",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        height: 50,
        marginVertical: 10,
    }
});