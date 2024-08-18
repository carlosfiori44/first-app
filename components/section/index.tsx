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

const { width, height } = Dimensions.get('window');

const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 'auto',
        marginVertical: 20
    },

    image: {
        resizeMode: 'center',
        height: width*0.2,
        width: height*0.15
    },

    text: {
        fontSize: 12,
        textAlign: 'justify'
    },

    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'auto'
    },

    textContainer: {
        flex: 2,
        paddingHorizontal: 10
    }
})