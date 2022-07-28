import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown'

const UserAddTreatment = ({ navigation }) => {
    const countries = ["Alina Popa", "Ghibu Tiberiu"];
    const defaultValue = "Medic"
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
                        source={require('../Icons/leftarrow.png')} />
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
                        Crowns
                    </Text>
                </View>
                <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                    <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                        <Text style={styles.nameComp}>
                            Description
                        </Text>
                    </View>

                    <Text style={styles.normalTextStyle}>
                        A crown is a type of cap that completely covers a real tooth. It's usually made from metal, porcelain fused to metal, or ceramic and is fixed in your mouth.
                        Crowns can be fitted where a tooth has broken, decayed or been damaged, or just to make a tooth look better.
                        To fit a crown, the old tooth will need to be drilled down so it's like a small peg the crown will be fixed on to.
                        It can take some time for the lab to prepare a new crown, so you probably will not have the crown fitted on the same day.
                    </Text>
                </View>
                <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                    <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                        <Text style={styles.nameComp}>
                            Price
                        </Text>
                    </View>

                    <Text style={styles.normalTextStyle}>
                        20$
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <SelectDropdown
                        defaultButtonText='Choose doctor'
                        data={countries}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        dropdownStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 5 }}
                        buttonStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 15, }}
                    />
                </View>

                <View style={{
                    shadowColor: '#202020',
                    shadowRadius:5,
                    shadowOffset: { height: 7 },
                    shadowOpacity: 1,
                }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'rgba(15, 74, 7, 0.6)',
                            borderRadius: 50,
                            alignItems: 'center',
                            marginHorizontal: 98,
                            marginTop: 70,
                            paddingVertical: 5
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