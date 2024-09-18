import { Slot } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { AuthProvider } from "@/context/auth";

export default function Layout() {
    return (
        <GluestackUIProvider mode="light">
            <AuthProvider><Slot /></AuthProvider>
        </GluestackUIProvider>
    )
}