import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="Ex. 1.70"
                keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                placeholder="Ex. 85.5"
                keyboardType="numeric"
                />
                <Button title="Calcular IMC"/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}
