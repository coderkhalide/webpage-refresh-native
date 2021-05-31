import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import WebPageScreen from '../screens/WebPageScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const screenOptionStyle = {
    headerShown: false
}

function HomeNavigation() {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Webpage" component={WebPageScreen} />
        </Stack.Navigator>
    )
}

export default HomeNavigation