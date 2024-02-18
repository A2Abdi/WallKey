import {StyleSheet,Dimensions} from 'react-native'

const { width: ScreenWidth } = Dimensions.get("screen");

const styles = StyleSheet.create({

    container : {

        flex:1,

    },

    screenContainer :{

        flex : 1,

    },

    navContainer :{

        width : ScreenWidth,

        height : 45,

        flexDirection: 'row',

    },
    
})

export default styles;