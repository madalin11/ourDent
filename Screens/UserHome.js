import { StyleSheet, Text, View, Image, TouchableOpacityBase } from 'react-native'

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AdminHome from './AdminHome';
import Treatments from './Treatments';
import Staff from './Staff';
import Feedback from './Feedback';
import Users from './Users';
import Chat from './Chat';
import UserDetails from './UserDetails';
import UserTreatment from './UserTreatment';
import MyList from './MyList';

const Tab = createBottomTabNavigator();

const UserHome = ({navigation}) => {
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle:{backgroundColor:'rgba(0, 255, 0, 0.1)' } ,headerShown: false }}  >
            <Tab.Screen name="Chat" component={Chat} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            source={require('../iconsOurDent/chat.png')}
                            resizeMode='contain'
                            style={{
                                width: 26,
                                height: 26,
                            }}
                        />
                    </View>
                ),
                
                
            }}
            />
            <Tab.Screen name="Treatments" component={UserTreatment} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            source={require('../iconsOurDent/treatment.png')}
                            resizeMode='contain'
                            style={{
                                width: 26,
                                height: 26,
                            }}
                        />
                    </View>
                ),
            }}
            />
            <Tab.Screen name="My list" component={MyList} options={{
                tabBarIcon: ({ focused }) => (
                    <View  style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image 
                            source={require('../iconsOurDent/mylist.png')}
                            resizeMode='contain'
                            style={{
                                width: 26,
                                height: 26,
                            }}
                        />
                    </View>
                ),
                    
                
            }}
            />

            
            
        </Tab.Navigator>
    )
}

export default UserHome

const styles = StyleSheet.create({})