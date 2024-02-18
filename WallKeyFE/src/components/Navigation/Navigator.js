import React from "react";

import {View, Image, TouchableOpacity } from "react-native";

import styles from "./Navigator.style";

const Navigation = ({source, setTrue, setFalse}) =>{

    const handleOnClick = () => {

        setTrue(true);

        setFalse(false);

    }

    const image =  source === "send" ? 

    require('../../assets/send-pic.png') :  require('../../assets/wallet-pic.png');

    return(

        <View style = {styles.buttonViewContainer}>

            <TouchableOpacity style = {styles.buttonContainer}
    
                onPress={handleOnClick} >
                    
                    <Image source = {image} style = {styles.imageIcon}></Image>
                
                </TouchableOpacity>
            
            </View>
        
        )

}

export default Navigation;
