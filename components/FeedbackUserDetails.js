import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const FeedbackUserDetails = () => {
    return (
        <View style={{shadowColor:'#202020',shadowOffset:{height:8},shadowOpacity:0.8,shadowRadius:5}}>
            <View style={styles.container}>
                <Image
                    style={{ alignSelf: 'center', width: 50, height: 50, marginRight: 10, borderRadius: 0 }}
                    source={require('../iconsOurDent/usermale.png')}
                />

                <View style={{ flex: 1 }}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.treatmName}>
                        Alina Munteanu
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
                    style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50, tintColor: 'black' }}
                    source={require('../iconsOurDent/star.png')}
                />
                <Image
                    style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50, tintColor: 'black' }}
                    source={require('../iconsOurDent/star.png')}
                />


            </View>
            <View style={styles.container1}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: 10, fontFamily: 'Times New Roman', fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>
                        Comment:
                    </Text>
                    <Text numberOfLines={10}
                        ellipsizeMode='tail'
                        style={{
                            fontFamily: 'Arial',
                            alignSelf: 'center',
                            fontSize: 16,
                            flex:1
                        }}>
                        Such a mirific experience
                    </Text>
                </View>

            </View>
        </View>

    )
}

export default FeedbackUserDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginVertical: 2,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        borderTopWidth:3,
        borderColor:'#202020'


    },
    container1: {
        flex: 1,
        borderBottomLeftRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginVertical: 2,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        borderBottomRightRadius: 10,
        marginBottom:10

    },
    treatmName: {
        fontFamily: 'Arial',
        fontWeight: '500',
        fontSize: 20,


    }
})