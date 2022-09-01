import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


//componenta de staff ce contine detalii despre un naumic staff
const StaffItem = ({enterStaff,name,id,profilePhoto,phoneNumber,deleteStaff}) => {
  return (

    //strutura componentei
      <TouchableOpacity onPress={()=>enterStaff(name,id,profilePhoto,phoneNumber)}>
          <View style={styles.container}>
            <Image
                style={{ alignSelf: 'center', width: 60, height: 60, marginRight: 10, borderRadius: 50 }}
                source={{uri:profilePhoto || ' '}}
            />

            <View style={{flex:1}}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.treatmName}>
                {name}
            </Text>
            </View>
            
            <TouchableOpacity onPress={()=>deleteStaff(id)}>
                <Image
                    style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50 }}
                    source={require('../iconsOurDent/trash.png')}
                />
            </TouchableOpacity>

        </View>
      </TouchableOpacity>
    
  )
}

export default StaffItem
//stilizarea componentei
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
        shadowColor:'#202020',
        shadowOffset:{height:5},
        shadowOpacity:0.8,
        shadowRadius:20

    },
    treatmName: {
        fontFamily: 'Arial',
        fontWeight: '500',
        fontSize: 20,
        
        
    }
})