import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react'
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

    const handleSignUp = () => {
        navigation.navigate("Tab navigator screen")
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
                        autoCapitalize="none"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                        keyboardType="email-address"

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
                        //onSubmitEditing={handleSignUp}
                    />
                    <TextInput
                        placeholder="ID (1:Admin,2:Staff or 3:User)"
                        value={memberID}
                        onChangeText={text => setMemberID(text)}
                        style={styles.input}
                        //secureTextEntry
                        //onSubmitEditing={handleSignUp}
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