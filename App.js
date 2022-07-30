import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Screens/Login';
import Register from './Screens/Register';
import AdminHome from './Screens/AdminHome';
import TabNavigator from './Screens/TabNavigator';
import FeedbackDetails from './Screens/FeedbackDetails';
import StaffDetails from './Screens/StaffDetails';
import UserDetails from './Screens/UserDetails';
import TreatmentDetails from './Screens/TreatmentDetails';
import ChatRoom from './Screens/ChatRoom';
import AddTreatment from './Screens/AddTreatment';
import UserHome from './Screens/UserHome';
import UserTreatment from './Screens/UserTreatment';
import UserAddTreatment from './Screens/UserAddTreatment';
import StaffHome from './Screens/StaffHome';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer backgroundColor={'red'}>
      <Stack.Navigator>

        <Stack.Screen options={{ headerShown: false }} name="Login screen" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Register screen" component={Register} />
        <Stack.Screen options={{ headerShown: false }} name="Tab navigator screen" component={TabNavigator} />
        <Stack.Screen options={{ headerShown: false }} name="Feedback details screen" component={FeedbackDetails} />
        <Stack.Screen options={{ headerShown: false }} name="Staff details screen" component={StaffDetails} />
        <Stack.Screen options={{ headerShown: false }} name="User details screen" component={UserDetails} />
        <Stack.Screen options={{ headerShown: false }} name="Treatment details screen" component={TreatmentDetails} />
        <Stack.Screen options={{ headerShown: false }} name="Chat room screen" component={ChatRoom} />
        <Stack.Screen options={{ headerShown: false }} name="Add treatment screen" component={AddTreatment} />
        <Stack.Screen options={{ headerShown: false }} name="User home screen" component={UserHome} />
        <Stack.Screen options={{ headerShown: false }} name="User add treatment screen" component={UserAddTreatment} />
        <Stack.Screen options={{ headerShown: false }} name="Staff home screen" component={StaffHome} />
        
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
