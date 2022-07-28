import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, Image, View, TouchableOpacity, ScrollView, Keyboard } from 'react-native'
import ConversationItem from '../components/ConversationItem';
import { LinearGradient } from 'expo-linear-gradient';



const Chat = ({navigation}) => {

  const [textSearch, setTextSearch] = useState('')
  const [friends, setFriends] = useState([])
 
  const [friendsAdd, setFriendsAdd] = useState([])
//check what kind of user is and set corespondent flag
  const enterChat = ()=>{
    navigation.navigate('Chat room screen', {
      flag:false,
    })
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['yellow', 'green', 'white']}
        style={styles.background}
      />

      <View style={{ flexDirection: 'column', marginTop: 85 }}>
        <Text style={{ fontSize: 40, textAlign: 'center', color: 'white', fontWeight: '500',fontFamily:'Times New Roman',shadowColor:'#202020',shadowOpacity:1,shadowOffset:{height:2} }}>
          Chat
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login screen')} style={{ alignSelf: 'flex-end', marginRight: 20, top: -23 }}>
          <Image style={{ width: 20, height: 20 }} source={require('../Icons/newchat.png')}></Image>
        </TouchableOpacity>
      </View>

      <View style={{ marginBottom: 40, marginTop: 10 }}>

        <TextInput

          //onChangeText={(text) => setTextSearch(text)}
          placeholder='Search' style={{ fontSize: 18, backgroundColor: 'white', height: 45, marginBottom: 1, paddingLeft: 55, marginHorizontal: 35, marginTop: 0, borderRadius: 10 }}
        >

        </TextInput>

        <TouchableOpacity style={{ position: 'absolute' }} onPress={Keyboard.dismiss}>
          <Image source={require('../iconsOurDent/search.png')} style={{ top: 8, left: 49, width: 30, height: 30, }}></Image>
        </TouchableOpacity>

      </View>



      <ScrollView style={{ height: '100%' }}>

          <ConversationItem enterChat={enterChat}/>
          <ConversationItem enterChat={enterChat}/>
          <ConversationItem enterChat={enterChat}/>
          <ConversationItem enterChat={enterChat}/>
          <ConversationItem enterChat={enterChat}/>
          <ConversationItem enterChat={enterChat}/>
          <ConversationItem enterChat={enterChat}/>
        
        
      </ScrollView>


    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // //alignItems: 'center',
    alignContent: 'center',
    // backgroundColor: '#ADD8E6',


},
background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 900,
}
})