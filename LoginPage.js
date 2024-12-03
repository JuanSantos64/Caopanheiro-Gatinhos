import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, TextInput} from 'react-native';

const LoginPage= ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('./components/images/DonoComSeuCachorro.png')} style={styles.image} />
      </View>

    <View style={styles.body}> 
      <TextInput
      style={styles.input}
      placeholder="e-mail"
      />
      <TextInput
      secureTextEntry={true}
      style={styles.input}
      placeholder="senha"
      />
    </View>
      <View style={styles.body}>
        <Pressable onPress={()=>{
          navigation.navigate('CatalogPage')
        }} style={styles.inicialbutton}>
          <Text style={styles.textoButton}>Login</Text>
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
    textoButton: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 600
  },
  input: {
    height: 60,
    fontSize: 15,
    width:'85%',
    paddingLeft: 15,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.2,
    borderRightWidth: 0.7,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor:'#BDC3C7',
  },
});

export default LoginPage;