import React from 'react';
import { StyleSheet, Image, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Header() {

  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Image
        style={styles.imgLogo}
        source={require("../../../assets/iconHeader.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B6F97C',
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