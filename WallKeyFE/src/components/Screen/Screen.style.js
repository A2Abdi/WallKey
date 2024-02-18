import { StyleSheet, Dimensions } from "react-native";

const {width: ScreenWidth} = Dimensions.get('screen');

const styles = StyleSheet.create({

    container: {

        backgroundColor: 'black',

        paddingTop : 25,

        paddingBottom: 25,

        flex: 1,

        alignItems: 'center',

        justifyContent: 'center'

    },

    view : {

        flex: 1,

    },

    addContainer : {

        justifyContent: 'center',

        alignItems: 'center',

    }

})

export default styles;