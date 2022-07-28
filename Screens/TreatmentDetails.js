import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const TreatmentDetails = ({ navigation }) => {
    const scrollViewRef = useRef();
    return (
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
                            source={require('../Icons/leftarrow.png')} />
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
                            placeholder="Crowns"


                            //value={firstName}
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
                            placeholder="A crown is a type of cap that completely covers a real tooth. It's usually made from metal, porcelain fused to metal, or ceramic and is fixed in your mouth.
                        Crowns can be fitted where a tooth has broken, decayed or been damaged, or just to make a tooth look better.
                        To fit a crown, the old tooth will need to be drilled down so it's like a small peg the crown will be fixed on to.
                        It can take some time for the lab to prepare a new crown, so you probably will not have the crown fitted on the same day."
                            //value={firstName}
                            //onChangeText={text => setFirstName(text)}
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
                            placeholder="20$"
                            keyboardType="numeric"

                            //value={firstName}
                            //onChangeText={text => setFirstName(text)}
                            style={styles.normalTextStyle}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 300
                    }}>
                        <TouchableOpacity >
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

                        <TouchableOpacity >
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

export default TreatmentDetails

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