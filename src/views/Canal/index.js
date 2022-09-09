import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, FlatList, View, Dimensions, TextInput, Button, Text} from 'react-native'
import messageFragment from './message';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Canal(channel){
    let messages = {}

    if (channel){
        messages = channel.messages
    }



    const [messageState, setMessageState] = useState(messages)
    const [newMessageState, setNewMessageState] = useState("")
    const [time, setTime] = useState(null);
  
    const getCurrentTime = () => {
        let today = new Date();

        let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
        let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
        return hours + ':' + minutes;
      }
  
      useEffect(() => {
        let time = getCurrentTime();
        setTime(time);
      }, []);



    const sendMessage = () => {
        let today = new Date();

        var newMessage = [...messageState , {
                message_text: newMessageState,
                message_direction: "enviado",
                message_time: getCurrentTime(),
                message_date: "22/10/1986",
                sender_id:"XHPXGP",
                message_timestamp: today
            },];
        setMessageState(newMessage);
      }
    
    return <>
            <SafeAreaView style={styles.chat}>
                <View style={styles.chat_content}>
            <FlatList
                data={messageState}
                renderItem={messageFragment}
                keyExtractor={({ message_timestamp }) => message_timestamp }
                ListEmptyComponent={
                    <Text>No messages Here</Text>
                }
            />
        </View>
            </SafeAreaView>
            <SafeAreaView style={styles.bottom}>
                    <TextInput
                        style={styles.message_inputtext}
                        onChangeText={setNewMessageState}
                        value={newMessageState}
                        placeholder="send a message"
                        keyboardType="default"
                    />
                    <Button onPress={sendMessage} style={styles.botao} title="SEND" />
                </SafeAreaView>
        </>
    }



const styles = StyleSheet.create({
    message_inputtext:{
        borderColor: "gray",
        width: windowWidth - (windowWidth * 0.04),
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },

    botao: {

        fontSize: 12
    },

    bottom: {
        marginVertical: windowHeight * 0.04,
        width: windowWidth,
        height: windowHeight * 0.20,
        fontSize: 12,
        position:"relative",
        backgroundColor: "#FFFFFF",


        fontSize: 12
    },

    chat:{
        // marginHorizontal: windowWidth * 0.01,
        width: windowWidth,
        height: windowHeight * 0.75,
        fontSize: 12,
        position:"relative",
        top:0,
        backgroundColor: "#c3c3c3",
    },

    chat_content: {
        flexDirection:"column-reverse",
        paddingHorizontal: windowWidth * 0.02,
        paddingVertical: windowHeight * 0.02,
        textAlignVertical: "bottom",
        position:'absolute',
        bottom:0,
    },
})
