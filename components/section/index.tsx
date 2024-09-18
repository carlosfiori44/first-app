import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

interface SectionProps {
    texto: string
    imageSrc?: typeof require
}

export default function Section({ texto, imageSrc }: SectionProps) {
    const image = imageSrc || require('../../assets/logo/logoImage.png');

    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <Image style={style.image} source={image} />
            </View>
            <View style={style.textContainer}>
                <Text style={style.text}>{texto}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: Dimensions.get('window').height*0.10,
        marginVertical: 20
    },

    image: {
        resizeMode: 'cover',
        height: '90%',
        width: '90%',
        borderRadius: 10
    },

    text: {
        fontSize: 12,
        textAlign: 'justify',        
    },

    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },

    textContainer: {
        flex: 2,
        paddingHorizontal: 10
    }
})