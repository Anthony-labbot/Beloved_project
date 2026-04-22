import { BetaText } from '@/components/betaText';
import { Plancard } from '@/components/Plancard';
import { Plancard_ } from '@/components/Plancard2';
import { XendColors } from '@/constants/xend-theme';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Plans() {
    const amount = "0.00"
    const insets = useSafeAreaInsets();
    const updated = "(Apr 13, 2026 02:43 AM)"
    return(
        <View style={[{backgroundColor: "#0B0B0F", height: "100%", width: "100%", padding: 10, paddingTop: insets.top, paddingBottom: insets.bottom, paddingHorizontal: 10}]}>  
            <View style={{paddingHorizontal: 10}}>
                <BetaText style={{fontWeight: 700, fontSize: 40, textAlign: "left"}}>Plans</BetaText>    
            </View> 
            <View style={styles.bluecard}>
                <Text style={styles.savingtext}>SAVINGS PLAN</Text>
                <Text style={styles.usdtext}>USD {amount}</Text>
            </View>
            <View style={{flexDirection: "row", width: "100%"}}>      
                <View style={{width: "50%"}}>
                    <Plancard icon_name='savings' iconbg_color='#fcd4ac' border_color='orange' head_text='Create Plan' comment='Create a new fixed savings plan' head_color='orange'/>
                </View>
                <View style={{width: "50%"}}>
                    <Plancard icon_name='calculate' iconbg_color='#1f1a63' border_color='blue' head_text='Interest Calculator' comment='Calculate the interest on your savings' head_color='white'/>
                </View>
            </View> 

            <BetaText font_Size="small" font_Weight="medium" style={{opacity: 0.6, marginTop: 10, marginBottom: 10, textAlign: "left", letterSpacing: 1.5}}>ALL SAVINGS PLANS</BetaText>

            <View style={{flexDirection: "row", width: "100%"}}>      
                <View style={{width: "50%"}}>
                    <Plancard_ icon_name='add' title="FLEXIBLE SAVINGS" cash='$0.00' comment='ADD FUNDS'/>
                </View>
                <View style={{width: "50%"}}>
                    <Plancard_ icon_name='menu' title='FIXED SAVINGS' cash='$0.00' comment='VIEW ALL PLANS'/>
                </View>
            </View> 
            
            <BetaText font_Size="small" font_Weight="medium" style={{opacity: 0.6, marginTop: 10, marginBottom: 10, textAlign: "left", letterSpacing: 1.5}}>TODAY&apos;S RATE</BetaText>

            <Text style={styles.btmtext}>This rate is updated daily {updated}</Text>
        </View>
        
    )

}

const styles = StyleSheet.create({
    bluecard: {
        backgroundColor: XendColors.primaryBlueAlt,
        padding: 20,
        borderRadius: 10,
        width: "96%",
        height: 100,
        margin: 8,
        marginBottom: 13
    },

    savingtext: {
        color: "white",
        opacity: 0.9,
        fontSize: 11,
        fontWeight: 400,
        letterSpacing: 1
    },
    
    usdtext: {
        color: "white",
        fontSize: 28,
        letterSpacing: 1.5,
        fontWeight: 700,
        paddingTop: 5
    },

    box: {
        width: "100%",
        height: 170,
        borderWidth: 1,
        borderRadius: 15,
        margin: 5,
        padding: 15,
        flexDirection: "column",
        backgroundColor: XendColors.card
        },
    icon: {
        width: 35,
        height: 35,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 5
    },
    head: {
        fontSize: 19,
        fontWeight: 500,
    },
    lower: {
        fontSize: 16,
        fontWeight: 300,
        opacity: 0.7,
        color: "white"
    },

    btmtext: {
        color: 'white',
        opacity: 0.7,
        fontSize: 10,
        margin: 7,
        marginTop: -3
    }
})