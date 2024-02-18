import react from "react";
import { Text,ToastAndroid,TouchableOpacity,View } from "react-native";
import styles from "./add.style";
import axios from "axios";
import NfcManager,{NfcTech} from "react-native-nfc-manager";
import {NfcEvents} from "react-native-nfc-manager";

const Add = () => {

    const handleOnClickSend = () => {
        
        async function readNDF(){
        
            try{
                // start the NFC
                await NfcManager.start();
                // read the NFC
                await NfcManager.requestTechnology(NfcTech.Ndef);
                // the resolved tag object will contain `ndefMessage` property
                const tag = await NfcManager.getTag();
    
                // you have to implement your own parsing as i will not be doing this for this project
                // the store to database

                axios.post('http://localHost:3000/send', tag)
                
                .then(response => {
                
                    console.log('Response:', response.data);
                
                })
               
                .catch(error => {
               
                    console.error('Error:', error);
               
                });
    
            }
            catch (err) {console.log(err);}
        }

        readNDF();

    }

    return(
        <View style = {styles.container}>
            
            <TouchableOpacity style = {styles.containerButton}
            
                        onPress={()=> handleOnClickSend()}> 
                
                <Text style = {styles.buttonText}>+</Text>
            
            </TouchableOpacity>
        
        </View>  
    )
}
export default Add; 