import { StyleSheet, Text, type TextProps } from "react-native";

export type betaTextProps = TextProps & {
  font_Size?: string | number,
  font_Weight?: string | number,
};

export function BetaText({
    style,
    font_Size,
    font_Weight,
    children,
    ...rest
}: betaTextProps) {
    return(
        <Text style={[
            {color: "white"},
            {textAlign: "center"},
            font_Size === "big"? styles.big_size : undefined,
            font_Size === "medium"? styles.medium_size : undefined,
            font_Size === "small"? styles.small_size : undefined,
            font_Size === "medsmall"? styles.medsmall : undefined,
            font_Weight === "large"? styles.large_weight : undefined,
            font_Weight === "medium"? styles.medium_weight : undefined,
            font_Weight === "small"? styles.small_weight : undefined,
            style
        ]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    big_size:{
        fontSize: 34,
    },

    medium_size:{
        fontSize: 18,
        padding: 7.5
    },

    medsmall:{
        fontSize: 13,
    },

    small_size:{
        fontSize: 10,
        padding: 5
    },

    large_weight:{
        fontWeight: 800,
        fontFamily: "Arial Black"
    },

    medium_weight:{
        fontWeight: "medium",
        fontFamily: "Arial"
    },

    small_weight:{
        fontWeight: "light",
        fontFamily: "Calibri"
    }
})