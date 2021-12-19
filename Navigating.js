import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './presentations/HomeScreen';
import InformationScreen from './presentations/InformationScreen';
import DoneScreen from './presentations/DoneScreen';
import OutofScreen from './presentations/OutofScreen';
import ErrorScreen from './presentations/ErrorScreen';
const Stack = createNativeStackNavigator();

function Navigating() {
  return (
    // <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="InformationScreen" component={InformationScreen} />
        <Stack.Screen name="DoneScreen" component={DoneScreen} />
        <Stack.Screen name="ErrorScreen" component={ErrorScreen} />
        <Stack.Screen name="OutofScreen" component={OutofScreen} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default Navigating;
