import { View, Text, StyleSheet } from 'react-native';

export default function Fotos() {
  return (
    <View style={styles.container}>
      <Text>Tab Fotos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});