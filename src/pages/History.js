import React,{useState} from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from "react-native";

import Quotation from '../services/sqlite/Quotation'
import Header from '../components/Header/Header';


export default function History(props) {
  const [QUOTATIONS, setQUOTATIONS] = useState([]);

  React.useEffect(() => {
    Quotation.all()
    .then(
      quotations => (
        setQUOTATIONS(quotations)
      )
    )
  },[]);



const Item = ({item}) => (
    <View>
      <Text style={styles.item}>
      {item.amount + " " + item.coin_base} =  {item.conversion +" " +  item.coin_fate}
      {'\n'}
      {item.date_conversion}
      </Text>

      <TouchableOpacity onPress = {() => {
        Quotation.remove(item.id)
        .then( updated => console.log('Quotation removed: '+ item.id) )
        .catch( err => console.log(err) )

        Quotation.all()
         .then(
           quotations => (
             setQUOTATIONS(quotations)
           )
         )
      }}  >
        <View style={styles.button}>
          <Text style={{color: 'white'}}>Remover</Text>
        </View>       
        </TouchableOpacity>
    </View>
)


  return (
    <SafeAreaView style={styles.container}>
    <Header/>

      <Text style={styles.text}>Histórico de Cotações</Text>
      <FlatList
        data={QUOTATIONS}
        renderItem={ ({item}) => <Item item={item} /> }
        keyExtractor={ item => item.id.toString() }        
        extraData={QUOTATIONS}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: '#F9FFD9'
  },
  button:{
    borderWidth:1,
    backgroundColor:"red",
    padding:5,
    width:310,
    alignItems: 'center',
    marginTop:5,
    borderRadius:10,
  },
  item:{
    borderColor:'black',
    padding:15,
    width: '100%',
    height: 62,
    borderRadius: 12,
    borderWidth: 2,
    textAlign: 'center',
    marginTop:10
  },
  text:{
    margin:15,
    fontWeight:'bold',
    fontSize:25,
    color: '#429B2D'
  }
});
