import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import TreatmentItem from '../components/TreatmentItem';
import { LinearGradient } from 'expo-linear-gradient';
import HistTreatment from '../components/HistTreatment';
import { auth, db } from '../firebase';

const MyList = ({ navigation }) => {
    const [histTreatm, setHistTreatm] = useState([]);
    const [histTreatm2, setHistTreatm2] = useState([]);
    const [histTreatm3, setHistTreatm3] = useState([]);
    const temp = auth?.currentUser?.uid;
    const [searchText, setSearchText] = useState('')
    
    
    useEffect(() => {
        const unsubscribe = db
            .collection("peoples")
            .doc(temp)
            .collection("myRequests")
            .onSnapshot(snapshot => {
                setHistTreatm(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    })))

            }

            )
        console.log('ceva')
        console.log(histTreatm)
        return unsubscribe;
    }, [db])

    


    useEffect(() => {
        const unsubscribe = db
            .collection("treatments")
            .onSnapshot(snapshot => {
                setHistTreatm2(
                    snapshot.docs.filter((doc) => {
                        let t = false;
                        histTreatm.forEach(element => {
                            if (element.data.idTreatment == doc.id)
                                t = true;
                        });
                        return t;
                    }
                    ).map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    })))

            }

            )
        console.log('ceva1')
        console.log(histTreatm2)
        return unsubscribe;
    }, [histTreatm])
    useEffect(() => {
        const unsubscribe = db
            .collection("peoples")
            .onSnapshot(snapshot => {
                setHistTreatm3(
                    snapshot.docs.filter((doc) => {
                        let t = false;
                        histTreatm.forEach(element => {
                            if (element.data.idDoctor == doc.id)
                                t = true;
                        });
                        return t;
                    }
                    ).map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    })))

            }

            )
        console.log('ceva2')
        console.log(histTreatm3)
        return unsubscribe;
    }, [histTreatm])


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
    async function addFeedback(id, feedback,comment,idDoctor,rating) {
        await db.collection("peoples").doc(temp).collection("myRequests").doc(id).update({
            rating: feedback,
            comment:comment
        }).then(() => {
            console.log("Feedback has been updated");
        }).catch((error) => alert(error));

        await db.collection("peoples").doc(idDoctor).update({
            rating: (feedback + rating)/2,
        }).then(() => {
            console.log("Feedback has been updated");
        }).catch((error) => alert(error));
    }
    return (

        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['yellow', 'green', 'white']}
                style={styles.background}
            />
            <View style={{ marginBottom: 20, marginTop: 100, alignSelf: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Text style={styles.headerTextStyle}>
                    History treatments
                </Text>

            </View>
            <View style={{ marginBottom: 40, marginTop: 10 }}>

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
                    histTreatm.filter(filterZZZ).map(({ id, data }, index) => (
                        <HistTreatment
                            key={id}
                            rating={histTreatm[index]?.data.rating}
                            dataTreatm={histTreatm2.filter((elm) => elm.id == histTreatm[index]?.data.idTreatment)[0]?.data}
                            dataDoctor={histTreatm3.filter((elm) => elm.id == histTreatm[index]?.data.idDoctor)[0]?.data}
                            idDoctor={histTreatm3.filter((elm) => elm.id == histTreatm[index]?.data.idDoctor)[0]?.id}
                            id={id}
                            addFeedback={addFeedback}

                        />
                    ))
                }
            </ScrollView>
        </View>

    )
}

export default MyList

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
        height: 800,
    },
})