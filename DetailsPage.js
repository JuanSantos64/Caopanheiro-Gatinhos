import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, Pressable, TextInput, ScrollView} from 'react-native';

const DetailsPage = ({navigation, route}) => {
const { nome = 'Josemir Amorim', cep = '12345-789' } = route.params || {};
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
    
      <View style={styles.titleContainer}>
      <View>
        <Text style={styles.bodyTitle}>
          {nome}
        </Text>
        <Text style={styles.bodyText}>
          {cep}
        </Text>
      </View>
      </View>
      <View>
        <Text style={styles.bodyTitle2}>
          Luna, 3 anos
        </Text>
        </View>
      
      <Image source={require('./components/images/dog1.png')} style={styles.image} />

      <View style={styles.listTextContainer}>
      <Text style={{fontSize: 13}}>
      Uma cadelinha cheia de energia e amor! Luna é super brincalhona e adora explorar novos lugares. Ela é perfeita para quem ama passeios ao ar livre e está sempre pronto para uma aventura. Além disso, é muito carinhosa e se dá bem com outros animais.
      </Text>
      </View>

      <Text style={{ alignSelf: 'center',
    color: '#04A69F',
    fontSize: 30,
    fontWeight: 700,
    paddingLeft: 30,
    paddingRight: 30}}>Contato
    </Text>

    <View style={styles.listTextContainer}>
      <View style={{paddingHorizontal: 30, marginVertical: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{marginRight: 10}}> 
          <Text>Whatsapp:</Text>
          <Text>(11) 97088-9121</Text>
          <Text>Email:</Text>
          <Text>jailson@gmail.com</Text>
          <Text>Telefone:</Text>
          <Text>5521-2552</Text>
      </View>
      <Pressable onPress={ ()=> {
        navigation.navigate('CalendarPage')
      }} style={{borderLeftWidth: 1 ,width: 'auto', alignContent: 'center'}}>
      <Text> </Text>
      <Text> </Text>
        <Text style={{alignSelf: 'center', marginLeft: 5}}>Agendar Visita</Text>
      </Pressable>
    </View>
    </View>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: '80%', // Ajuste conforme necessário
    height: undefined, // Importante para manter a proporção
    aspectRatio: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius: 20
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 30,
    marginRight: 30,
  },
  listTextContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#04A69F',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius: 20,
    marginHorizontal: 40
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
    paddingTop: 50,
    gap: 15
  },
  titleContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
  },
    bodyTitle:{
    alignSelf: 'flex-start',
    color: '#04A69F',
    fontSize: 30,
    fontWeight: 700,
    paddingLeft: 30,
    paddingRight: 30
  },
    bodyTitle2:{
    alignSelf: 'center',
    color: '#04A69F',
    fontSize: 40,
    fontWeight: 700,
    paddingLeft: 30,
    paddingRight: 30
  },
   bodyText: {
    color: '#04A69F',
    fontSize: 15,
    fontWeight: 400,
    paddingLeft: 30,
    paddingRight: 30,
  },
  bodyText2: {
    fontSize: 15,
    fontWeight: '400',
  },
  bodyTextItalic: {
    color: '#04A69F',
    fontStyle: 'italic',
    fontSize: 25,
    fontWeight: '200',
  },
  body: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    gap: 10
  },
  inicialbutton: {
    marginTop: 50,
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
export default DetailsPage