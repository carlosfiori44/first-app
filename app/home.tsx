import { ScrollView, StyleSheet, View } from "react-native";
import StyledButton from "../components/styled-button";
import { Link, router } from "expo-router";
import Section from "../components/section";
import StyledTitle from "../components/styled-title";
import { useEffect, useState } from "react";

interface IPost {
    id: number
    title: string
    status: string
}

export default function Home() {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.org/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, []);

    const img1 = require('../assets/sections-images/coffee.png');
    const img2 = require('../assets/sections-images/tea.jpg');
    const img3 = require('../assets/sections-images/lemon.png');
    const img4 = require('../assets/sections-images/orange.jpg');

    return (
        <View style={style.container}>
            <StyledTitle text="Lista de itens" />
            <Link href={'/sensors'}>Sensores</Link>
            <Link href={'/camera'}>Camera</Link>
            <ScrollView>
                {
                    posts.map((post) => (
                        <Section key={post.id} texto={post.title} />
                    ))
                }
                <Section imageSrc={img1} texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <Section imageSrc={img2} texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <Section imageSrc={img3} texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                <Section imageSrc={img4} texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </ScrollView>
            <StyledButton text="Voltar" color="blue" onClick={() => { router.replace('/') }} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1
    }
})