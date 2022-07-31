import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { auth, db } from '../firebase';

const HistTreatment = ({ rating, dataTreatm, dataDoctor, id, stat, addFeedback, idDoctor }) => {
    const [statusColor, setStatusColor] = useState('black')

    const showChoseFeedback = 'flex'
    const feedCount = [1, 2, 3, 4, 5];
    const [status, setStatus] = useState([]);
    const temp = auth.currentUser.uid;
    const [fl, setfl] = useState('');
    const [comment, setComment] = useState('')

    useEffect(() => {
        if (status[0]?.data.choosenDay == undefined) {
            setfl(Math.random())
        }
    }, [db])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (status[0]?.data.choosenDay == undefined) {
                setfl(Math.random())
            }
          console.log('This will run after 1 second!')
        }, 100);
        return () => clearTimeout(timer);
      }, [fl]);
      

    useEffect(() => {
        const unsubscribe = db
            .collection("peoples")
            .doc(idDoctor)
            .collection("requests")
            .onSnapshot(snapshot => {
                setStatus(
                    snapshot.docs.filter((doc) => {

                        if (doc.data().idUser == temp && doc.id == id) {
                            setColors(doc?.data().status)
                            return true;
                        }
                        return false;
                    }).map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    })))

            }

            )
        return unsubscribe;
    }, [db, dataTreatm?.imageLink,fl])

    function setColors(status) {

        let color = 'white';
        if (status == 'Requested') {
            color = 'black';
        } else if (status == 'In progress') {
            color = 'blue';
        } else if (status == 'Rejected') {
            color = 'red';
        } else if (status == 'Done') {
            color = 'green';
        }
        setStatusColor(color)
        return true;
    }

    return (

        <View key={id} style={styles.container}>
            <Image
                style={{ alignSelf: 'center', width: 60, height: 60, marginRight: 10, borderRadius: 50 }}
                source={{ uri: dataTreatm?.imageLink || '../iconsOurDent/Logo.png' }}
            />

            <View style={{ flex: 1 }}>
                <Text style={styles.treatmName}>
                    {dataTreatm?.name}
                </Text>
                <Text style={{ fontFamily: 'Times New Roman', fontSize: 16, color: 'rgba(10,41,0,0.9)' }}>
                    {'Date: ' + status[0]?.data.choosenDay + ' ' + status[0]?.data.choosenMounth + ' ' + status[0]?.data.choosenYear + ' '}
                </Text>
                
                <TextInput
                    
                    onChangeText={(text) => setComment(text)}
                    placeholder='Write an comment'
                    
                    style={{ fontSize: 18, height: 30,paddingHorizontal:10, marginBottom: 2,paddingVertical:5,backgroundColor:"rgba(24, 82, 7,0.3)", marginTop: 5,width:170, borderRadius: 10 }}
                >

                </TextInput>

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
                    {status[0]?.data.status}
                </Text>
                <View style={{ alignItems: 'center', display: showChoseFeedback }}>
                    <SelectDropdown
                        defaultButtonText={rating == -1 ? 'Feedback' : (rating + ' stars')}
                        buttonTextStyle={{ fontFamily: 'Arial', fontSize: 16 }}
                        data={feedCount.map((elm) => elm + ' ' + 'stars')}
                        onSelect={(selectedItem, index) => {
                            addFeedback(id, selectedItem.split(' ')[0],comment,idDoctor,rating);
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
        paddingVertical: 5,
        shadowColor: '#202020',
        shadowOpacity: 0.7,
        shadowOffset: { height: 15 },
        shadowRadius: 20

    },
    treatmName: {
        fontFamily: 'Arial',
        fontWeight: '500',
        fontSize: 20
    }
})