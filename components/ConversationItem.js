import React, { useLayoutEffect, useState, useEffect } from 'react'

import { StyleSheet, Text, View, Button } from 'react-native'
import { ListItem, Avatar, icon } from 'react-native-elements'


const ConversationItem = () => {
    return (
        <ListItem containerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10 }} style={{ marginBottom: 5, marginHorizontal: 7, borderRadius: 10 }}  >

            <Avatar
                rounded
                source={{
                    uri:'https://www.pngfind.com/pngs/m/341-3415733_male-portrait-avatar-face-head-black-hair-shirt.png'
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