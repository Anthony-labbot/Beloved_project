import { XendColors } from "@/constants/xend-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View, ViewProps } from "react-native";

type Props = {
    icon_name: string;
    iconbg_color: string;
    border_color?: string;
    head_text: string;
    head_color: string;
    comment: string;
} & ViewProps

export function Plancard({
    icon_name,
    border_color,
    head_text,
    head_color,
    iconbg_color,
    comment
}: Props) {
    const border_clr = border_color
    const h_color = head_color
    const icn_bgcolor = iconbg_color
    return (
        <Pressable>
          <View style={[styles.box, {borderColor: border_clr}]}>
            <View style={[styles.icon, {backgroundColor: icn_bgcolor}]}>
            <MaterialIcons name={icon_name as any} size={25} color={border_clr}/>
            </View>
            <Text style={[styles.head, {color: h_color}]}>{head_text}</Text>
            <Text style={styles.lower}>{comment}</Text>
          </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    box: {
        width: "auto",
        height: 155,
        borderWidth: 1,
        borderRadius: 15,
        margin: 5,
        padding: 10,
        flexDirection: "column",
        backgroundColor: XendColors.card,
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
        fontSize: 16,
        fontWeight: 500,
        marginTop: 4,
        marginBottom: 4,
        paddingRight: 20
    },
    lower: {
        fontSize: 13,
        fontWeight: 300,
        opacity: 0.7,
        color: "white",
        paddingRight: 10
    }

})