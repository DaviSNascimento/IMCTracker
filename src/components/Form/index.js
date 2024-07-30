import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc/"
import styles from "./style";

export default function Form(){

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o Peso e Altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);


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
            setErrorMessage(null);
            return;
            
        }
        else{
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o Peso e Altura");
            verificationImc();
        }
        function verificationImc() {
            if (imc == null) {
                setErrorMessage("Campo Obrigatório *");
            }
            return;
        }

    }    

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>
                    Altura
                </Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setAltura}
                value={altura}
                placeholder="Ex. 1.70"
                keyboardType="number-pad"
                />
                <Text style={styles.formLabel}>
                    Peso
                </Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setPeso}
                value={peso}
                placeholder="Ex. 85.5"
                keyboardType="number-pad"
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
