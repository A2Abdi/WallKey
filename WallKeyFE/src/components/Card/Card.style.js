import { StyleSheet,Dimensions } from "react-native";

const {width: ScreenWidth} = Dimensions.get('screen')

const styles = StyleSheet.create({

    container : {

        column : 100,

        alignItems: 'center'

    },

    buttonContainer : {

        padding : 10,

        width : ScreenWidth,

        marginTop: 40,

        borderTopStartRadius: 50,

        borderBottomLeftRadius: 50,

        flexDirection: 'row',

        backgroundColor: '#bfc9c1',

    },
    contentContainer : {

        flexDirection: 'row',

        flex: 1,

        alignItems:'center',

    },

    textContainer : {

        justifyContent: 'center',

    },

    imageIcon: {

        marginRight: 20,

        width: 100,

        height: 100,

    },

    buttonText : {

        fontSize: 18,

    },

    deleteContainer : {

        flex : 1,

        alignItems: 'center',

        justifyContent: 'center'

    },  

    deleteStyle : {

        width: 30,

        height: 30,

    },

    imgContainer :{

        paddingTop: 20,

        alignItems: 'center',

        justifyContent: 'center'
        
    },

    dropImg : {

        width : 100,

        height: 100,

    }

}) 

export default styles;