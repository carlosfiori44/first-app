import { StyleSheet } from "react-native";
import { Button, ButtonText } from "../ui/button";

interface StyledButtonProps {
    text: string
    onClick: () => void
    color?: string

}

export default function StyledButton({text, onClick, color, ...rest}: StyledButtonProps) {
    return(
        <Button style={[style.button, {backgroundColor: color ? color : "black"}, {...rest}]} onPress={onClick}>
            <ButtonText>{text}</ButtonText>
        </Button>
    )
}

const style = StyleSheet.create({
    button: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})