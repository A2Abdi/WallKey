import { SafeAreaView, ScrollView, View } from "react-native";

import { useState, useEffect } from "react";

import Add from "../Card/add";

import Card from "../Card/Card";

import styles from "./Screen.style.js";

import axios from "axios";

const Screen = ({trigger,setTrigger})=>{

  const [data, setData] = useState([]);

    useEffect(() => {

      const fetchData = async() => {

        axios.get('https://localhost:3000/data')

        .then(res => {

          setData(res.data);

        })

          .catch(error => {
        
            console.error('Error fetching data:', error);
        
          });
      
        };

      fetchData();
      
      if (trigger) {
      
        fetchData();
      
        setTrigger(false); // Reset trigger
      
      }
    
    }, [trigger,data]);



    return (
    
    <SafeAreaView style = {styles.container}>
    
          <ScrollView >
    
            {data.map((card, index) => (
    
                <Card jsondata = {card} setTrig = {setTrigger}/>))}
    
            <View style = {styles.addContainer}>
    
              <Add></Add>
    
            </View>
    
          </ScrollView>
    
        </SafeAreaView>
        
    )
    
}

export default Screen;