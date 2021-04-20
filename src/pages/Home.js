import React, { useState } from "react";
import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from "react-native";

import ModalComponent from '../components/Home/Modal';

export default function Home(props) {

  return (
    <View style={styles.container}>
        <Image
            style={styles.logoImg}
            source = {require('../../assets/teste5.png')}
          />

      <TouchableOpacity onPress={() => {  props.navigation.navigate("NewQuote"); }}>
        <View style={styles.button}>
          <Text style={styles.text}>Nova Cotação</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {   props.navigation.navigate("History"); }}>
        <View style={styles.button}>
          <Text style={styles.text}>Histórico</Text>
        </View>
      </TouchableOpacity>

      <ModalComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25B213"
  },
  logoImg: {
    marginBottom:60
  },
  button:{
    borderWidth:1,
    backgroundColor: "#2E6D1E",
    padding:12,
    marginTop:10,
    borderRadius:20,
},
  text:{
    color: 'white',
    fontWeight: 'bold',
    fontSize:15
  },
});
