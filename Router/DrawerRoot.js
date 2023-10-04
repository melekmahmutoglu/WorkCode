import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorite from '../Pages/Favorite/Favorite';
import Root from './Root';
const Drawer = createDrawerNavigator();


const DrawerRoot = () => {
    return (
        <Drawer.Navigator initialRouteName='Home' screenOptions={{ drawerActiveTintColor: '#ff6666' }}>
            <Drawer.Screen name='Home' component={Root} options={{
                headerTintColor: '#ff6666',
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: '700'
                }
            }} />
            <Drawer.Screen name='Favorite' component={Favorite} options={{
                headerTintColor: '#ff6666',
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: '700'
                }
            }} />
        </Drawer.Navigator>
    )
}

export default DrawerRoot