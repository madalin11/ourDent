import React, { useLayoutEffect, useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity, KeyboardAvoidingView, Pressable, PlatformColor, ScrollView, TextInput, TouchableOpacityBase, Keyboard, Image } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ListItem, Avatar } from 'react-native-elements'
import { Ionicons } from "@expo/vector-icons"
const ChatRoom = ({ navigation , route }) => {
    const flag = route.params.flag
    const scrollViewRef = useRef();
    const [isVisible, setIsVisible] = useState(false)

 
    const [hasPermission, setHasPermission] = useState(null);
  
    const [input, setInput] = useState('');
    
    return (
      /*  <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['yellow', 'green', 'white']}
                style={styles.background}
            />
            <Text>Chat room</Text>
            <TouchableOpacity onPress={() => {
                if (flag) {
                    navigation.navigate('Tab navigator screen')
                }else {
                    navigation.navigate('User home screen');
                }

            }}
                style={{ marginTop: 200 }}>
                <Text>
                    Go Back
                </Text>
            </TouchableOpacity>
        </View>
        */
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>

        <LinearGradient
            // Background Linear Gradient
            colors={['yellow', 'green', 'white']}
            style={styles.background}
        />
        <ListItem containerStyle={{ backgroundColor: 'transparent', borderRadius: 30, marginTop: 25 }}>


            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', flexDirection: 'row', padding: 16, borderRadius: 30 }}>
                <View style={{ flex: 8 }}>
                    <Text style={{ fontSize: 24, fontWeight: '500', textAlign: 'left', marginLeft: 75 }} >
                       
                    </Text>
                </View>
            </View>

            <Avatar
                containerStyle={{ backgroundColor: '#202020', position: 'absolute', left: 14 }}
                rounded
                size={"large"}
               // source={{
               //     uri: route.params.friendPhoto
               // }}
            />

        </ListItem>
        <KeyboardAvoidingView

            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : undefined}
        >
            <>
                <ScrollView
                    style={{ top: -5 }}
                    ref={scrollViewRef}
                    onContentSizeChange={() =>
                        scrollViewRef.current.scrollToEnd({ animated: true })

                    }>
                  
                </ScrollView>
                <View style={styles.footer}>
                    
                    <TextInput
                        value={input}
                        onSubmitEditing={() => setInput('')}
                        onChangeText={(text) => setInput(text)}
                        placeholder="Message"
                        placeholderTextColor="#707070"
                        style={styles.textInput}
                    />
                    <TouchableOpacity >
                        <Ionicons name="send" size={24} color="#202020" />
                    </TouchableOpacity>
                </View>
            </>
        </KeyboardAvoidingView>
    </SafeAreaView >
    )
}

export default ChatRoom

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 10,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    },
    textInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        paddingLeft: 15,
        backgroundColor: "#202020",
        color: "white",
        borderRadius: 30,
        marginLeft: 25,

    },
    reciver: {
        alignSelf: 'flex-end',
        top: -17,
        marginVertical: -7

    },
    transmiter: {
        alignSelf: 'flex-start',
        top: -17,
        marginVertical: -7
    },
    centeredView: {
        flex: 1,
        //justifyContent: "center",

        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        marginTop: 200,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 40,
        paddingVertical: 80,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})