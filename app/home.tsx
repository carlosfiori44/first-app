import { Text, View } from "react-native";
import StyledButton from "../components/styled-button";
import { router } from "expo-router";

export default function Home() {
    return(
        <View>
            <Text>Login com sucesso!</Text>
            <StyledButton text="Voltar" color="blue" onClick={() => {router.replace('/')}} />
        </View>
    )
}