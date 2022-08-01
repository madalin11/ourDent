import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { db, auth } from '../firebase'


const FriendListItem = ({ friendName, id, friendPhoto, func }) => {

    const b = require('../iconsOurDent/newmsg.png')

    return (
        <ListItem key={id} containerStyle={{ backgroundColor: 'transparent', borderRadius: 30, marginBottom: 10, marginTop: 10 }}>


            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', flexDirection: 'row', padding: 16, borderRadius: 30 }}>
                <View style={{ flex: 8 }}>
                    <Text style={{ fontSize: 24, fontWeight: '500', textAlign: 'left', marginLeft: 75 }} >
                        {friendName}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => func(id)} style={{ flex: 1, alignSelf: 'center' }}>
                    <Image style={{ height: 20, width: 20 }} source={b} />
                </TouchableOpacity>
            </View>

            <Avatar
                containerStyle={{ backgroundColor: '#202020', position: 'absolute', left: 15 }}
                rounded
                size={"large"}
                source={{
                    uri: friendPhoto
                }}
            />

        </ListItem>
    )
}

export default FriendListItem

const styles = StyleSheet.create({})
