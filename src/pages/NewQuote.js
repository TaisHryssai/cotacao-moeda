import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Button, Platform} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

import Header from '../components/Header/Header';
import DatePicker from '../components/Calendar/DateTimePicker';

export default function NewQuote() {

  const [moedaBase, setMoedaBase] = useState('');
  const [moedaDestino, setMoedaDestino] = useState('');
  const [valor, setValor] = useState('');
 var options = { year: 'numeric', month: 'long', day: 'numeric' };



const [date, setDate] = useState(new Date());
const [mode, setMode] = useState('date');
const [show, setShow] = useState(false);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={styles.container}>

    <Header/>
    
    <Text>Cotação</Text>
    
       <View style={styles.contentRow} >
          <TextInput
            style={styles.inputField}
            secureTextEntry={false}
            placeholder='Moeda Base'
            placeholderTextColor='grey'
            onChangeText={(text) => setMoedaBase(text)}/>
      </View>

       <View style={styles.contentRow} >
          <TextInput
            style={styles.inputField}
            secureTextEntry={false}
            placeholder='Moeda Destino'
            placeholderTextColor='grey'
            onChangeText={(text) => setMoedaDestino(text)}/>
      </View>

       <DatePicker/>

       <View style={styles.contentRow} >
          <TextInput
            style={styles.inputField}
            secureTextEntry={false}
            placeholder='Valor'
            placeholderTextColor='grey'
            onChangeText={(text) => setValor(text)}/>
      </View>




      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>Cotar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  contentRow:{
    // marginBottom:20,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    height: 50,
    width:'100%',
    marginTop:20
  },
  inputField:{
    width:"100%",
    backgroundColor:"#fff",
    borderRadius:10,
    borderWidth:2,
    height:50,
    padding:10,
    textAlign:'center',
  },
  button:{
    borderWidth:1,
    backgroundColor:"#2E6D1E",
    padding:12,
    width:150,
    alignItems: 'center',
    marginTop:10,
    borderRadius:10,
  },
  text:{
    color: 'white',
    fontWeight: 'bold',
    fontSize:15
  },
    inputPicker:{
    width:"70%",
    backgroundColor:"#fff",
    borderRadius:10,
    borderWidth:2,
    height:50,
    padding:10,
    textAlign:'center',
  },
  buttonPicker:{
    borderWidth:1,
    backgroundColor: "#2E6D1E",
    padding:12,
    width:100,
    alignItems: 'center',
    marginTop:2,
    borderRadius:8,
  }
});
