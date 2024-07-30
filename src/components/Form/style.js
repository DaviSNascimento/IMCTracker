import { Button, StyleSheet } from "react-native";
import Form from ".";

const styles = StyleSheet.create({
    formContext:{
        backgroundColor:'#ececec',
        width: "100%",
        height: "100%",
        bottom:0,
        alignItems: "center",
        marginTop:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    form:{
        width:'100%',
        height: 'auto',
        marginTop: 30,
        padding: 10,

    },
    formLabel:{
        color:"#0f0f0f",
        fontSize:25,
        paddingLeft:20,
        fontWeight:"600",

    },
    formInput:{
        width:'90%',
        borderRadius:50,
        height:40,
        margin:12,
        paddingLeft:10,
        backgroundColor:"#d6d6d6",
    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:'#0f90f0',
        marginLeft:12,
        marginTop:12,
        paddingTop:14,
        paddingBottom:14,
        

    },
    textButtonCalculator:{
        fontSize:20,
        color:"white",

    },
    errorMessage:{
        paddingLeft: 18,
        color:"red",
        fontWeight: "bold",
        margin:2,
    },

});

export default styles;