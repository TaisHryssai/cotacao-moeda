import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity, Linking } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 


export default function ModalComponent() {
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
   
      <Modal
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >
        <View style={styles.modal}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'#166D0B'}}>Cotação de Moedas</Text>
          <Text style={{fontSize:15, color:'#166D0B', textAlign: 'center'}}>Avaliação 2 - PDM {"\n"} 2021</Text>
       

          <View style={styles.buttonIcon}>
              <Text style={styles.text} onPress={() => Linking.openURL('https://github.com/TaisHryssai/cotacao-moeda')}><FontAwesome name="github" size={24} color="black" /> Github</Text>  
          </View>

          <View style={styles.buttonIcon}>
              <Text style={styles.text} onPress={() => {  setModalVisible(false) }}><FontAwesome name="arrow-circle-left" size={24} color="black" /> Voltar</Text>  
          </View>
          
        </View>
      </Modal>
        
      <TouchableOpacity onPress={() => {  setModalVisible(true) }}>
        <View style={styles.button}>
          <Text style={styles.text}>Sobre</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modal:{
    flex:1,
    alignItems: "center",
    justifyContent:"space-around",
    margin:30,
    marginTop:194,
    borderRadius:10, 
    backgroundColor: '#52E371',
    marginVertical:130,
    borderWidth:1
  },
  button:{
    borderWidth:1,
    backgroundColor: "#2E6D1E",
    padding:12,
    marginTop:10,
    borderRadius:20,
  },

  buttonIcon:{
    borderWidth:1,
    backgroundColor: "#2E6D1E",
    padding:10,
    borderRadius:20,
},
  text:{
    color: 'white',
    fontWeight: 'bold',
    fontSize:15
  },
});
