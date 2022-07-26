import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import StaffItem from '../components/StaffItem';
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../firebase';


//ecranul ce cuprinde lista cu toti users aplicatiei
const Users = ({ navigation }) => {

  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);


  //functia de stergere a unui user
  function deleteUser(id) {
    db.collection("peoples").doc(id).delete().then(() => {
      console.log("User successfuly deleted");
    }).catch((error) => alert(error));

  }


  //functia de navigare spre ecranul ce cuprinde detalii despre un anumit user ales
  const enterUserDetails = (name, id, profilePhoto, phoneNumber) => {
    navigation.navigate('User details screen', {
      name: name,
      id: id,
      profilePhoto: profilePhoto,
      phoneNumber: phoneNumber,

    });
  }


  //functia de extragere din db a userilor
  useEffect(() => {
    const unsubscribe = db
      .collection("peoples")
      .onSnapshot(snapshot => {
        setUsers(
          snapshot.docs.filter((doc) => doc.data().ID == 3
          ).map((doc) => ({
            id: doc.id,
            data: doc.data()
          })))
    
      }

      )

    return unsubscribe;
  }, [db])


  //functia de fitrare dupa nume a userilor
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

    //struturarea eranului
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['yellow', 'green', 'white']}
        style={styles.background}
      />
      <View style={{ marginBottom: 20, marginTop: 100, alignSelf: 'center' }}>
        <Text style={styles.headerTextStyle}>
          Users
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
          users.filter(filterZZZ).map(({ id, data: { name, profilePhoto, phoneNumber } }) => (
            <StaffItem key={id} enterStaff={enterUserDetails} name={name} id={id} profilePhoto={profilePhoto} phoneNumber={phoneNumber} deleteStaff={deleteUser} />
          ))
        }



      </ScrollView>
    </View>
  )
}

export default Users

//stilizarea ecranului
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
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