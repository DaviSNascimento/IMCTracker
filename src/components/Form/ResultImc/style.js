import ResultImc from ".";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    ResultImc:{
        flex: 1,
        marginTop:15,
        paddingTop:30,
        paddingBottom:30,
        borderRadius:50,
        alignItems:"center",


    },
    numberImc:{
        width:"100%",
        fontWeight:'bold',
        fontSize:80,
    },
    information:{
        fontSize: 30,
        fontWeight:"bold",
        color:'#00a0f4'
    },
    boxShare:{
        marginTop: 30,
        width: "auto",
        padding: 5,
        paddingHorizontal: 30,
        backgroundColor:"#0f90f0",
        borderRadius: 20,
        
    },
    textBoxShare:{
        fontSize: 30,
        color: "white",
    },
});

export default styles;