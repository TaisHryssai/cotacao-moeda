import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

import Header from '../components/Header/Header';

import Quotation from '../services/sqlite/Quotation';
import api from '../services/api';

export default function NewQuote() {

  const [moedaBase, setMoedaBase] = useState('');
  const [moedaDestino, setMoedaDestino] = useState('');
  const [amount, setValor] = useState(0);
  var [message, setMessage] = useState(''); 

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


function createQuotation(total) {
  Quotation.create({coin_base:moedaBase, coin_fate:moedaDestino, date_conversion:date.toISOString().slice(0, 10), amount:amount, conversion:total} )
  .then(id => console.log('Cotação criada com id: ' + id) ).catch(err=>console.log(err))
}

 function createMessage(total) {
    setMessage(amount + ' ' + moedaBase + ' = ' + total + ' ' + moedaDestino +
    '\n(Cotação de ' + date.toString() + ')'
     )
  }


  return (
    <View style={styles.container}>

    <Header/>
    
    <Text style={styles.textTitle}>Cotação de Moeda</Text>
    
       <View style={styles.contentRow} >
          <TextInput
            style={styles.inputField}
            secureTextEntry={false}
            placeholder='Moeda Base (USD)'
            placeholderTextColor='grey'
            onChangeText={(text) => setMoedaBase(text.toUpperCase())}/>
      </View>

       <View style={styles.contentRow} >
          <TextInput
            style={styles.inputField}
            secureTextEntry={false}
            placeholder='Moeda Destino (BRL)'
            placeholderTextColor='grey'
            onChangeText={(text) => setMoedaDestino(text.toUpperCase())}/>
      </View>

      <View style={styles.contentRow}>
          <TextInput  
                style={styles.inputPicker}
                placeholder={date.toISOString().slice(0, 10)}
                editable={false}
            />
        <TouchableOpacity onPress={showDatepicker}>
            <View style={styles.buttonPicker}>
             <Text style={styles.text}>Calendario</Text>
           </View>
         </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
      </View>

       <View style={styles.contentRow} >
          <TextInput
            style={styles.inputField}
            secureTextEntry={false}
            placeholder='Valor'
            placeholderTextColor='grey'
            onChangeText={(text) => setValor(text)}/>
      </View>

      <Text style={styles.contentRow}>{message}</Text>

      <TouchableOpacity 
      onPress={() => {
        api.get("latest?base=" + moedaBase).then( (response) => {
          let outputValue = (response.data.rates[moedaDestino])
          let aa = (response.data.date = date.toISOString().slice(0,10))
          let total = amount * outputValue

            if(total){
              createQuotation(total)
              createMessage(total)
            } else {
              setMessage('');
              alert('campos não foram preenchidos')
            }
          })
        .catch(
          (err) => {
          alert("Os campos não foram preenchidos corretamente ou ainda não há resultados presentes na API que atendam sua pesquisa!")
          createMessage(false)
          setMessage('');
          console.log(err)
        }
       );
      }}>

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
    backgroundColor: '#F9FFD9'
  },
  contentRow:{
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
    backgroundColor:"#90EC6A",
    padding:12,
    width:150,
    alignItems: 'center',
    borderRadius:10,
  },
  text:{
    color: '#2E6D1E',
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
    backgroundColor: "#90EC6A",
    padding:12,
    width:100,
    alignItems: 'center',
    marginTop:2,
    borderRadius:8,
  },
  textTitle:{
    textTransform:'uppercase', 
    fontWeight:'bold', 
    fontSize:25,
    margin:25,
    color: '#429B2D'
  }
});
