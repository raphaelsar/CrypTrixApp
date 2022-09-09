import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const paddinH = windowWidth*0.03
export default function messageFragment(message){
    let message_text = ""
    let message_direction = "recebido"
    let message_time = "";
    let message_date = "";
    let message_style = styles.recebido;
    
    if (message){
        message_info = message.item;
        message_text = message_info.message_text;
        message_direction = message_info.message_direction;
        message_time = message_info.message_time;
        message_date = message_info.message_timestamp;

    }
    if (message_direction === "enviado"){   
        message_style = styles.enviado
    }
    
    return<>
        <TouchableWithoutFeedback>
            <View style={styles.message}>
                <Text style={message_style}>
                    {message_text}
                </Text>
                <Text style={[styles.mensagem_hora,message_style]}>{message_time}</Text>
            </View>
        </TouchableWithoutFeedback>    
    </>
}

const styles = StyleSheet.create({
    message:{
        flexDirection:"row",
        fontSize:10,
        width:windowWidth - windowWidth*0.03,
        flexDirection:"column-reverse",
        fontSize:10,
        lineHeight:15,
        marginVertical:5,

    },

    enviado:{
        paddingVertical:2,
        paddingHorizontal: paddinH,
        backgroundColor:"#cc11cc",
        justifyContent: 'flex-end',
        alignContent:'flex-end',
        textAlign:'right',
    },

    recebido:{
        paddingVertical:2,
        paddingHorizontal: paddinH,
        textAlign:'left',
        backgroundColor:"#FFd355",
        justifyContent: 'flex-start',
        alignContent:'flex-start',

    },

    mensagem_hora:{
        flexDirection:"row",
        width:"100%",
    },

    mensagem_texto:{
        flexDirection:"row",
        width:"100%",
    }
})