import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown';

const HistTreatment = () => {
    const statusColor = 'blue';
    const showChoseFeedback = 'flex'
    const feedCount = [1, 2, 3, 4, 5];
    return (

        <View style={styles.container}>
            <Image
                style={{ alignSelf: 'center', width: 60, height: 60, marginRight: 10, borderRadius: 50 }}
                source={require('../iconsOurDent/Logo.png')}
            />

            <View style={{ flex: 1 }}>
                <Text style={styles.treatmName}>
                    TreatmentItem
                </Text>
            </View>
            <View style={{}}>
                <Text style={{
                    fontFamily: 'Times New Roman',
                    fontSize: 20,
                    fontWeight: '400',
                    color: statusColor,
                    alignSelf: 'center',
                    marginBottom: 5
                }}>
                    In progress
                </Text>
                <View style={{ alignItems: 'center', display: showChoseFeedback }}>
                    <SelectDropdown
                        defaultButtonText='Feedback'
                        buttonTextStyle={{ fontFamily: 'Arial', fontSize: 16 }}
                        data={feedCount}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        dropdownStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 5 }}
                        buttonStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 15, padding: 0, height: 20, width: 110 }}
                    />
                </View>
            </View>



        </View>


    )
}

export default HistTreatment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginVertical: 2,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5

    },
    treatmName: {
        fontFamily: 'Arial',
        fontWeight: '500',
        fontSize: 20
    }
})