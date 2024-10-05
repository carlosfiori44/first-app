import StyledButton from "@/components/styled-button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CameraView, useCameraPermissions } from "expo-camera"
import { useEffect, useState } from "react";
import { View } from "react-native";
import * as FileSystem from 'expo-file-system'
import { ScrollView } from "react-native";

export default function Camera() {
    const [perm, reqPerm] = useCameraPermissions();
    const [photo, setPhoto] = useState<string | null>(null);
    const [photos, setPhotos] = useState<string[]>([]);

    const photoFileName = FileSystem.documentDirectory + 'photo.jpg'

    let camera: CameraView | null;

    const takePicture = async () => {
        if (perm) {
            const photo = await camera?.takePictureAsync();

            if (photo?.uri) {
                setPhotos([...photos, photo.uri]);

                setPhoto(photo.uri);

                await FileSystem.copyAsync({
                    from: photo.uri,
                    to: photoFileName
                })
            }
        } else {
            alert('No permission')
        }
    }

    const verifyPhoto = async () => {
        const file = await FileSystem.getInfoAsync(photoFileName);

        if (file.exists) {
            setPhoto(file.uri);
        }
    }

    useEffect(() => {
        verifyPhoto();
    }, []);

    if (!perm) return <></>

    return (
        <View style={{ flex: 1, alignItems: 'center', }}>
            <CameraView facing="front" ref={(ref) => { camera = ref }}
                style={{ width: 300, height: 300 }}
            />
            <StyledButton text="Tirar foto" onClick={takePicture} />
            {/* {photo && <Avatar style={{ width: 350, height: 350 }}><AvatarImage source={{ uri: photo }} /></Avatar>} */}
            <ScrollView>
                <View style={{flex: 1, direction: 'ltr'}}>
                    {photos && photos.map((p) => (
                        <Avatar size="2xl"><AvatarImage source={{ uri: p }} /></Avatar>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}