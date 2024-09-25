import StyledButton from "@/components/styled-button";
import { Text } from "@/components/ui/text";
import { CameraView, useCameraPermissions } from "expo-camera"
import { useState } from "react";
import { Image, View } from "react-native";

export default function Camera() {
    const [perm, reqPerm] = useCameraPermissions();
    const [link, setLink] = useState<string>('');
    let camera: CameraView | null;

    const takePicture = async () => {
        if (perm) {
            const photo = await camera?.takePictureAsync();
            console.log(photo);

            if (photo) {
                setLink(photo.uri);
            }
        } else {
            alert('Not')
        }
    }

    if (!perm) return <></>

    return (
        <View>
            <CameraView facing="front" ref={(ref) => { camera = ref }}
                style={{ width: 300, height: 300 }}
            />
            <StyledButton text="Tirar foto" onClick={takePicture} />
            <Text>Teste</Text>
            <Image source={link ? {uri: link} : require('../assets/logo/logoImage.png')} 
                   style={{ resizeMode: 'cover', height: 100, width: 100}} />
        </View>
    )
}