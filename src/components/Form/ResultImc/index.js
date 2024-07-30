import React, { useState } from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";
import styles from "./style";

export default function ResultImc(props){

    const [textShare , setTextShare] = useState("Compartilhar");

    const onShare = async () => {
        const resultShare = await Share.share({   
            message: "Compartilhe o resultado com seus amigos. O meu IMC é: " + props.resultImc,
        });
    };
    
    return(
        <View style={styles.ResultImc} >

            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
            <View >
                { props.resultImc != null ?

                <TouchableOpacity onPress={onShare} style={styles.boxShare} >
                    <Text style={styles.textBoxShare}>{textShare}</Text>        
                </TouchableOpacity> 
                : 
                <TouchableOpacity/>
                }
            </View>
        </View>
    );
}
