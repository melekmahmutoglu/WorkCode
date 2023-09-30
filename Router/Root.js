import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from '../Pages/Jobs';
import Details from '../Pages/Details/Details';

const Stack = createNativeStackNavigator();

const Root = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Jobs" component={Jobs} options={{
                    headerTintColor: '#ff6666',
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: '700'
                    }
                }} />
                <Stack.Screen name="Details" component={Details} options={{
                    headerTintColor: '#ff6666',
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: '700'
                    }
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Root