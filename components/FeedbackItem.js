import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const FeedbackItem = ({enterFeedback}) => {
    return (
        <TouchableOpacity onPress={()=>enterFeedback()}>
            <View style={styles.container}>
            <Image
                style={{ alignSelf: 'center', width: 50, height: 50, marginRight: 10, borderRadius: 0 }}
                source={require('../iconsOurDent/usermale.png')}
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
        </TouchableOpacity>
        
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