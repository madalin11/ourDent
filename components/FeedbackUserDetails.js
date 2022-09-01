import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { db } from '../firebase'


//componenta de feedback 
const FeedbackUserDetails = ({ id, idUser, idStaff }) => {
    const [fl, setfl] = useState('');
    const [req, setReq] = useState([]);
    const [userName, setUserName] = useState([]);


    //extragere din db a feedbackului
    useEffect(() => {
        if (req[0]?.data.rating == undefined) {
            setfl(Math.random())
        }
    }, [db])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (req[0]?.data.rating == undefined) {
                setfl(Math.random())
            }
            console.log('This will run after 1 second!')
        }, 100);
        return () => clearTimeout(timer);
    }, [fl]);

    useEffect(() => {
        const unsubscribe = db
            .collection("peoples")
            .doc(idUser)
            .collection("myRequests")
            .onSnapshot(snapshot => {
                setReq(
                    snapshot.docs.filter((doc) => doc.id == id).map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    })))

            }

            )
        return unsubscribe;
    }, [db, fl])

    useEffect(() => {
        const unsubscribe = db
            .collection("peoples")
            .onSnapshot(snapshot => {
                setUserName(
                    snapshot.docs.filter((doc) => doc.id == idUser).map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    })))

            }
            )
        return unsubscribe;
    }, [db, fl])


    //strutura componentei
    return (
        <View key={id} style={{ shadowColor: '#202020', shadowOffset: { height: 8 }, shadowOpacity: 0.8, shadowRadius: 5 }}>
            <View style={styles.container}>
                <Image
                    style={{ alignSelf: 'center', width: 50, height: 50, marginRight: 10, borderRadius: 0 }}
                    source={{ uri: userName[0]?.data.profilePhoto || 'undefined' }}
                />

                <View style={{ flex: 1 }}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.treatmName}>
                        {userName[0]?.data.name}
                    </Text>
                </View>

                <Image
                    style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50, tintColor: Math.trunc(req[0]?.data.rating) >= 1 ? 'orange' : 'black' }}
                    source={require('../iconsOurDent/star.png')}
                />
                <Image
                    style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50, tintColor: Math.trunc(req[0]?.data.rating) >= 2 ? 'orange' : 'black' }}
                    source={require('../iconsOurDent/star.png')}
                />
                <Image
                    style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50, tintColor: Math.trunc(req[0]?.data.rating) >= 3 ? 'orange' : 'black' }}
                    source={require('../iconsOurDent/star.png')}
                />
                <Image
                    style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50, tintColor: Math.trunc(req[0]?.data.rating) >= 4 ? 'orange' : 'black' }}
                    source={require('../iconsOurDent/star.png')}
                />
                <Image
                    style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50, tintColor: Math.trunc(req[0]?.data.rating) >= 5 ? 'orange' : 'black' }}
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
                            flex: 1
                        }}>
                        {req[0]?.data.comment || '....'}
                    </Text>
                </View>

            </View>
        </View>

    )
}

export default FeedbackUserDetails


//stilizarea componentei
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
        borderTopWidth: 3,
        borderColor: '#202020'


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
        marginBottom: 10

    },
    treatmName: {
        fontFamily: 'Arial',
        fontWeight: '500',
        fontSize: 20,


    }
})