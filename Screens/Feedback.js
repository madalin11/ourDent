import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import FeedbackItem from '../components/FeedbackItem';
import { db } from '../firebase';


//ecranul ce cuprinde lista cu feedback pentru doctori
const Feedback = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [feedback, setFeedback] = useState([]);


//functia ce realizeaza navigarea spre detalii cu privire la un feedback anume
  const enterFeedback = (name, id, profilePhoto, phoneNumber, rating) => {
    navigation.navigate('Feedback details screen', {
      name: name,
      id: id,
      profilePhoto: profilePhoto,
      phoneNumber: phoneNumber,
      rating: rating,
    });
  }


  //functia ce realizeaza citirea din baza de date a tuturor utilizatorilor
  useEffect(() => {
    const unsubscribe = db
      .collection("peoples")
      .onSnapshot(snapshot => {
        setFeedback(
          snapshot.docs.filter((doc) => doc.data().ID == 1 || doc.data().ID == 2
          ).map((doc) => ({
            id: doc.id,
            data: doc.data()
          })))
      }

      )

    return unsubscribe;
  }, [db])


  //functia de filtrare dupa nume 
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

    //structurarea ecranului impreuna cu functionalitatile apelate
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['yellow', 'green', 'white']}
        style={styles.background}
      />
      <View style={{ marginBottom: 20, marginTop: 100, alignSelf: 'center' }}>
        <Text style={styles.headerTextStyle}>
          Feedback
        </Text>
      </View>
      <View style={{ marginBottom: 40, marginTop: 10 }}>

        <TextInput

          onChangeText={(text) => setSearchText(text)}
          placeholder='Search' style={{ fontSize: 18, backgroundColor: 'white', height: 45, marginBottom: 1, paddingLeft: 55, marginHorizontal: 35, marginTop: 0, borderRadius: 10 }}
        >

        </TextInput>

        <TouchableOpacity style={{ position: 'absolute' }} onPress={Keyboard.dismiss}>
          <Image source={require('../iconsOurDent/searchFeedback.png')} style={{ top: 8, left: 49, width: 30, height: 30, }}></Image>
        </TouchableOpacity>

      </View>
      <ScrollView style={{ height: '100%' }}>

        {
          feedback.filter(filterZZZ).map(({ id, data: { name, profilePhoto, phoneNumber, rating } }) => (
            <FeedbackItem key={id} enterFeedback={enterFeedback} name={name} id={id} profilePhoto={profilePhoto} phoneNumber={phoneNumber} rating={rating} />
          ))
        }
      </ScrollView>
    </View>
  )
}

export default Feedback


//stilizarea aplicatiei
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