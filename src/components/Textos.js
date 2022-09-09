import React from "react";
import { StyleSheet, Text } from "react-native";

function P({texto, style}){
    let estilo = [style, estilo.P]
    return <Text style={estilo}>{texto}</Text>
}

function Title({texto, style}){
    let estilo = [style, estilo.Title]
    return <Text style={estilo}>{texto}</Text>
}

function Subtitle({texto, style}){
    let estilo = [style, estilo.Subtitle]
    return <Text style={estilo}>{texto}</Text>
}

const estilos = StyleSheet.create({
    P:{
        fontSize:16,
        lineHeight:18,
    },
    Title:{
        fontSize:36,
        lineHeight:38,
    },
    Subtitle:{
        fontSize:26,
        lineHeight:28,
    }
})