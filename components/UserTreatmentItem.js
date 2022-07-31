import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const UserTreatmentItem = ({ enterTreatmentDetails, name, description, imageLink, id, price }) => {
    return (
        <TouchableOpacity onPress={() => enterTreatmentDetails(name, description, imageLink, id, price)}>
            <View style={styles.container}>
                <Image
                    style={{ alignSelf: 'center', width: 60, height: 60, marginRight: 10, borderRadius: 50 }}
                    source={{ uri: imageLink || '../iconsOurDent/Logo.png' }}
                />

                <View style={{ flex: 1 }}>
                    <Text style={styles.treatmName}>
                        {name}
                    </Text>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={{fontFamily:'Times New Roman'}}>
                        {'Description: '+ description}
                    </Text>
                </View>



            </View>
        </TouchableOpacity>

    )
}

export default UserTreatmentItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginVertical: 2,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        shadowColor:'#202020',
        shadowOffset:{height:10},
        shadowOpacity:0.8,
        shadowRadius:20

    },
    treatmName: {
        fontFamily: 'Arial',
        fontWeight: '500',
        fontSize: 20
    }
})