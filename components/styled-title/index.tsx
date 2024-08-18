import { StyleSheet, Text, TextProps } from "react-native";

interface StyledButtonProps extends TextProps{
    text: string
    color?: string
}

export default function StyledTitle({text, color, ...rest}: StyledButtonProps) {
    return(
        <Text
        style={[style.text, {color: color}]}
        {...rest}>
            {text}
        </Text>
    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})