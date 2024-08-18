import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import StyledInput from '../components/styled-input';
import StyledButton from '../components/styled-button';
import { router } from 'expo-router';
import StyledTitle from '../components/styled-title';

export default function Login() {
  const logo = require('../assets/logo/logoImage.png')
  const handleLogin = () => {
    router.replace('home');
  }

  return (
    <View style={styles.container}>
      <Image
        alt='Logo do projeto, representa um átomo com um circulo no meio e espirais em volta'
        style={styles.logo}
        source={logo} />
      <StyledTitle text='Faça seu login' />
      <StyledInput placeholder='Digite seu login' onChangeText={() => console.log('foi')} />
      <StyledInput placeholder='Digite sua senha' onChangeText={() => console.log('foi')} />
      <StyledButton text='Enviar' color='blue' onClick={handleLogin} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    resizeMode: 'contain',
    height: 66,
    marginBottom: 25
  }
});
