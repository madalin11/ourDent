import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import TreatmentItem from '../components/TreatmentItem';
import { LinearGradient } from 'expo-linear-gradient';
import UserTreatmentItem from '../components/UserTreatmentItem';
import { auth, db } from '../firebase';

const UserTreatment = ({ navigation }) => {

    const [treatments, setTreatments] = useState([]);
    const [searchText, setSearchText] = useState('');
    const enterTreatmentDetails = (name,description, imageLink, id,price) => {
        navigation.navigate('User add treatment screen', {
            id: id,
            name: name,
            description: description,
            imageLink: imageLink,
            price: price
        });

    }
    useEffect(() => {
        const unsubscribe = db
            .collection("treatments")
            .onSnapshot(snapshot =>
                setTreatments(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                ))

        return unsubscribe;
    }, [db])
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
    return (

        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['yellow', 'green', 'white']}
                style={styles.background}
            />
            <View style={{ marginBottom: 20, marginTop: 100, alignSelf: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Text style={styles.headerTextStyle}>
                    Treatments
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
                    treatments.filter(filterZZZ).map(({ id, data }) => (
                        <UserTreatmentItem key={id} enterTreatmentDetails={enterTreatmentDetails} name={data.name} id={id} imageLink={data.imageLink} price={data.price} description={data.description} />
                    ))
                }



            </ScrollView>
        </View>

    )
}

export default UserTreatment

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