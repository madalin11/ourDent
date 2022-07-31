import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import TreatmentItem from '../components/TreatmentItem';
import { LinearGradient } from 'expo-linear-gradient';
import UserTreatmentItem from '../components/UserTreatmentItem';
import Request from '../components/Request';
import { auth, db } from '../firebase';

const StaffRequests = ({ navigation }) => {
    const temp = auth?.currentUser?.uid;
    const [requests, setRequests] = useState([])
    const [people, setPeople] = useState([])
    const [searchText, setSearchText] = useState('')
    const [treatments, setTreatments] = useState([])


    async function changeStatus(id, state) {

        await db.collection("peoples").doc(temp).collection("requests").doc(id).update({
            status:state,
            
        })
    }
    function filterZZZ(element) {
        try {
            if (element.data.name == '') {
                return false;
            }
            try {

                if (element.data.name.toLowerCase().includes(searchText.toLowerCase()))
                    return true;

            } catch (err) {

            }
            return false
        } catch (err) {

        }
        return true
    }
    useEffect(() => {
        const unsubscribe = db
            .collection("peoples")
            .doc(temp)
            .collection("requests")
            .onSnapshot(snapshot => {
                setRequests(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    })))

            }

            )
        return unsubscribe;
    }, [db])
    useEffect(() => {
        const unsubscribe = db
            .collection("peoples")
            .onSnapshot(snapshot => {
                setPeople(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    })))

            }

            )
        return unsubscribe;
    }, [db])
    useEffect(() => {
        const unsubscribe = db
            .collection("treatments")
            .onSnapshot(snapshot => {
                setTreatments(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    })))

            }

            )
        console.log(treatments)
        return unsubscribe;
    }, [db])
    return (

        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['yellow', 'green', 'white']}
                style={styles.background}
            />
            <View style={{ marginBottom: 20, marginTop: 100, alignSelf: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Text style={styles.headerTextStyle}>
                    Requests
                </Text>

            </View>
            <View style={{ marginBottom: 20, marginTop: 10, backgroundColor: 'rgba(255,255,255,0.0001)' }}>

                <TextInput

                    onChangeText={(text) => setSearchText(text)}
                    placeholder='Search'
                    style={{ fontSize: 18, backgroundColor: 'white', height: 45, marginBottom: 1, paddingLeft: 55, marginHorizontal: 35, marginTop: 0, borderRadius: 10 }}
                >

                </TextInput>

                <TouchableOpacity style={{ position: 'absolute' }} onPress={Keyboard.dismiss}>
                    <Image source={require('../iconsOurDent/searchTreatm.png')} style={{ top: 8, left: 49, width: 30, height: 30, }}></Image>
                </TouchableOpacity>

            </View>
            <ScrollView style={{ height: '100%' }}>
                {
                    requests.filter(filterZZZ).map(({ id, data }, index) => (
                        <Request
                            key={id}
                            reqName={data.name}
                            userName={people.filter((elm) => elm.id == data.idUser)[0]?.data?.name}
                            id={id}
                            changeStatus={changeStatus}
                            day={data.choosenDay}
                            mounth={data.choosenMounth}
                            year={data.choosenYear}
                            imageLink={treatments.filter((elm) => elm.id == data.idTreatment)[0]?.data?.imageLink}
                            status={data.status}
                        />
                    ))
                }
            </ScrollView>
        </View>

    )
}

export default StaffRequests

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        //alignItems: 'center',



    },
    headerTextStyle: {
        color: 'white',
        fontFamily: 'Times New Roman',
        fontSize: 40,
        fontWeight: 'bold',
        shadowColor: '#202020',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: { height: 3 }
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    },
})