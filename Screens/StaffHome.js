import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from './Chat';
import StaffRequests from './StaffRequests';

const Tab = createBottomTabNavigator();


//tabnavigatorul pentru staff ce cuprinde ecranele aferente impreuna cu stilizarea lor
const StaffHome = ({ navigation }) => {
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: 'rgba(0, 255, 0, 0.1)' }, headerShown: false }}  >
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
            <Tab.Screen name="Requests" component={StaffRequests} options={{
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

        </Tab.Navigator>
    )
}

export default StaffHome

const styles = StyleSheet.create({})