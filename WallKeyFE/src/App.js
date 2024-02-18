import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { useState, useEffect } from 'react';
import MainScreen from './components/MainScreen/MainScreen';
import nfcManager from 'react-native-nfc-manager';

import Card from './components/Card/Card';
export default function App() {
  // react native nfc ? is it supported on your device
  const [isSupported, setSupported] = useState(null);

  useEffect(()=>{
    //check for nfc state
    async function checkNFC(){
      //nfc is available
      const val = await nfcManager.isSupported();
      if(val){
        await nfcManager.start();
      }
      setSupported(val);
    }
    checkNFC();

  },[])
  //return based on react state
  if( isSupported === null ) return null;
  else if (!isSupported){
    return (
      <Text style = {styles.container}> Your device does not support NFC</Text>
    )
  }
  data = {"name" : "ali", "type": "debit"};
  return(
    <View style = {styles.container}>
      <Card></Card>

    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
