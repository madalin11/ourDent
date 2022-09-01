import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from './Chat';
import UserTreatment from './UserTreatment';
import MyList from './MyList';

const Tab = createBottomTabNavigator();


//tab navigatorul corespunzator userului ce contine ecranele necesare acestuia pentru realizarea actiunilor specifice
const UserHome = ({ navigation }) => {
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
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
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