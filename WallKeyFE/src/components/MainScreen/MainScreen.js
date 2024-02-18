import {View} from 'react-native'

import { useState } from 'react'

import styles from './MainScreen.style'

import Navigation from '../Navigation/Navigator'

import Screen from '../Screen/Screen'

import Recieve from '../Screen/Recieve/Recieve'

const MainScreen = () =>{

    const [isScreen, setIsScreen] = useState(true);

    const [isRecieve, setIsRecieve] = useState(false);

    const [isRefresh,setRefersh] = useState(false);

    return(
        <View style = {styles.container}>

            <View style = {styles.screenContainer}>

                {isScreen && <Screen trigger = {isRefresh} setTrigger = {setRefersh}></Screen>}          

                {isRecieve && <Recieve></Recieve>}

            </View>

            <View style = {styles.navContainer}>

                <Navigation source = 'send' setTrue = {setIsScreen} setFalse = {setIsRecieve}></Navigation>

                <Navigation source = 'recieve' setTrue = {setIsRecieve} setFalse= {setIsScreen}></Navigation>

            </View>

        </View>

)

}

export default MainScreen;