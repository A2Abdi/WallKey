import react, { useState, useEffect } from "react";

import { TextInput,Keyboard, KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";

import styles from "./Recieve.style";

import nfcManager, {NfcTech} from "react-native-nfc-manager";

const Recieve = () => {

  const [value,setValue] = useState(0.0);

  const [pressed,setPressed] = useState(false);

  const handleOnClickSend = () => {

      async function readNDF(){
        
        try{
            // start the NFC
            await nfcManager.start();
            // read the NFC
            await nfcManager.requestTechnology(NfcTech.Ndef);
            // the resolved tag object will contain `ndefMessage` property
            const tag = await NfcManager.getTag();
  
            // you have to implement your own parsing as i will not be doing this for this project
            // then call whatever api call that you wantl
        }

        catch (err) {console.log(err);}
        
      }
      
      readNDF();

    }

    useEffect(() => {
      
      const keyboardDidShowListener = Keyboard.addListener(
      
        "keyboardDidShow",
      
          () => {setPressed(true);}
      
        );
        
        const keyboardDidHideListener = Keyboard.addListener(
        
          "keyboardDidHide",
        
          () => {setPressed(false);}
        
        );
        
        return () => {
    
          keyboardDidShowListener.remove();
    
          keyboardDidHideListener.remove();
    
        };
    
      }, []);

    return(
    
      <KeyboardAvoidingView
    
        behavior={Platform.OS === "android" ? "padding" : "height"}
    
        style = {styles.container}>
        
            <View style = {styles.inputTextContainer}>
        
                <TextInput keyboardType="decimal-pad"
        
                           onChangeText={(val)=>setValue(val)}
                       
                           placeholder="Enter amount"
                       
                           styles = {styles.inputText}
                >

              </TextInput>
            
            </View>
            
            {pressed && <TouchableOpacity style = {styles.buttonStyle} onPress = {() => handleOnClickSend()}>
            
                <Text style = {styles.textStyle}>Request</Text>
            
            </TouchableOpacity>
            
            }
        
        </KeyboardAvoidingView>
    )
}

export default Recieve;