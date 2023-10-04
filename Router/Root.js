import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from '../Pages/Jobs';
import Details from '../Pages/Details/Details';


const Stack = createNativeStackNavigator();


const Root = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Jobs" component={Jobs} />
            <Stack.Screen name="Details" component={Details} options={{
                headerTintColor: '#ff6666',
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: '700'
                }
            }} />
        </Stack.Navigator>
    )
}


export default Root