import { useState, } from "react";
import { View, Image,Alert, Text,TouchableOpacity} from "react-native";
import NfcManager,{Ndef} from "react-native-nfc-manager";
import styles from "./Card.style";
import axios from "axios";


//you will need to work on the send option;
const Card = ({jsondata, setTrig}) =>{
    
    const [isClicked,setIsClicked] = useState(false);
    
    const handleOnClickSend = (jsondata) => {
    
        async function sendData(jsondata){
    
            setIsClicked(true);
    
            try {
    
                await NfcManager.requestTechnology(NfcTech.Ndef);
                //convert to object
                const jsonString = JSON.stringify(jsondata);

                // Encode the object in an NDEF MIME Media record
                const bytes = Ndef.encodeMessage([Ndef.mimeMediaRecord('application/json', Ndef.encodeText(jsonString))]);
        
                // Write the NDEF message to the NFC tag
                await NfcManager.writeNdefMessage(bytes);
    
                } catch (err) {
    
                    Alert.alert('NFC write error', err);
              
                } finally {
                
                    Alert.alert("Done");
                
                    NfcManager.cancelTechnologyRequest();
          }
        
        }
        
        sendData(jsondata);
        
        setIsClicked(false);
    
    }

    const handleOnDelete = (postData) =>{
        //post to delete endpoint
        async function Del(){
    
            try{    
    
                await axios.delete('http://localhost:3000/delete', {data : postData});
    
            }
    
            catch(err){
    
                console.error('Error:', error);
    
            }
    
            finally {
    
                console.log('Response:', response.data);
    
            }
    
            setTrig(true);
    
        } 
    }
    

    return (
        <TouchableOpacity  onPress ={() => handleOnClickSend(jsondata)}>
            <TouchableOpacity style = {styles.buttonContainer}>
                <Image source = {require('../../assets/send-pic.png')}
                    style = {styles.imageIcon}/>
                <View style = {styles.contentContainer}>
                    <View style = {styles.textContainer}>
                        <Text style = {styles.buttonText}>Card Type : {jsondata.type}</Text>
                        <Text style = {styles.buttonText}>Name on card :  {jsondata.name}</Text>
                    </View>
                    <View style = {styles.deleteContainer}>
                        <TouchableOpacity  style = {styles.deleteButtonStyle}
                                        onPress = {()=>handleOnDelete(jsondata)}>
                            <Image source = {require('../../assets/delete-document.png')}
                            style = {styles.deleteStyle}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
            {isClicked && <View style = {styles.imgContainer}>
                <Image source = {require('../../assets/hand.png')} style = {styles.dropImg}/>
            </View>}
        </TouchableOpacity>
    )
}

export default Card;