import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Login } from './src/telas/login';
import ImagemFundo from "./assets/imagens/fundo.png";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={ImagemFundo}>

        <Login />
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBCBCB',

    //alignItems: 'center',

    alignContent: "center",
  },
  image: {
    flex: 1,
    //height: "90%",
    //width: "90%",
    justifyContent: 'center',
    bottom: 0,
  }
});
