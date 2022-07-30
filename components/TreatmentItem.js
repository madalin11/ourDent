import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const TreatmentItem = ({  enterTreatmentDetails, name, id, imageLink,deleteTreatm,price,description }) => {
    return (
        <TouchableOpacity key={id} onPress={() => enterTreatmentDetails(name,id,imageLink,price,description)}>
            <View style={styles.container}>
                <Image
                    style={{ alignSelf: 'center', width: 60, height: 60, marginRight: 10, borderRadius: 50 }}
                    source={{ uri: imageLink || "https://www.caldentalpasadena.com/img/blog/what-is-included-in-orthodontic-treatment.jpg"}}
                />

                <View style={{ flex: 1 }}>
                    <Text style={styles.treatmName}>
                        {name}
                    </Text>
                </View>

                <TouchableOpacity onPress={()=>deleteTreatm(id)}>
                    <Image
                        style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50 }}
                        source={require('../iconsOurDent/trash.png')}
                    />
                </TouchableOpacity>

            </View>
        </TouchableOpacity>

    )
}

export default TreatmentItem

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