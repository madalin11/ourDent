import React, { useLayoutEffect, useEffect, useState } from 'react'
import { StyleSheet, Text, Keyboard, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { auth, db } from '../firebase'
import FriendListItem from '../components/FriendListItem';
import firebase from 'firebase/compat/app';
import { LinearGradient } from 'expo-linear-gradient';

//ecranul de adaugare chat nou 

const AddChat = ({ navigation }) => {
//modificare atribute ecran folosind useLayoutEffect ce este activat
//in momentul in care au loc modificari pe navigation
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add friend',
            headerBackTitle: "Chats",
        })

    }, [navigation])

    //salvarea in const tmp a uid-ului corespunzator utilizatorului curent logat
    const temp = auth.currentUser.uid;


    //variabila de stare ce memoreaza si seteaza datele despre 
    //prietenii unui utilizator
    const [friends, setFriends] = useState([]);

//functia de filtrare a prietenilor dupa nume
    function filterZZZ(friend) {
        try {
            if (friend.data.name == '') {
                return true;
            }
            try {

                if (friend.data.name.toLowerCase().includes(textSearch.toLowerCase()))
                    return true;

            } catch (err) {

            }
            return false
        } catch (err) {

        }
        return true
    }

    //variabila de stare ce memoreaza si seteaza datele despre 
    //testul introdus in casuta de search din ecranul aplicatiei
    const [textSearch, setSearchText] = useState('')
    

    //functia ce realizeaza extragerea din baza de date a prietenilor
    //unui utilizator
    useEffect(() => {
        const unsubscribe = db
            .collection("peoples")
            .onSnapshot(snapshot => {
                setFriends(
                    snapshot.docs.filter((doc) => doc.data().ID == 1 || doc.data().ID == 2
                    ).map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    })))
            }

            )

        return unsubscribe;
    }, [])

    //functia ce creeaza id unic 
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

    //functia asincrona ce realizeaza crearea unei conversatii noi in baza de date 
    async function addConversation(id) {
        await db
            .collection("peoples")
            .doc(temp).collection("doctors")
            .doc(id)
            .collection("messages")
            .doc(makeid(6))
            .set({
                message: "Bine ai venit",
                timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                uid: temp
            })
            .then(() => {
                
            })
            .catch((error) => alert(error));

        await db
            .collection("peoples")
            .doc(id).collection("doctors")
            .doc(temp)
            .collection("messages")
            .doc(makeid(7))
            .set({
                message: "Bine ai venit",
                timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                uid: temp
            })
            .then(() => {
               
            })
            .catch((error) => alert(error));

        await db.collection("peoples").doc(temp).collection("doctors").doc(id).set({
            haveChats: true
        })

            .then(() => {
                
            }).catch((error) => alert(error));

        await db
            .collection("peoples")
            .doc(id)
            .collection("doctors")
            .doc(temp)
            .set({
                haveChats: true
            })
            .then(() => {
                
            })
            .catch((error) => alert(error));
        navigation.goBack()
    }
    return (
        //structurarea aplicatiei impreuna cu apelarea functiilor
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['yellow', 'green', 'white']}
                style={styles.background}
            />
            <View style={{
                marginTop: 90,
                alignContent:'center',
                alignItems:'center',
                flexDirection: 'row'
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center',flex:1, marginLeft: 10 }}>
                    <Image style={{ width: 20, height: 20, tintColor: 'black' }} source={require('../iconsOurDent/leftarrow.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.titleTextStyle}>
                    New conversation
                </Text>
            </View>


            <View style={{ marginBottom: 10, marginTop: 30 }}>

                <TextInput

                    onChangeText={(text) => setSearchText(text)}
                    placeholder='Search by name' style={{ fontSize: 18, backgroundColor: 'white', height: 45, marginBottom: 1, paddingLeft: 55, marginHorizontal: 35, marginTop: 0, borderRadius: 19 }}
                >

                </TextInput>

                <TouchableOpacity style={{ position: 'absolute' }} onPress={Keyboard.dismiss}>
                    <Image source={require('../iconsOurDent/searchTreatm.png')} style={{ top: 8, left: 49, width: 30, height: 30, }}></Image>
                </TouchableOpacity>

            </View>
            <ScrollView style={{ height: '100%' }}>
                {
                    friends.filter(filterZZZ).map(({ id, data: { name, profilePhoto } }) => (
                        <FriendListItem key={id} func={addConversation} friendName={name} id={id} friendPhoto={profilePhoto} />
                    ))
                }
            </ScrollView>



        </View>
    )
}

export default AddChat

//stilizarea aplicatiei
const styles = StyleSheet.create({
    button: {
        // width: '100%',
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#ffc0c0'

    }, container: {
        paddingHorizontal: 10,
        //paddingTop: 50,
        marginBottom: 135
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    }, titleTextStyle: {
        fontFamily: 'Times New Roman',
        fontSize: 34,
        fontWeight: 'bold',
        color: 'white',
        shadowColor: '#202020',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,
       flex:6





    },
})