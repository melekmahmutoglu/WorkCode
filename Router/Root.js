import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from '../Pages/Jobs';
import Details from '../Pages/Details/Details';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorite from '../Pages/Favorite/Favorite';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
                <Stack.Screen name='Drawers' component={DrawerRoot} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const DrawerRoot = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Favorite' component={Favorite} />
        </Drawer.Navigator>
    )
}
export default Root