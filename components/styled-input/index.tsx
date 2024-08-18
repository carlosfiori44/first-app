import { TextInput, StyleSheet } from "react-native";

interface StyledInputProps {
    placeholder: string
    onChangeText: (text: string) => void
}

export default function StyledInput({ placeholder, onChangeText }: StyledInputProps) {
    return (

        <TextInput
            style={[styles.input, styles.shadow]}
            placeholder={placeholder}
            onChangeText={onChangeText}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
    },

    shadow: {
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    }
})