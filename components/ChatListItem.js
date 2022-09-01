import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { db, auth } from '../firebase'


//componenta de chat ce cuprinde detalii despre un chat item
const ChatListItem = ({ enterChat, id, friendPhoto, friendName }) => {

    const [messages1, setMessages1] = useState('');
    const temp = auth.currentUser.uid;
    
    //extragere din db a mesajelor unui anumit user cu un doctor
    useEffect(() => {
        const unsubscribe = db.collection("peoples").doc(temp).collection("doctors").doc(id).collection("messages").onSnapshot((snapshot) => setMessages1(
            snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })).sort((x, y) => {
                return y.data.timeStamp - x.data.timeStamp
            })
        ))

        return unsubscribe;
    }, [])

    return (

        //struturarea ecranului
        <ListItem containerStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: 10,
            shadowColor: '#202020',
            shadowOffset: { height: 10 },
            shadowOpacity: 0.9,
            shadowRadius: 10,
        }} style={{ marginBottom: 10, marginHorizontal: 7, borderRadius: 10 }} key={id} onPress={() => enterChat(id, friendName, friendPhoto)}>

            <Avatar
                rounded
                source={{
                    uri: friendPhoto
                }}
            />
            <ListItem.Content >
                <ListItem.Title style={{ fontWeight: "800" }}>
                    {friendName}
                </ListItem.Title>
                <ListItem.Subtitle
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {(messages1?.[0]?.data.message?.includes('http') || messages1?.[0]?.data.message?.includes('file')) ? "Sent a photo" : messages1?.[0]?.data.message}
                </ListItem.Subtitle>

            </ListItem.Content>

        </ListItem>

    );
};

export default ChatListItem

const styles = StyleSheet.create({})