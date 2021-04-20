import React from 'react';
import { StyleSheet, Image, View, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Header() {

  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Image
        style={styles.imgLogo}
        source={require("../../../assets/teste.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E9110',
    paddingLeft: 5,
    padding:3,
    width: 359,
  },

  imgLogo: {
      height: 65,
      width: 65,
      alignContent: 'center'
  },
});