import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Button.style'
import Favorite from '../../assets/svg/Favorite'
import LogOut from '../../assets/svg/LogOut'
import { useDispatch } from 'react-redux'
import { removeFavorite } from '../../Redux/FavoriteSlice/FavoriteSlice'

const Button = ({ title, icon, onPress }) => {

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