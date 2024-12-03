import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable} from 'react-native';

const LoginModePage= ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('./components/images/LOGOADOTEUMPET.png')} style={styles.image} />
      </View>

      <View style={styles.body}>
        <Pressable onPress={()=> navigation.navigate('LoginPage')} style={styles.inicialbutton}>
          <Text style={styles.textoButton}>Login</Text>
        </Pressable>
        <Pressable onPress={()=> navigation.navigate('SignUpPage')} style={styles.cadastrarbutton}>
          <Text style={styles.textoCadastrar}>Cadastrar</Text>
        </Pressable>
      </View>
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
  body: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    gap: 10
  },
  inicialbutton: {
    justifyContent: 'center',
    width: '85%',
    height: 90,
    backgroundColor: '#04A69F',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius:50,
    borderBottomRightRadius: 50
  },
  cadastrarbutton: {
    justifyContent: 'center',
    width: '85%',
    height: 90,
    borderColor: 'black',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius:50,
    borderBottomRightRadius: 50,
    borderWidth: 3.5,
  },
    textoButton: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 600
  },
    textoCadastrar: {
    color: '#04A69F',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 600
  }
});

export default LoginModePage;