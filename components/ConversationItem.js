import React, { useLayoutEffect, useState, useEffect } from 'react'

import { StyleSheet, Text, View, Button } from 'react-native'
import { ListItem, Avatar, icon } from 'react-native-elements'


const ConversationItem = ({enterChat}) => {
    return (
        <ListItem containerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10 }} 
        style={{ marginBottom: 5, marginHorizontal: 7, borderRadius: 10 }} 
        onPress={()=>enterChat()} >

            <Avatar
                rounded
                source={{
                    uri:'https://i0.wp.com/www.alphr.com/wp-content/uploads/2019/02/How-to-post-portrait-photos-on-Instagram-without-cropping1.jpg?fit=900%2C600&ssl=1'
                }}
            />
            <ListItem.Content >
                <ListItem.Title style={{ fontWeight: "800" }}>
                    Madalin Puiu
                </ListItem.Title>
                <ListItem.Subtitle
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    Ce faci ?
                </ListItem.Subtitle>

            </ListItem.Content>

        </ListItem>
    )
}

export default ConversationItem

const styles = StyleSheet.create({})