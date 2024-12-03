import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';

const SearchPetPage = ({ navigation, route }) => {
  const { nome = 'Josemir Amorim'} = route.params || {};

  const [value, setValue] = useState(0);

  const idades = {
    0: '(6 meses)',
    25: '(6 meses - 2 anos)',
    50: '(6 meses - 4 anos)',
    75: '(6 meses - 6 anos)',
    100: '(6 meses - 8 anos)',
  }
  const currentText = idades[value];
  
  // Estados para controlar as cores dos botões
  const [dogButtonColor, setDogButtonColor] = useState('#D8D8D8');  
  const [catButtonColor, setCatButtonColor] = useState('#D8D8D8'); 
  const [machoButtonColor, setMachoButtonColor] = useState('#D8D8D8'); 
  const [femeaButtonColor, setFemeaButtonColor] = useState('#D8D8D8'); 
  const [ambosButtonColor, setAmbosButtonColor] = useState('#D8D8D8');
  const [pequenoButtonColor, setPequenoButtonColor] = useState('#D8D8D8');
  const [medioButtonColor, setMedioButtonColor] = useState('#D8D8D8');
  const [grandeButtonColor, setGrandeButtonColor] = useState('#D8D8D8');

  const handleDogPress = () => {
    // Muda a cor do botão de Cachorros e reseta a cor do botão de Gatos
    setDogButtonColor(prevColor => (prevColor === '#D8D8D8' ? '#04A69F' : '#D8D8D8'));
     // Reseta a cor do botão de Gatos
  };
  const handleCatPress = () => {
    // Muda a cor do botão de Gatos e reseta a cor do botão de Cachorros
    setCatButtonColor(prevColor => (prevColor === '#D8D8D8' ? '#04A69F' : '#D8D8D8'));
     // Reseta a cor do botão de Cachorros
  };
  const handleMachoPress = () => {
    // Muda a cor do botão de Gatos e reseta a cor do botão de Cachorros
    setMachoButtonColor(prevColor => (prevColor === '#D8D8D8' ? '#04A69F' : '#D8D8D8'));
    setFemeaButtonColor('#D8D8D8'); // Reseta a cor do botão de Cachorros
    setAmbosButtonColor('#D8D8D8'); // Reseta a cor do botão de Cachorros
  };
  const handleFemeaPress = () => {
    // Muda a cor do botão de Gatos e reseta a cor do botão de Cachorros
    setFemeaButtonColor(prevColor => (prevColor === '#D8D8D8' ? '#04A69F' : '#D8D8D8'));
    setMachoButtonColor('#D8D8D8'); // Reseta a cor do botão de Cachorros
    setAmbosButtonColor('#D8D8D8'); // Reseta a cor do botão de Cachorros
  };
  const handleAmbosPress = () => {
    // Muda a cor do botão de Gatos e reseta a cor do botão de Cachorros
    setAmbosButtonColor(prevColor => (prevColor === '#D8D8D8' ? '#04A69F' : '#D8D8D8'));
    setMachoButtonColor('#D8D8D8'); // Reseta a cor do botão de Cachorros
    setFemeaButtonColor('#D8D8D8'); // Reseta a cor do botão de Cachorros
  };
  const handlePequenoPress = () => {
    // Muda a cor do botão de Gatos e reseta a cor do botão de Cachorros
    setPequenoButtonColor(prevColor => (prevColor === '#D8D8D8' ? '#04A69F' : '#D8D8D8'));
    setMedioButtonColor('#D8D8D8'); // Reseta a cor do botão de Cachorros
    setGrandeButtonColor('#D8D8D8'); // Reseta a cor do botão de Cachorros
  };
  const handleMedioPress = () => {
    // Muda a cor do botão de Gatos e reseta a cor do botão de Cachorros
    setMedioButtonColor(prevColor => (prevColor === '#D8D8D8' ? '#04A69F' : '#D8D8D8'));
    setPequenoButtonColor('#D8D8D8'); // Reseta a cor do botão de Cachorros
    setGrandeButtonColor('#D8D8D8'); // Reseta a cor do botão de Cachorros
  };
  const handleGrandePress = () => {
    // Muda a cor do botão de Gatos e reseta a cor do botão de Cachorros
    setGrandeButtonColor(prevColor => (prevColor === '#D8D8D8' ? '#04A69F' : '#D8D8D8'));
    setPequenoButtonColor('#D8D8D8'); // Reseta a cor do botão de Cachorros
    setMedioButtonColor('#D8D8D8'); // Reseta a cor do botão de Cachorros
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.bodyTextItalic}>
          Bem-Vindo, <Text style={styles.bodyTitle}>{nome}!</Text>
        </Text>
        <Text style={styles.bodyText}>Encontre o seu amigo peludo.</Text>
      </View>

      <View>
        <Text style={styles.bodyText2}>
          Qual pet você gostaria de adotar?
        </Text>

        <View style={styles.buttonContainer}>
          <Pressable onPress={handleDogPress} style={[styles.escolhabutton, { backgroundColor: dogButtonColor }]}>
            <View style={styles.buttonContent}>
              <Image source={require('./components/images/cahorro.png')} />
              <Text style={styles.bodyText2}>Cachorros</Text>
            </View>
          </Pressable>
          <Pressable onPress={handleCatPress} style={[styles.escolhabutton, { backgroundColor: catButtonColor }]}>
            <View style={styles.buttonContent}>
              <Image source={require('./components/images/gato.png')} />
              <Text style={styles.bodyText2}>Gatos</Text>
            </View>
          </Pressable>
        </View>
      </View>

      <View>
        <Text style={styles.bodyText2}>
          Qual sexo?
        </Text>
        <View style={styles.buttonContainer}>
          <Pressable onPress={handleMachoPress} style={[styles.escolhabutton, { backgroundColor: machoButtonColor }]}>
            <View style={styles.buttonContent}>
              <Text style={styles.bodyText2}>Macho</Text>
            </View>
          </Pressable>
          <Pressable onPress={handleFemeaPress} style={[styles.escolhabutton, { backgroundColor: femeaButtonColor }]}>
            <View style={styles.buttonContent}>
              <Text style={styles.bodyText2}>Fêmea</Text>
            </View>
          </Pressable>
          <Pressable onPress={handleAmbosPress} style={[styles.escolhabutton, { backgroundColor: ambosButtonColor }]}>
            <View style={styles.buttonContent}>
              <Text style={styles.bodyText2}>Ambos</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View>
        <Text style={styles.bodyText2}>
          E o tamanho?
        </Text>
        <View style={styles.buttonContainer}>
          <Pressable onPress={handlePequenoPress} style={[styles.escolhabutton, { backgroundColor: pequenoButtonColor }]}>
            <View style={styles.buttonContent}>
              <Text style={styles.bodyText2}>Pequeno</Text>
            </View>
          </Pressable>
          <Pressable onPress={handleMedioPress} style={[styles.escolhabutton, { backgroundColor: medioButtonColor }]}>
            <View style={styles.buttonContent}>
              <Text style={styles.bodyText2}>Medio</Text>
            </View>
          </Pressable>
          <Pressable onPress={handleGrandePress} style={[styles.escolhabutton, { backgroundColor: grandeButtonColor }]}>
            <View style={styles.buttonContent}>
              <Text style={styles.bodyText2}>Grande</Text>
            </View>
          </Pressable>
        </View>
      </View>

      <View>
        <Text style={styles.bodyText2}>
          Idade
        </Text>
        
        <View>
        <Text style={{alignSelf: 'center'}}>
          {currentText}
        </Text>

        <View>
        <Slider
          minimumValue={0}
          maximumValue={100}
          step={25}
          value={value}
          onValueChange={(val) => setValue(val)}
          minimumTrackTintColor="#04A69F"  // Cor da parte preenchida
        maximumTrackTintColor="#D8D8D8"   // Cor da parte não preenchida
        thumbTintColor="#04A69F"          // Cor do botão do slider
        style={styles.slider} 
        />
        {/* Textos abaixo do slider */}
        <View style={styles.tickContainer}>
          <Text style={styles.tickText}>6 meses</Text>
          <Text style={styles.tickText}>2 anos</Text>
          <Text style={styles.tickText}>4 anos</Text>
          <Text style={styles.tickText}>6 anos</Text>
          <Text style={styles.tickText}>8 anos</Text>
        </View>
        </View>
        </View>
      </View>

      <View style={styles.body}> 
      </View>
      <View style={styles.body}>
        <Pressable onPress={() => navigation.navigate('CatalogPage')} style={styles.inicialbutton}>
          <Text style={styles.textoButton}>Ache seu novo pet!</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: '100%',     // Define a largura do slider
    height: 40,
    marginLeft: -10       // Ajusta a altura se necessário
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
    paddingTop: 85,
    paddingLeft: 20,
    gap: 50,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center', // Alinha imagem e texto verticalmente
  },
  bodyText: {
    color: '#04A69F',
    fontSize: 15,
    fontWeight: '400',
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
  bodyTitle: {
    alignSelf: 'flex-start',
    color: '#04A69F',
    fontSize: 25,
    fontWeight: '700',
    paddingLeft: 30,
  },
  body: {
    marginTop: 10,
    marginLeft: -15,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 0,
  },
  inicialbutton: {
    marginBottom: 100,
    justifyContent: 'center',
    width: '85%',
    height: 90,
    backgroundColor: '#04A69F',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  buttonContainer: {
    flexDirection: 'row', // Faz os botões ficarem lado a lado
    justifyContent: 'start', // Espaço entre os botões
    width: '100%', // Para usar todo o espaço disponível
    paddingHorizontal: 0,
    gap: 10, // Para adicionar um pouco de espaço entre os botões
  },
  escolhabutton: {
    justifyContent: 'center',
    width: '30%', // A largura do botão
    height: 50,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textoButton: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: '600',
  },
  tickContainer: {
    flexDirection: 'row', // Organiza os textos na horizontal
    justifyContent: 'space-between', // Distribui o espaço entre os textos
    marginTop: 5,
    paddingHorizontal: 0 // Espaçamento entre o slider e os textos
  },
  tickText: {
    fontSize: 12, // Tamanho do texto dos ticks
    color: '#000000', // Cor do texto
  },
});

export default SearchPetPage;
