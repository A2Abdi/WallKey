import { Dimensions, StyleSheet } from "react-native";

const {width: ScreenWidth} = Dimensions.get('screen');

const styles = StyleSheet.create({
    
    container: {
    
        flex: 1,
    
        alignItems: 'center'
    
    },
    
    textStyle : {
    
        fontSize: 19,
    
    },
    
    inputText : {
    
        fontSize: 18,
    
        height : 40,
    
    },
    
    inputTextContainer : {
    
        marginTop: 40,
    
        height : 40,
    
        flex : 1,
    
        justifyContent: 'center',
    
        alignItems: 'center'
    
    },
    
    buttonStyle : {
    
        padding: 10,
    
        margin: 15,
    
        width : ScreenWidth * 0.9,
    
        backgroundColor: '#7DA1FC',
    
        alignItems: 'center'
    
    }
})

export default styles;