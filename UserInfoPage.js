import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View} from 'react-native';

const UserInfoPage = ({route}) => {
const { nome = 'Josemir Amorim', cep = '12345-789', email = 'josemir@gmail.com', telefone = '(11) 12345-6789', data = 'Sem ', hora = 'Agendamento'} = route.params || {};

const [data2, useData2] = useState(data)
const [hora2, useHora2] = useState(hora)
const formatDate = () => {
  if(data2 != 'Sem '){
    // Divida a data em partes (ano, mês, dia)
    const [year, month, day] = data2.split('-');
    return `${day}/${month}/${year}`;
  }
  return data2
  };
  return (
    <SafeAreaView style={styles.container}>
        <View style={{justifyContent: 'center', alignContent: 'center'}}> 
        <Text style={styles.bodyTitle2}>
          {nome}
        </Text>
        <Image source={require('./components/images/DonoComSeuCachorro.png')} style={styles.image}/>
        </View>
        
        <View style={styles.listContainer}>
        <View style={styles.listTextContainer}>
        <Text onPress={()=> {
          alert('Removendo o agendamento...')
          useData2('Sem ')
          useHora2('Agendamento')
        }}
        style={{fontWeight: 700, fontSize: 15, marginLeft: 10, color: '#fff'}}> 
              Agendamento: {formatDate()} {hora2}
                      </Text>
        </View>
        <View style={styles.listTextContainer}>
        <Text style={{fontWeight: 700, fontSize: 15, marginLeft: 10, color: '#fff'}}>
          CEP: {cep}
        </Text>
        </View>
        <View style={styles.listTextContainer}>
        <Text style={{fontWeight: 700, fontSize: 15, marginLeft: 10, color: '#fff'}}>
          Email: {email}
        </Text>
        </View>
        <View style={styles.listTextContainer}>
        <Text style={{fontWeight: 700, fontSize: 15, marginLeft: 10, color: '#fff'}}>
          Telefone: {telefone}
        </Text>
        </View>
        
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '30%', // Ajuste conforme necessário
    height: '60%', // Importante para manter a proporção
    aspectRatio: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomLeftRadius:20,
    borderBottomRightRadius: 0,
    marginLeft: 30
  },
  listContainer: {
    flex: 1,
    marginBottom: 30,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listTextContainer: {
    backgroundColor: '#04A69F',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: 300,
    height: 65,
    padding: 10,
    marginTop: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingTop: 50,
    gap: 0
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
});
export default UserInfoPage;