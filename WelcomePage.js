import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable} from 'react-native';

const WelcomePage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('./components/images/CachorroFazendoTocaAqui.png')} style={styles.image}/>
      </View>

      <View style={styles.body}>
        <Text style={styles.bodyTitle}>Bem Vindo!</Text>
        <Text style={styles.bodyText}>Olá, que bom que você veio!
Aqui você encontra o seu melhor amigo.</Text>
      </View>
      <Pressable onPress={() => navigation.navigate('LoginModePage')} style={styles.inicialbutton}>
      <View style={styles.inicialbutton}>
        <Text style={styles.textoButton}>Próximo</Text>
      </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
    paddingTop: 85
  },
  image: {
    width: '100%', // Ajuste conforme necessário
    height: undefined, // Importante para manter a proporção
    aspectRatio: 1, // Proporção da imagem (largura / altura)
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'flex-start',
    paddingLeft: 30
  },
  bodyText: {
    fontSize: 25,
    fontWeight: 200
  },
  bodyTitle:{
    alignSelf: 'flex-start',
    color: '#04A69F',
    fontSize: 40,
    fontWeight: 700
  },
  footer: {
    height: 50,
    backgroundColor: '#04A69F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  },
  inicialbutton: {
    justifyContent: 'center',
    width: '100%',
    height: 110,
    backgroundColor: '#04A69F',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
    textoButton: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 600
  }
});

export default WelcomePage;