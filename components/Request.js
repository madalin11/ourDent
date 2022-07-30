import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const Request = () => {
    const day = 10;
    const mounth = 'September';
    const year = 2022;
    return (
        <View style={{
            shadowColor: '#202020',
            shadowOffset: { height: 5 },
            shadowOpacity: 0.4,
            shadowRadius: 5
        }}>
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
                <Text style={{ marginRight: 10,
                     fontFamily: 'Times New Roman',
                      fontSize: 18,
                       fontWeight: 'bold', 
                       alignSelf: 'center',
                       color:'blue' }}>
                        Pending
                    </Text>


            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: 10, fontFamily: 'Times New Roman', fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>
                        Date:
                    </Text>
                    <Text numberOfLines={10}
                        ellipsizeMode='tail'
                        style={{
                            fontFamily: 'Arial',
                            alignSelf: 'center',
                            fontSize: 16,
                            flex: 1
                        }}>
                        {day}/{mounth}/{year}
                    </Text>
                </View>

            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: 10, fontFamily: 'Times New Roman', fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>
                        Name:
                    </Text>
                    <Text numberOfLines={10}
                        ellipsizeMode='tail'
                        style={{
                            fontFamily: 'Arial',
                            alignSelf: 'center',
                            fontSize: 16,
                            flex: 1
                        }}>
                        George Andrei
                    </Text>
                </View>

            </View>
            <View style={styles.container1}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,255,0.2)',
                        borderBottomLeftRadius: 10,
                        paddingTop: 7,
                        shadowColor: '#202020',
                        shadowOffset: { height: 4 },
                        shadowOpacity: 1,
                        shadowRadius: 4
                    }}>
                        <TouchableOpacity>
                            <Image
                                style={{ tintColor: 'blue', alignSelf: 'center', width: 24, height: 24, borderRadius: 50 }}
                                source={require('../iconsOurDent/inprogress.png')}
                            />
                            <Text style={{ alignSelf: 'center', paddingBottom: 7 }}>
                                In progress
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,255,0,0.2)',
                        paddingTop: 7,
                        marginHorizontal: 10,
                        shadowColor: '#202020',
                        shadowOffset: { height: 4 },
                        shadowOpacity: 0.9,
                        shadowRadius: 4
                    }}>
                        <TouchableOpacity style={{ flex: 1 }}>
                            <Image
                                style={{ tintColor: 'green', alignSelf: 'center', width: 24, height: 24, borderRadius: 50 }}
                                source={require('../iconsOurDent/done.png')}
                            />
                            <Text style={{ alignSelf: 'center', paddingBottom: 7 }}>
                                Done
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'rgba(255,0,0,0.2)',
                        paddingTop: 7,
                        borderBottomRightRadius: 10,
                        shadowColor: '#202020',
                        shadowOffset: { height: 4 },
                        shadowOpacity: 0.9,
                        shadowRadius: 4
                    }}>
                        <TouchableOpacity>
                            <Image
                                style={{ alignSelf: 'center', tintColor: 'red', width: 24, height: 24, borderRadius: 50 }}
                                source={require('../iconsOurDent/unavailable.png')}
                            />
                            <Text style={{ alignSelf: 'center' }}>
                                Denied
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    )
}

export default Request

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'rgba(255, 255, 255, 0.5)',

        marginHorizontal: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        borderColor: '#202020',
        borderBottomWidth: 2

    },
    treatmName: {
        fontFamily: 'Arial',
        fontWeight: '500',
        fontSize: 20
    },
    container1: {
        flex: 1,
        borderBottomLeftRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',

        marginHorizontal: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        borderBottomRightRadius: 10,
        marginBottom: 10


    },

})