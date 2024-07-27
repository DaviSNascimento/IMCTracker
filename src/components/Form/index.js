import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc/"
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
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                onChangeText={setAltura}
                value={altura}
                placeholder="Ex. 1.70"
                keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                onChangeText={setPeso}
                value={peso}
                placeholder="Ex. 85.5"
                keyboardType="numeric"
                />
                <Button 
                onPress={() => validationImc()}
                title={textButton}/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}
