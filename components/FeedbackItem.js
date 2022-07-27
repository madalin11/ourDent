import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const FeedbackItem = () => {
    return (
        <View style={styles.container}>
            <Image
                style={{ alignSelf: 'center', width: 60, height: 60, marginRight: 10, borderRadius: 50 }}
                source={require('../iconsOurDent/Logo.png')}
            />

            <View style={{ flex: 1 }}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.treatmName}>
                    Tudor Marcel Pavel
                </Text>
            </View>

            <Image
                style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50, tintColor: 'orange' }}
                source={require('../iconsOurDent/star.png')}
            />
            <Image
                style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50, tintColor: 'orange' }}
                source={require('../iconsOurDent/star.png')}
            />
            <Image
                style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50, tintColor: 'orange' }}
                source={require('../iconsOurDent/star.png')}
            />
            <Image
                style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50,tintColor:'black' }}
                source={require('../iconsOurDent/star.png')}
            />
            <Image
                style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50,tintColor:'black' }}
                source={require('../iconsOurDent/star.png')}
            />


        </View>
    )
}

export default FeedbackItem

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
        fontSize: 20,


    }
})