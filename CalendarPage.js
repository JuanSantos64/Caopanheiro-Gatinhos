import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, Alert, View, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarPage = ({ navigation, route }) => {
  const { nome = 'Josemir Amorim', cep = '12345-789' } = route.params || {};
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);
  const [markedDates, setMarkedDates] = useState({});

  // Data de referência para comparação (15 de novembro de 2024)
  const referenceDate = '2024-11-27';

  // Função para verificar se a data é anterior à data de referência
  const isBeforeReferenceDate = (dateString) => {
    return dateString < referenceDate;
  };

  // Função para formatar a data no formato "dd/mm/yyyy"
  const formatDate = (dateString) => {
    // Divida a data em partes (ano, mês, dia)
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  // Função chamada ao pressionar um dia
  const handleDayPress = (day) => {
    const date = day.dateString;

    // Se o dia for cinza (anterior ao dia 15), não dispara o alerta
    if (isBeforeReferenceDate(date)) {
      return; // Não faz nada se o dia for cinza
    }

    setSelectedDate(date);  // Atualiza o estado com a data selecionada

    // Marcar o dia selecionado e garantir que os outros dias não tenham a mesma marcação
    setMarkedDates({
      [date]: { selected: true, selectedColor: 'blue', selectedTextColor: 'white' },
    });
  };

  // Geração das datas marcadas (dias anteriores ao dia 15 serão cinzas e desabilitados)
  const generateMarkedDates = () => {
    let marked = {};

    // Adiciona as datas anteriores ao dia 15 como desabilitadas e cinzas
    for (let day = 1; day <= 30; day++) {
      let date = `2024-11-${day < 10 ? `0${day}` : day}`;
      if (isBeforeReferenceDate(date)) {
        marked[date] = { disabled: true, dotColor: 'gray', disabledTextColor: 'gray' };
      }
    }

    return marked;
  };

  // Função para gerar os horários entre 08:00 até 18:30 com intervalos de 30 minutos
  const generateTimes = () => {
    let times = [];
    let startTime = 8; // 08:00
    let endTime = 18; // 18:30

    // Gera os horários de 30 em 30 minutos
    while (startTime < endTime || (startTime === endTime && startTime < 18.5)) {
      let hour = Math.floor(startTime);
      let minute = (startTime % 1) === 0 ? '00' : '30'; // Condicional para mostrar 00 ou 30 minutos
      let timeString = `${hour < 10 ? `0${hour}` : hour}:${minute}`;
      times.push(timeString);
      startTime += 0.5; // Incrementa de 30 minutos
    }
    return times;
  };

  // Função para lidar com a seleção de horário
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  // Função para disparar o alerta apenas quando ambos a data e o horário estiverem selecionados
  const handleConfirmSelection = () => {
    if (selectedDate && selectedTime) {
      // Exibe o alerta com a data e o horário selecionados
      Alert.alert(`Agendado para ${formatDate(selectedDate)} às ${selectedTime}`);
      navigation.navigate('CatalogPage', {data: selectedDate, hora: selectedTime});
    } else {
      Alert.alert('Por favor, selecione uma data e um horário');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{nome}</Text>
      <Text style={styles.bodyText}>{cep}</Text>

      {/* Exibe o Calendário */}
      <Text style={styles.bodyTitle2}>Agenda</Text>

      <View style={{ borderWidth: 20, borderColor: '#04A69F' }}>
        <Calendar
          markedDates={{ ...generateMarkedDates(), ...markedDates }} // Mescla as datas marcadas com o estado
          onDayPress={handleDayPress} // Chama a função quando um dia é pressionado
          monthFormat={'MMMM'}
          hideExtraDays={true}
        />
      </View>

      {/* Se uma data for selecionada, exibe a lista de horários */}
      {selectedDate ? (
        <>
          <Text style={styles.selectedDate}>
            Data Selecionada: {formatDate(selectedDate)} {/* Formata a data */}
          </Text>
          <Text style={styles.bodyTitle2}>Selecione um Horário</Text>

          <ScrollView contentContainerStyle={styles.scheduleContainer}>
            {generateTimes().map((time, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.timeButton,
                  selectedTime === time && styles.selectedTime, // Aplica estilo se for o horário selecionado
                ]}
                onPress={() => handleTimeSelect(time)} // Altera o horário selecionado ao clicar
              >
                <Text
                  style={[
                    styles.timeText,
                    selectedTime === time && styles.selectedTimeText, // Muda a cor do texto se for selecionado
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Botão para confirmar a seleção */}
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmSelection}>
            <Text style={styles.confirmText}>Confirmar Seleção</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.bodyText}>Selecione uma data no calendário</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#04A69F',
    marginBottom: 20,
    textAlign: 'center',
  },
  bodyText: {
    color: '#04A69F',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 10,
  },
  bodyTitle2: {
    alignSelf: 'center',
    color: '#04A69F',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  selectedDate: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  scheduleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeButton: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTime: {
    backgroundColor: '#04A69F', // Cor do botão selecionado
  },
  timeText: {
    fontSize: 18,
    color: '#333',
  },
  selectedTimeText: {
    color: '#fff', // Cor do texto do botão selecionado
  },
  confirmButton: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#04A69F',
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CalendarPage;
