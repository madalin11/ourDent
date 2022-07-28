import { ScrollView, StyleSheet, Text, TouchableOpacity, View,TextInput,Keyboard,Image } from 'react-native'
import React from 'react'
import StaffItem from '../components/FeedbackItem';
import { LinearGradient } from 'expo-linear-gradient';
import FeedbackItem from '../components/FeedbackItem';

const Feedback = ({navigation}) => {

  const enterFeedback = () =>{
    navigation.navigate('Feedback details screen');
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
          Feedback
        </Text>
      </View>
      <View style={{ marginBottom: 40, marginTop: 10 }}>

        <TextInput

          //onChangeText={(text) => setTextSearch(text)}
          placeholder='Search' style={{ fontSize: 18, backgroundColor: 'white', height: 45, marginBottom: 1, paddingLeft: 55, marginHorizontal: 35, marginTop: 0, borderRadius: 10 }}
        >

        </TextInput>

        <TouchableOpacity style={{ position: 'absolute' }} onPress={Keyboard.dismiss}>
          <Image source={require('../iconsOurDent/searchFeedback.png')} style={{ top: 8, left: 49, width: 30, height: 30, }}></Image>
        </TouchableOpacity>

      </View>
      <ScrollView style={{ height: '100%' }}>
        <TouchableOpacity>
          <FeedbackItem enterFeedback={enterFeedback}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FeedbackItem enterFeedback={enterFeedback}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FeedbackItem enterFeedback={enterFeedback}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FeedbackItem enterFeedback={enterFeedback}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FeedbackItem enterFeedback={enterFeedback}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FeedbackItem enterFeedback={enterFeedback}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FeedbackItem enterFeedback={enterFeedback}/>
        </TouchableOpacity>
        



      </ScrollView>
    </View>
  )
}

export default Feedback

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