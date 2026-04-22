import { XendColors } from "@/constants/xend-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View, ViewProps } from "react-native";

type Props = {
    icon_name: string;
    title: string,
    cash: string,
    comment: string;

} & ViewProps

export function Plancard_({
    icon_name,
    title,
    cash,
    comment
}: Props) {
    return (
        <Pressable>
          <View style={styles.box}>
            <Text style={styles.head}>{title}</Text>
            <Text style={styles.lower}>{cash}</Text>
            <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
                <View style={[styles.icon, {backgroundColor: "blue", opacity: 0.7}]}>
                <MaterialIcons name={icon_name as any} size={25} color="white"/>
                </View>
                <Text  style={styles.lower_text}>{comment}</Text>
            </View>
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
        width: 33,
        height: 32,
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        margin: 3
    },
    head: {
        fontSize: 12,
        fontWeight: 300,
        opacity: 0.7,
        color: "white",
        paddingTop: 5,
        paddingLeft: 8,
        letterSpacing: 1.5
    },

    lower: {
        fontSize: 30,
        fontWeight: 700,
        color: "white",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 8
    },

    lower_text: {
        color: "white",
        fontSize: 11,
        fontWeight: 600,
    }

})