import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const StaffDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['yellow', 'green', 'white']}
        style={styles.background}
      />
      <Text>STaffDetails</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Tab navigator screen')} style={{marginTop:200}}>
          <Text>
              Go Back
          </Text>
      </TouchableOpacity>
    </View>
  )
}

export default StaffDetails

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
       


    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 800,
      },
})