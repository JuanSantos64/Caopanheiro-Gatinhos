import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, Pressable } from 'react-native';

const InicialPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <View/>
    <Image source={require('./components/images/Logo.png')} style={styles.image}/>
    <Pressable onPress={() => navigation.navigate('WelcomePage')} style={styles.inicialbutton}>
    <Text style={styles.textoButton}>INICIAR</Text>
    </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
    paddingTop: 8,
  },
  image: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: 25
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
export default InicialPage