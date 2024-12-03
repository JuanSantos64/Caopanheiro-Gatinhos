import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, TextInput} from 'react-native';

const SignUpPage= ({navigation}) => {
  const [nome, setNome] = useState('')
  const [cep, setCep] = useState('')  
  const [celular, setCelular] = useState('')
  const [senha, setSenha] = useState('')
  const [email, setEmail] = useState('')


    const handleCep = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    setCep(value);
    };

    const handlePhone = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    setCelular(value);
    }; 
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.bodyTitle}>Cadastro</Text>
      </View>

    <View style={styles.body}> 
      <TextInput
      value={nome}
      onChangeText={setNome}
      style={styles.input}
      placeholder="Nome"
      />
      <TextInput
      value={email}
      onChangeText={setEmail}
      style={styles.input}
      placeholder="E-mail"
      />
      <TextInput
      value={celular}
      maxLength={15}
      keyboardType="numeric"
      onChangeText={(value) => handlePhone(value)}
      style={styles.input}
      placeholder="Telefone"
      />
      <TextInput
      value={cep}
      maxLength={9}
      keyboardType="numeric"
      onChangeText={(value) => handleCep(value)}
      style={styles.input}
      placeholder="CEP"
      />
      <TextInput
      value={senha}
      onChangeText={setSenha}
      style={styles.input}
      placeholder="Senha"
      />
    </View>
      <View style={styles.body}>
        <Pressable onPress={()=> navigation.navigate('CatalogPage', {
          nome: nome,
          email: email,
          celular: celular,
          cep: cep
        })} style={styles.inicialbutton}>
          <Text style={styles.textoButton}>Cadastrar</Text>
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
    paddingTop: 85,
    gap: 50
  },
    bodyTitle:{
    alignSelf: 'flex-start',
    color: '#04A69F',
    fontSize: 40,
    fontWeight: 700,
    paddingLeft: 30,
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

export default SignUpPage;