import React , {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, Pressable, ScrollView} from 'react-native';

const CatalogPage = ({navigation, route}) => {
const { nome = 'Josemir Amorim', cep = '12345-789', telefone = '(11) 12345-6789', email = 'josemir@gmail.com', data = 'Sem ', hora = 'Agendamento'} = route.params || {};

const [showElement, setShowElement] = useState(true);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
      <Pressable onPress={()=>{
        navigation.navigate('UserInfoPage', {data, hora, nome, telefone, cep, telefone, email})
      }}>
        <Text style={styles.bodyTitle}>
          {nome}
        </Text>
        <Text style={styles.bodyText}>
          {cep}
        </Text>
      </Pressable>
      <Pressable onPress={()=> {
        navigation.navigate('SearchPetPage')
      }} style={{justifyContent: 'center', alignSelf: 'center'}}>
        <Text style={styles.bodyText}>Pesquisar</Text>
      </Pressable>
      </View>
      <View>
        <Text style={styles.bodyTitle2}>
          Catálogo
        </Text>
        </View>
       

      <ScrollView style={{marginLeft: 20}}>
        <Pressable onPress={ ()=> {
          navigation.navigate('DetailsPage')
        }} style={styles.listContainer}>
          <Image source={require('./components/images/dog1.png')} style={styles.image}/>
          <View style={styles.listTextContainer}>
            <Text style={{fontWeight: 700, fontSize: 30, marginLeft: 10, color: '#fff'}}>Luna, 3 anos</Text>
            <Text style={{fontWeight: 400, fontSize: 20, marginLeft: 10, color: '#fff'}}>Guarapiranga - São Paulo </Text>
          </View>
        </Pressable>
        <Pressable style={styles.listContainer}>
          <Image source={require('./components/images/dog2.png')} style={styles.image}/>
          <View style={styles.listTextContainer}>
            <Text style={{fontWeight: 700, fontSize: 30, marginLeft: 10, color: '#fff'}}>Thor, 1 ano</Text>
            <Text style={{fontWeight: 400, fontSize: 20, marginLeft: 10, color: '#fff'}}>Guarapiranga - São Paulo </Text>
          </View>
        </Pressable>
        <Pressable style={styles.listContainer}>
          <Image source={require('./components/images/dog3.png')} style={styles.image}/>
          <View style={styles.listTextContainer}>
            <Text style={{fontWeight: 700, fontSize: 30, marginLeft: 10, color: '#fff'}}>Mel, 1 ano</Text>
            <Text style={{fontWeight: 400, fontSize: 20, marginLeft: 10, color: '#fff'}}>Guarapiranga - São Paulo </Text>
          </View>
        </Pressable>
        {showElement && (
       <Pressable style={styles.listContainer} onPress={()=> {
         alert('Item removido...')
         setShowElement(false)
         
       }}>
       
          <Image source={require('./components/images/cat1.png')} style={styles.image}/>
            <View style={styles.listTextContainer}>
            <Text style={{fontWeight: 700, fontSize: 30, marginLeft: 10, color: '#fff'}}>Mingau, 6 meses</Text>
            <Text style={{fontWeight: 400, fontSize: 20, marginLeft: 10, color: '#fff'}}>Guarapiranga - São Paulo </Text>
          </View>
          </Pressable>)}
      </ScrollView>
        
      <Pressable onPress={()=>{
        navigation.navigate('AddAnimalPage')
        setShowElement(true)
      }} style={{justifyContent: 'center', backgroundColor: '#04A69F', alignContent: 'center', alignItems: 'center', alignSelf: 'center', width: 375, borderRadius: 25, height: 60}}>
        <Text style={{fontWeight: 700, fontSize: 30, marginLeft: 10, color: '#fff'}}>
          Adicionar Animal
        </Text>
      </Pressable>
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
    borderBottomRightRadius: 0
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 30,
    marginRight: 30,
  },
  listTextContainer: {
    justifyContent: 'space-evenly',
    backgroundColor: '#04A69F',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 50
  },
  container: {
   
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
    paddingTop: 50,
    gap: 35
  },
  titleContainer: {
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
export default CatalogPage