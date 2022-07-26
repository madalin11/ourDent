import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../firebase'


//ecranul de adaugare tratament nou
const AddTreatment = ({ navigation }) => {

    //constanta ce pointeaza spre componenta de scroll view
    const scrollViewRef = useRef();
    //constante ce realizeaza memorarea si setarea ( use state)
    //a numelui , descrierii , pretului si linkul imaginii pentru tratament
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [linkImage, setLinkImage] = useState('')


    //functia de adaugarea tratament ce realieaza memorarea in baza de date 
    async function addTreatment(id) {
        await db.collection("treatments").doc(makeid(10)).set({
            name: name,
            description: description,
            price: price,
            imageLink:linkImage || "https://www.caldentalpasadena.com/img/blog/what-is-included-in-orthodontic-treatment.jpg"


        }).then(() => {
            console.log("Treatment successfuly added");
        }).catch((error) => alert(error));

        navigation.goBack();
    }
    

    //functia de creare id 
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
    return (
        //structurarea ecranului impreuna cu apelarea functiilor specifice pentru 
        //functionalitate
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
                        Treatment
                    </Text>
                </View>
                <ScrollView style={{ height: '100%', top: -5 }}

                    ref={scrollViewRef}
                >
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                Name
                            </Text>
                        </View>

                        <TextInput
                            placeholder="Add name"

                            onChangeText={(text) => setName(text)}
                        
                            //onChangeText={text => setFirstName(text)}
                            style={styles.normalTextStyle}
                        />
                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                Description
                            </Text>
                        </View>
                        <TextInput
                            placeholder="Add description"
                           
                            onChangeText={text => setDescription(text)}
                            style={styles.normalTextStyle}
                        />

                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                Price
                            </Text>
                        </View>

                        <TextInput
                            placeholder="Add price"
                            keyboardType="numeric"

                            
                            onChangeText={text => setPrice(text)}
                            style={styles.normalTextStyle}
                        />
                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                Image URL
                            </Text>
                        </View>

                        <TextInput
                            placeholder="Add image url"
                            keyboardType="numeric"

                            
                            onChangeText={text => setLinkImage(text)}
                            style={styles.normalTextStyle}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 200
                    }}>
                        <TouchableOpacity onPress={addTreatment}>
                            <View style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.4)', padding: 10, paddingHorizontal: 40, marginHorizontal: 50, borderRadius: 10, shadowColor: '#202020',
                                shadowRadius: 10,
                                shadowOpacity: 0.6,
                                shadowOffset: { width: 0, height: 10 }
                            }}>

                                <Text>
                                    ADD
                                </Text>
                            </View>
                        </TouchableOpacity>




                    </View>
                </ScrollView>
            </View>

        </KeyboardAvoidingView>


    )
}

export default AddTreatment


//stilizarea ecranului de adaugare tratament
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