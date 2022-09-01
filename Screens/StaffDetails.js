import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../firebase'


//ecranul ce cuprinde detalii despre fiecare membru staff
const StaffDetails = ({ navigation, route }) => {
    const scrollViewRef = useRef();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('')

//functia de stergerea unui membru staff din db 
    function deleteStaff(id) {
        db.collection("peoples").doc(id).delete().then(() => {
            console.log("Staff successfuly deleted");
        }).catch((error) => alert(error));
        navigation.goBack();
    }

    //functia de update a unui membru staff in db
    async function updateStaff(id) {
        await db.collection("peoples").doc(id).update({
            name: firstName + ' ' + lastName,
            phoneNumber: phoneNumber,
            profilePhoto: profilePhoto,
        })

        navigation.goBack();
    }

    return (

        //struturarea ecranului si a functionalitatilor lui
        <KeyboardAvoidingView
            style={styles.container}

            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={10}
        >


            <View onPress={() => Keyboard.dismiss} style={styles.container}>

                <LinearGradient
                    // Background Linear Gradient
                    colors={['yellow', 'green', 'white']}
                    style={styles.background}
                />

                <View>
                    <TouchableOpacity style={{ marginTop: 60, marginLeft: 15, marginRight: -15 }} onPress={() => navigation.navigate('Tab navigator screen')}>
                        <Image
                            style={{ alignSelf: 'flex-start', width: 22, height: 22 }}
                            source={require('../iconsOurDent/leftarrow.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, marginBottom: 40, alignItems: 'center', alignSelf: 'center' }}>

                    <Text style={styles.titleTextStyle}>
                        Manage staff
                    </Text>
                </View>
                <ScrollView style={{ height: '100%', top: -5 }}

                    ref={scrollViewRef}
                >
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                First name
                            </Text>
                        </View>

                        <TextInput
                            placeholder={route?.params.name.split(' ')[0]}


                            //value={firstName}
                            onChangeText={text => setFirstName(text)}
                            style={styles.normalTextStyle}
                        />
                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                Last name
                            </Text>
                        </View>
                        <TextInput
                            placeholder={route?.params.name.split(' ')[1]}
                            //value={firstName}
                            onChangeText={text => setLastName(text)}
                            style={styles.normalTextStyle}
                        />

                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                Phone number
                            </Text>
                        </View>

                        <TextInput
                            placeholder={route?.params.phoneNumber}
                            keyboardType="numeric"

                            //value={firstName}
                            onChangeText={text => setPhoneNumber(text)}
                            style={styles.normalTextStyle}
                        />
                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                Profile photo
                            </Text>
                        </View>

                        <TextInput
                            placeholder={route?.params.profilePhoto}


                            //value={firstName}
                            onChangeText={text => setProfilePhoto(text)}
                            style={styles.normalTextStyle}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 200
                    }}>
                        <TouchableOpacity onPress={() => updateStaff(route?.params.id)} >
                            <View style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: 10, paddingHorizontal: 40, marginHorizontal: 50, borderRadius: 10, shadowColor: '#202020',
                                shadowRadius: 10,
                                shadowOpacity: 0.6,
                                shadowOffset: { width: 0, height: 10 }
                            }}>

                                <Text>
                                    Update
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => deleteStaff(route?.params.id)}>
                            <View style={{
                                backgroundColor: 'rgba(204, 12, 12, 0.7)', padding: 10, paddingHorizontal: 40, marginHorizontal: 50, borderRadius: 10, shadowColor: '#202020',
                                shadowRadius: 10,
                                shadowOpacity: 0.6,
                                shadowOffset: { width: 0, height: 10 }
                            }}>

                                <Text>
                                    Delete
                                </Text>
                            </View>
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            </View>

        </KeyboardAvoidingView>


    )
}

export default StaffDetails

//stilizarea aplicatiei
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',


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