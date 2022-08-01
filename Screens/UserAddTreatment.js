import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import { auth, db } from '../firebase';

const UserAddTreatment = ({ navigation, route }) => {
    const countries = ["Alina Popa", "Ghibu Tiberiu"];
    const [staff, setStaff] = useState([]);
    const [choosenDoctor, setChoosenDoctor] = useState('');
    const [choosenDay, setChoosenDay] = useState('');
    const [choosenMounth, setChoosenMounth] = useState('');
    const [choosenYear, setChoosenYear] = useState('');
    const mounth = ["January",
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December']
    const year = ['2022', '2023', '2024', '2025'];
    const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

    useEffect(() => {
        const unsubscribe = db
            .collection("peoples")
            .onSnapshot(snapshot => {
                setStaff(
                    snapshot.docs.filter((doc) => doc.data().ID == 2
                    ).map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    })))

            }

            )

        return unsubscribe;
    }, [db])
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
    async function createRequest(idDoctor, idTreatment, idUser, choosenDay, choosenMounth, choosenYear, name) {
        if (true) {
            let idHistT = makeid(10);
            await db
                .collection("peoples")
                .doc(idDoctor).collection("requests")
                .doc(idHistT)
                .set({
                    idTreatment: idTreatment,
                    idUser: idUser,
                    choosenDay: choosenDay,
                    choosenMounth: choosenMounth,
                    choosenYear: choosenYear,
                    status: 'Requested',
                    name: name,


                })
                .then(() => {
                    console.log("Successufuly request added");
                })
                .catch((error) => alert(error));

            await db
                .collection("peoples")
                .doc(idUser).collection("myRequests")
                .doc(idHistT)
                .set({
                    idTreatment: idTreatment,
                    idDoctor: idDoctor,
                    rating: 5,
                    name: name

                })
                .then(() => {
                    console.log("Successfuly request added to history user");
                })
                .catch((error) => alert(error));

            navigation.navigate('User home screen', { refreshPage: true });
        }

    }
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['yellow', 'green', 'white']}
                style={styles.background}
            />
            <View>
                <TouchableOpacity style={{ marginTop: 60, marginLeft: 15, marginRight: -15 }} onPress={() => navigation.navigate('User home screen')}>
                    <Image
                        style={{ alignSelf: 'flex-start', width: 22, height: 22 }}
                        source={require('../iconsOurDent/leftarrow.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10, marginBottom: 40, alignItems: 'center', alignSelf: 'center' }}>

                <Text style={styles.titleTextStyle}>
                    Treatment
                </Text>
            </View>

            <ScrollView style={{ height: '100%' }}>
                <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                    <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                        <Text style={styles.nameComp}>
                            Name
                        </Text>
                    </View>

                    <Text style={styles.normalTextStyle}>
                        {route?.params.name}
                    </Text>
                </View>
                <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                    <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                        <Text style={styles.nameComp}>
                            Description
                        </Text>
                    </View>

                    <Text style={styles.normalTextStyle}>
                        {route?.params.description}
                    </Text>
                </View>
                <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                    <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                        <Text style={styles.nameComp}>
                            Price
                        </Text>
                    </View>

                    <Text style={styles.normalTextStyle}>
                        {route?.params.price + '$'}
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <SelectDropdown
                        defaultButtonText='Choose doctor'
                        data={staff.map((el) => el.data.name)}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, staff[index].id)
                            setChoosenDoctor(staff[index].id);
                        }}
                        dropdownStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 5 }}
                        buttonStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            borderRadius: 15,
                            shadowColor: '#202020',
                            shadowRadius: 15,
                            shadowOffset: { height: 1 },
                            shadowOpacity: 1,
                        }}
                    />
                </View>

                <View style={{ alignItems: 'center', alignSelf: 'center', flexDirection: 'row', marginTop: 5 }}>
                    <SelectDropdown
                        defaultButtonText='Day'
                        data={day}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                            setChoosenDay(day[index]);
                        }}
                        dropdownStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 5 }}
                        buttonStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            borderRadius: 15,
                            width: '30%',
                            shadowColor: '#202020',
                            shadowRadius: 15,
                            shadowOffset: { height: 1 },
                            shadowOpacity: 1,
                        }}
                    />
                    <SelectDropdown
                        defaultButtonText='Mounth'
                        data={mounth}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                            setChoosenMounth(mounth[index]);
                        }}
                        dropdownStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 5 }}
                        buttonStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            borderRadius: 15,
                            width: '30%',
                            marginRight: 5,
                            shadowColor: '#202020',
                            shadowRadius: 15,
                            shadowOffset: { height: 1 },
                            shadowOpacity: 1,
                        }}
                    />
                    <SelectDropdown
                        defaultButtonText='Year'
                        data={year}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                            setChoosenYear(year[index]);
                        }}
                        dropdownStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 5 }}
                        buttonStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            borderRadius: 15,
                            width: '30%',
                            marginRight: 5,
                            shadowColor: '#202020',
                            shadowRadius: 15,
                            shadowOffset: { height: 1 },
                            shadowOpacity: 1,
                        }}
                    />

                </View>
                <View style={{
                    shadowColor: '#202020',
                    shadowRadius: 5,
                    shadowOffset: { height: 7 },
                    shadowOpacity: 1,
                }}>
                    <TouchableOpacity onPress={() => createRequest(choosenDoctor, route?.params.id, auth?.currentUser?.uid, choosenDay, choosenMounth, choosenYear, route?.params.name)}
                        style={{
                            backgroundColor: 'rgba(15, 74, 7, 0.6)',
                            borderRadius: 50,
                            alignItems: 'center',
                            marginHorizontal: 98,
                            marginTop: 50,
                            paddingVertical: 5,
                            marginBottom: 50
                        }}>
                        <View style={{
                            flexDirection: 'row', alignContent: 'center',
                        }}>
                            <Image
                                style={{ width: 40, height: 40, marginLeft: 10, tintColor: 'rgba(255, 255, 255, 0.5)' }}
                                source={require('../iconsOurDent/shoppingcart.png')} />
                            <Text style={{ alignSelf: 'center', flex: 1, marginLeft: 15 }}>
                                Require a visit
                            </Text>
                        </View>

                    </TouchableOpacity>
                </View>



            </ScrollView>


        </View>
    )
}

export default UserAddTreatment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    },
    titleTextStyle: {
        fontFamily: 'Times New Roman',
        fontSize: 34,
        fontWeight: 'bold',
        color: 'white',
        shadowColor: '#202020',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,



    },
    nameComp: {
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: '200',
        color: '#202020',
        shadowColor: '#202020',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,
        shadowRadius: 10,
        marginVertical: 15,
        marginHorizontal: 20,
    },
    normalTextStyle: {
        marginBottom: 10,
        marginTop: 5,
        marginLeft: 20,
        marginRight: 10
    }
})