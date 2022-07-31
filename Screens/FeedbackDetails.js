import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import StaffItem from '../components/FeedbackItem';
import { LinearGradient } from 'expo-linear-gradient';
import FeedbackItem from '../components/FeedbackItem';
import FeedbackUserDetails from '../components/FeedbackUserDetails';
import { auth, db } from '../firebase';

const FeedbackDetails = ({ navigation, route }) => {
  const [ratings, setRatings] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [people, setPeople] = useState([])

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
            source={require('../Icons/leftarrow.png')} />
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
    height: 900,
  },
})