import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import {auth,db} from '../firebase';
import { StyleSheet, Text, TextInput, Image, View, TouchableOpacity, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native'


const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetePassword, setRepetePassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [memberID, setMemberID] = useState('');
    const [flagReg, setflagReg] = useState('')
    function checkTextInput() {
        if (!firstName.trim()) {
            alert('Please Enter First Name');
            return;
        }
        
        if (!lastName.trim()) {
            alert('Please Enter Last Name');
            return;
        }
        if (!email.trim()) {
            alert('Please Enter email');
            return;
        }
        if (!phoneNumber.trim()) {
            alert('Please Enter Phone Number');
            return;
        }
        if (!memberID.trim() && (memberID.trim()!=1 || memberID.trim()!=2 || memberID.trim()!=3) ) {
            alert('Please Enter valid ID');
            return;
        }
        if (repetePassword.trim() !== password.trim()) {
            alert('Password does\'t match');
            return;
        }

        return true;
    };
    async function createPeople(temp, name, photo) {
        await db.collection("peoples").doc(temp).set({
            email:email,
            name: name,
            phoneNumber:phoneNumber,
            ID:memberID,
            profilePhoto: photo

        }).then(() => {
            console.log("User successfuly added");
        }).catch((error) => alert(error));
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                if(memberID == 1){
                    navigation.replace("Tab navigator screen");
                }else if(memberID == 2){
                    navigation.replace("Staff home screen");
                }else if(memberID == 3){
                    navigation.replace("User home screen");
                }
                
            }
        })

        return unsubscribe
    }, [flagReg])
    const handleSignUp = () => {
        if (checkTextInput() == true) {

            auth
                .createUserWithEmailAndPassword(email, password)
                .then((authUser) => {
                    const auth1 = authUser.user;

                    // Updates the user attributes:
                    const fullName = firstName + " " + lastName;
                    auth1.updateProfile({
                        displayName: fullName,
                        photoURL: photoUrl || "https://www.pngfind.com/pngs/m/341-3415733_male-portrait-avatar-face-head-black-hair-shirt.png"
                    }).then(function () {
                        console.log(auth1.displayName + "" + auth1.photoURL)
                        console.log(auth1.uid)
                        setflagReg('Account has been created !');
                        createPeople(auth1.uid, auth1.displayName, auth1.photoURL);
                    }, function (error) {
                    });
                })
                .catch(error => alert(error.message))
        }
        
    }

  return (
    <KeyboardAvoidingView
            style={styles.container}

            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={0}
        >
            <LinearGradient
                // Background Linear Gradient
                colors={['yellow', 'green', 'white']}
                style={styles.background}
            />
            <ScrollView>
                <View style={{ marginTop: 50 }}>

                    <View style={{ marginBottom: 10 }}>
                        <TouchableOpacity
                            raised onPress={() => navigation.navigate( "Login screen" )}
                        >
                            <Image source={require('../Icons/leftarrow.png')} style={{ marginTop: 20, marginLeft: 10, width: 20, height: 20, marginBottom: 20 }}></Image>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginBottom: 50, fontSize: 30, textAlign: 'center', color: 'white', fontWeight: 'bold',fontFamily:'Times New Roman',shadowColor:'#202020',shadowOpacity:1,shadowOffset:{height:3},shadowRadius:2 }}>
                        Signup
                    </Text>
                    <TextInput
                        placeholder="First Name"
                        type="text"
                        autoCapitalize="words"
                        value={firstName}
                        onChangeText={text => setFirstName(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Last Name"
                        type="text"
                        autoCapitalize="words"
                        value={lastName}
                        onChangeText={text => setLastName(text)}
                        style={styles.input}
                    // secureTextEntry
                    />
                    <TextInput
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"

                    />

                    <TextInput
                        placeholder="Phone number"
                        value={phoneNumber}
                        onChangeText={text => setPhoneNumber(text)}
                        style={styles.input}
                        keyboardType="numeric"

                    />
                    <TextInput
                        placeholder="Photo URL (optional)"
                        value={photoUrl}
                        onChangeText={text => setPhotoUrl(text)}
                        style={styles.input}


                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                    <TextInput
                        placeholder="Repete Password"
                        value={repetePassword}
                        onChangeText={text => setRepetePassword(text)}
                        style={styles.input}
                        secureTextEntry
                        onSubmitEditing={handleSignUp}
                    />
                    <TextInput
                        placeholder="ID (1:Admin,2:Staff or 3:User)"
                        value={memberID}
                        onChangeText={text => setMemberID(text)}
                        style={styles.input}
                        //secureTextEntry
                        onSubmitEditing={handleSignUp}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity

                        onPress={handleSignUp}
                        style={styles.button}
                    >
                        <Text style={styles.buttonOutlineText}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 7,
        width: '80%',
        alignSelf: 'center',
        shadowColor:'#202020',
        shadowRadius:10,
        shadowOpacity:0.6,
        shadowOffset:{width:0,height:20}


    },
    container: {
        flex: 1,
        //alignContent:'center',
        backgroundColor: '#ADD8E6',


    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    },
    button: {
        backgroundColor: '#cefa69',
        width: '90%',
        padding: 11,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: '#202020',
        borderWidth: 1,
        shadowColor:'#202020',
        shadowRadius:20,
        shadowOpacity:0.8,
        shadowOffset:{width:0,height:20}


    },
    buttonContainer: {
        width: '100%',
        paddingLeft: 70,
        paddingRight: 70,
        alignSelf: 'center',
        //justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,

    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 20,
        borderColor: '#202020',
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: 'black',
        fontWeight: '400',
        fontSize: 16,
    },
})