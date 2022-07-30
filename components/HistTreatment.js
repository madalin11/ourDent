import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const HistTreatment = () => {
    const c = 'blue';
    return (

        <View style={styles.container}>
            <Image
                style={{ alignSelf: 'center', width: 60, height: 60, marginRight: 10, borderRadius: 50 }}
                source={require('../iconsOurDent/Logo.png')}
            />

            <View style={{ flex: 1 }}>
                <Text style={styles.treatmName}>
                    TreatmentItem
                </Text>
            </View>

            <Text style={{
                fontFamily: 'Times New Roman',
                fontSize: 20,
                fontWeight: '400',
                color: c
            }}>
                In progress
            </Text>


        </View>


    )
}

export default HistTreatment

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
        paddingVertical: 5

    },
    treatmName: {
        fontFamily: 'Arial',
        fontWeight: '500',
        fontSize: 20
    }
})