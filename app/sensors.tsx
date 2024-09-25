import { Text } from "@/components/ui/text"
import styles from "@/styles"
import { View } from "react-native"
import { Accelerometer, Gyroscope } from "expo-sensors"
import { useState } from "react"

export default function Sensors() {
    const [gData, setData] = useState({x: 0, y: 0, z: 0});
    const [aData, setDataAc] = useState({x: 0, y: 0, z: 0});

    Gyroscope.setUpdateInterval(100); // Tempo de update
    Gyroscope.addListener((data) => {
        setData(data);
    });

    Accelerometer.setUpdateInterval(10000);
    Accelerometer.addListener((data) => {
        setDataAc(data);
    });

    return (
        <View style={styles.container}>
            <Text>Sensores</Text>
            <Text>X: {gData.x}</Text>
            <Text>Y: {gData.y}</Text>
            <Text>Z: {gData.z}</Text>
            <Text>Xa: {aData.x}</Text>
            <Text>Ya: {aData.y}</Text>
            <Text>Za: {aData.z}</Text>
        </View>
    )
}
