import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, Image, View, TouchableOpacity, ScrollView, Keyboard } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';
import { auth, db } from '../firebase';
import ChatListItem from '../components/ChatListItem';


//ecranul de chat unde sunt cuprinse toate conversatiile realizate
//de utilizator
const Chat = ({ navigation }) => {
//constante pentru setare si memorarea text necesar cautarii dupa nume a conversatiilor,
//prietenii , utilizatorul curent
  const [textSearch, setTextSearch] = useState('')
  const [friends, setFriends] = useState([])
  const temp = auth.currentUser.uid;
  const [friendsAdd, setFriendsAdd] = useState([])


  //check what kind of user is and set corespondent flag
  const enterChat = (id, friendName, friendPhoto) => {
    navigation.navigate('Chat room screen', {
      id: id,
      friendName: friendName,
      friendPhoto: friendPhoto
    });
  }

  //functia ce realizeaza delogarea userului din aplicatie
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login screen' }],
        });
      })
      .catch(error => alert(error.message))
  }

  //functia ce extrage doctorii cu care are conversatii din baza de date 
  useEffect(() => {
    const unsubscribe = db
      .collection("peoples")
      .doc(temp)
      .collection("doctors").onSnapshot(snapshot =>
        setFriends(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          }))
        )

      )
    console.log(friends)
    return unsubscribe;
  }, [navigation])


  //functia ce extrage si filtreaza doctorii din db care sunt prieteni cu userul
  useEffect(() => {
    const unsubscribe = db
      .collection("peoples")
      .onSnapshot(snapshot => {
        setFriendsAdd(
          snapshot.docs.filter((doc) => {
            let t = false;
            friends.forEach(element => {
              if ((element.id == doc.id) && (element.data.haveChats == true))
                t = true;
            });
            return t;
          }
          ).map((doc) => ({
            id: doc.id,
            data: doc.data()
          })))
      }

      )

    return unsubscribe;
  }, [friends])

  //functia de filtrare dupa nume 
  function filterZZZ(friend) {
    try {
      if (friend.data.name == '') {
        return true;
      }
      try {

        if (friend.data.name.toLowerCase().includes(textSearch.toLowerCase()))
          return true;

      } catch (err) {

      }
      return false
    } catch (err) {

    }
    return true
  }
  return (
    //struturarea aplicatie impreuna cu apelarea functiilor pentru functionalitati specifice
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['yellow', 'green', 'white']}
        style={styles.background}
      />

      <View style={{ flexDirection: 'row', marginTop: 85 }}>
        <TouchableOpacity onPress={handleSignOut} style={{ alignSelf: 'center', marginLeft: 20 }}>
          <Image style={{ width: 20, height: 20, tintColor: 'black' }} source={require('../iconsOurDent/leftarrow.png')}></Image>
        </TouchableOpacity>
        <Text style={{ fontSize: 40, flex: 1, textAlign: 'center', color: 'white', fontWeight: '500', fontFamily: 'Times New Roman', shadowColor: '#202020', shadowOpacity: 1, shadowOffset: { height: 2 } }}>
          Chat
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Add chat")} style={{ alignSelf: 'center', marginRight: 20 }}>
          <Image style={{ width: 20, height: 20 }} source={require('../iconsOurDent/newchat.png')}></Image>
        </TouchableOpacity>
      </View>

      <View style={{ marginBottom: 40, marginTop: 10 }}>

        <TextInput

          onChangeText={(text) => setTextSearch(text)}
          placeholder='Search' style={{ fontSize: 18, backgroundColor: 'white', height: 45, marginBottom: 1, paddingLeft: 55, marginHorizontal: 35, marginTop: 0, borderRadius: 10 }}
        >

        </TextInput>

        <TouchableOpacity style={{ position: 'absolute' }} onPress={Keyboard.dismiss}>
          <Image source={require('../iconsOurDent/search.png')} style={{ top: 8, left: 49, width: 30, height: 30, }}></Image>
        </TouchableOpacity>

      </View>



      <ScrollView style={{ height: '100%' }}>

        {
          friendsAdd.filter(filterZZZ).map(({ id, data: { name, profilePhoto } }) => (
            <ChatListItem key={id} enterChat={enterChat} friendName={name} id={id} friendPhoto={profilePhoto} />
          ))
        }


      </ScrollView>


    </View>
  )
}

export default Chat


//stilizarea aplicatiei
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  }
})