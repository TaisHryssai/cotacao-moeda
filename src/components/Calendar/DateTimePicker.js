import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Platform} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DatePicker(props) {

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
    <View>

       <View style={styles.contentRow}>
            <TextInput  
                style={styles.inputPicker}
                placeholder={date.toISOString().slice(0, 10)}
                editable={false}
            />

            
           {!show && (  
          <TouchableOpacity onPress={showDatepicker}>
            <View style={styles.buttonPicker}>
             <Text style={styles.text}>Calendario</Text>
           </View>
         </TouchableOpacity>
          )}
      </View>


     {/* The date picker */}
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          dateFormat='day month year'
          display="calendar"
          is24Hour={true}
          onChange={onChange}
        />
      )}

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
