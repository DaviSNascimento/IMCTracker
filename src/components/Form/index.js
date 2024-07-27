import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import ResultImc from "./ResultImc/"
import styles from "./style";

export default function Form(){

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o Peso e Altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function imcCalculator(){
        const pesoNumerico = parseFloat(peso.replace(',', '.'));
        const alturaNumerica = parseFloat(altura.replace(',', '.'));
        return setImc((pesoNumerico/(alturaNumerica*alturaNumerica)).toFixed(2));
    }

    function validationImc(){
        if(peso != null && altura != null){
            imcCalculator();
            setAltura(null);
            setPeso(null);
            setMessageImc("Seu imc é igual:");
            setTextButton("Calcular novamente");
            return;
        }
        else{
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o Peso e Altura");
        }
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>
                    Altura
                </Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setAltura}
                value={altura}
                placeholder="Ex. 1.70"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>
                    Peso
                </Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setPeso}
                value={peso}
                placeholder="Ex. 85.5"
                keyboardType="numeric"
                />
                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() => validationImc()}>  
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc
                messageResultImc={messageImc} resultImc={imc}
             />
        </View>
    );
}
