import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Início',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />
                }}
            />
            <Tabs.Screen
                name="configuration"
                options={{
                    title: 'Configuração',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />
                }}
            />
            <Tabs.Screen
                name="videos"
                options={{
                    title: 'Vídeos',
                    tabBarIcon: ({ color }) =>
                        <FontAwesome size={28} name="youtube-play" color={color} />,
                }}
            />
            <Tabs.Screen
                name="fotos"
                options={{
                    title: 'Fotos',
                    tabBarIcon: ({ color }) =>
                        <FontAwesome size={28} name="photo" color={color} />,
                }}
            />
        </Tabs>
    )
}