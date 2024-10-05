import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';
import StyledInput from '../components/styled-input';
import StyledButton from '../components/styled-button';
import StyledTitle from '../components/styled-title';
import { useAuth } from '@/context/auth';

export default function Login() {
  const auth = useAuth();
  const logo = require('../assets/logo/logoImage.png')

  return (
    <View style={styles.container}>
      <Image
        alt='Logo do projeto, representa um átomo com um circulo no meio e espirais em volta'
        style={styles.logo}
        source={logo} />
      <StyledTitle text='Faça seu login' color='white' />
      <StyledInput placeholder='Digite seu login' onChangeText={(data) => auth.setUser({...auth.user, email: data})} />
      <StyledInput placeholder='Digite sua senha' onChangeText={(data) => auth.setUser({...auth.user, password: data})} />
      <StyledButton text='Enviar' color='#3399FF' onClick={auth.handleLogin} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16245E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    resizeMode: 'contain',
    height: 66,
    marginBottom: 25
  }
});
