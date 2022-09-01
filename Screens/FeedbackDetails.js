import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import FeedbackUserDetails from '../components/FeedbackUserDetails';
import { db } from '../firebase';


//ecranul de detalii pentru fiecare feedback general avut de un medic
const FeedbackDetails = ({ navigation, route }) => {
  const [ratings, setRatings] = useState([]);



  //extragere din baza de date a tuturor feedbackurilor oferite pentru un medic
  useEffect(() => {
    const unsubscribe = db
      .collection("peoples")
      .doc(route?.params?.id)
      .collection("requests")
      .onSnapshot(snapshot => {
        setRatings(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          })))

      }

      )

    return unsubscribe;
  }, [db])


  //struturarea ecranului si apelarea de functii specifice
  return (
    <View style={styles.container}>
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
      <View style={{ marginBottom: 20, marginTop: 10, alignSelf: 'center' }}>
        <Text style={styles.headerTextStyle}>
          All feedbacks
        </Text>
      </View>

      <ScrollView style={{ height: '100%' }}>

        {
          ratings.map(({ id, data }) => (
            <FeedbackUserDetails
              key={id}
              id={id}
              idUser={data.idUser}
              idStaff={route?.params.id}
            />
          ))
        }
      </ScrollView>
    </View>
  )
}

export default FeedbackDetails

//stilizarea eplicatiei
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
    height: 900,
  },
})