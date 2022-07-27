
import React,{ useState, useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, Image, Platform } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
        style={styles.container}

        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={90}
    >
        <LinearGradient
            // Background Linear Gradient
            colors={['yellow', 'green', 'white']}
            style={styles.background}
        />
        <View style={{ height: 200 }} />
        <View>
            <Image 
            style={{ alignSelf: 'center', width: 120, height: 120, marginTop: 50, marginBottom: 10, alignContent: 'center' }} 
            source={require('../iconsOurDent/Logo.png')} />
            <Text style={{alignSelf:'center',marginBottom:90,color:'white',fontFamily:'Times New Roman',fontWeight:'bold',fontSize:24,shadowOpacity:1,shadowOffset:{height:3},shadowRadius:2}}
            >Your smile is our happiness</Text>
        </View>
        <View style={styles.inputContainer}>

            <TextInput
                placeholder="Email"
                type="email"
                value={email}
                //onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                //onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
            />

        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                //onPress={handleLogin}
                style={styles.button}

            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Register screen")}
                style={[styles.button, styles.buttonOutline]}

            >
                <Text style={styles.buttonOutlineText}>Signup</Text>
            </TouchableOpacity>
            <View style={{ height: 100 }} />
        </View>

    </KeyboardAvoidingView>
</TouchableWithoutFeedback >
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //alignContent:'center',
        backgroundColor: '#ADD8E6',


    },
    inputContainer: {
        width: '80%',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        shadowColor:'#202020',
        shadowRadius:10,
        shadowOpacity:0.6,
        shadowOffset:{width:0,height:20}
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,

    },
    button: {
        backgroundColor: '#085912',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor:'#202020',
        shadowRadius:35,
        shadowOpacity:0.8,
        shadowOffset:{width:0,height:20},
        borderWidth:1,



    },
    buttonOutline: {
        backgroundColor: '#cefa69',
        marginTop: 5,
        marginBottom: 20,
        borderColor: '#202020',
        borderWidth: 1,
        
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#202020',
        fontWeight: 'bold',
        fontSize: 16,
    },
})