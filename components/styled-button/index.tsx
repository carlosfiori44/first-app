import { Text, Pressable, StyleSheet } from "react-native";

interface StyledButtonProps {
    text: string
    onClick: () => void
    color?: string

}

export default function StyledButton({text, onClick, color, ...rest}: StyledButtonProps) {
    return(
        <Pressable style={[style.button, {backgroundColor: color ? color : "black"}, {...rest}]} onPress={onClick}>
            <Text style={[style.text, {}]}>{text}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    button: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3
    },

    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    shadow: {
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    }
})