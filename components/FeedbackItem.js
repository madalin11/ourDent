import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const FeedbackItem = ({enterFeedback,profilePhoto,name,id,phoneNumber,rating}) => {
    return (
        <TouchableOpacity key={id} onPress={()=>enterFeedback(name,id,profilePhoto,phoneNumber,rating)}>
            <View style={styles.container}>
            <Image
                style={{ alignSelf: 'center', width: 50, height: 50, marginRight: 10, borderRadius: 0 }}
                source={{uri:profilePhoto ||'../iconsOurDent/usermale.png' }}
            />

            <View style={{ flex: 1 }}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.treatmName}>
                    {name}
                </Text>
            </View>

            <Image
                style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50, tintColor: Math.trunc(rating) >= 1? 'orange':'black' }}
                source={require('../iconsOurDent/star.png')}
            />
            <Image
                style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50, tintColor: Math.trunc(rating) >= 2? 'orange':'black' }}
                source={require('../iconsOurDent/star.png')}
            />
            <Image
                style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50, tintColor: Math.trunc(rating) >= 3? 'orange':'black' }}
                source={require('../iconsOurDent/star.png')}
            />
            <Image
                style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50,tintColor: Math.trunc(rating) >= 4? 'orange':'black' }}
                source={require('../iconsOurDent/star.png')}
            />
            <Image
                style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50,tintColor: Math.trunc(rating) == 5? 'orange':'black' }}
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
        paddingVertical: 5,
        shadowColor:'#202020',
        shadowOffset:{height:5},
        shadowOpacity:0.8,
        shadowRadius:20

    },
    treatmName: {
        fontFamily: 'Arial',
        fontWeight: '500',
        fontSize: 20,


    }
})