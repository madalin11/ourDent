import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard, Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import StaffItem from '../components/StaffItem';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { auth, db } from '../firebase'

const Staff = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [staff, setStaff] = useState([]);

    function deleteStaff(id) {
        db.collection("peoples").doc(id).delete().then(() => {
            console.log("Staff successfuly deleted");
        }).catch((error) => alert(error));
        navigation.goBack();
    }

    const enterStaff = (name,id,profilePhoto,phoneNumber) => {
        navigation.navigate('Staff details screen',{
            name:name,
            id:id,
            profilePhoto:profilePhoto,
            phoneNumber:phoneNumber,

        });
    }

    useEffect(() => {
        const unsubscribe = db
            .collection("peoples")
            .onSnapshot(snapshot => {
                setStaff(
                    snapshot.docs.filter((doc) => doc.data().ID == 1 || doc.data().ID == 2
                    ).map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                // setSearchabelFriends(friendsToAdd);
            }

            )

        return unsubscribe;
    }, [db])

    function filterZZZ(element) {
        try {
            if (element.data.name == '') {
                return false;
            }
            try {

                if (element.data.name.toLowerCase().includes(searchText.toLowerCase()))
                    return true;

            } catch (err) {

            }
            return false
        } catch (err) {

        }
        return true
    }
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['yellow', 'green', 'white']}
                style={styles.background}
            />
            <View style={{ marginBottom: 20, marginTop: 100, alignSelf: 'center' }}>
                <Text style={styles.headerTextStyle}>
                    Staff
                </Text>
            </View>
            <View style={{ marginBottom: 40, marginTop: 10 }}>

                <TextInput

                    onChangeText={(text) => setSearchText(text)}
                    placeholder='Search' style={{ fontSize: 18, backgroundColor: 'white', height: 45, marginBottom: 1, paddingLeft: 55, marginHorizontal: 35, marginTop: 0, borderRadius: 10 }}
                >

                </TextInput>

                <TouchableOpacity style={{ position: 'absolute' }} onPress={Keyboard.dismiss}>
                    <Image source={require('../iconsOurDent/userSearch.png')} style={{ top: 8, left: 49, width: 30, height: 30, }}></Image>
                </TouchableOpacity>

            </View>
            <ScrollView style={{ height: '100%' }}>

            {
                    staff.filter(filterZZZ).map(({ id, data: { name, profilePhoto,phoneNumber } }) => (
                        <StaffItem key={id}enterStaff={enterStaff} name={name} id={id} profilePhoto={profilePhoto} phoneNumber={phoneNumber} deleteStaff={deleteStaff}/>
                    ))
                }



            </ScrollView>
        </View>
    )
}

export default Staff

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        //alignItems: 'center',



    },
    headerTextStyle: {
        color: 'white',
        fontFamily: 'Times New Roman',
        fontSize: 40,
        fontWeight: 'bold',
        shadowColor: '#202020',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: { height: 3 }
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 800,
    },
})