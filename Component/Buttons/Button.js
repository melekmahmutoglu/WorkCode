import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Button.style'
import Favorite from '../../assets/svg/Favorite'
import LogOut from '../../assets/svg/LogOut'

const Button = ({ title, icon }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <View style={styles.iconContainer}>
                {icon === 'favorite' ? <Favorite /> : icon === 'logOut' ? <LogOut /> : null}
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button