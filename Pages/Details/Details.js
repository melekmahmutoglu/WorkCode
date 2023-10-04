import { View, Text, ScrollView, Dimensions, Alert } from 'react-native'
import React from 'react'
import styles from './Details.style'
import RenderHTML from 'react-native-render-html'
import Button from '../../Component/Buttons/Button'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite } from '../../Redux/FavoriteSlice/FavoriteSlice'




const Details = ({ route, navigation }) => {
    const job = route.params.item
    const favoriteList = useSelector((state) => state.favorite.favoriteList)
    const dispatch = useDispatch()


    const handleFavorite = (favoriteID) => {
        if (favoriteList.find(item => item.id === favoriteID.id)) {
            return Alert.alert('This job is already added...');
        } else if (favoriteList.lenght === 0) {
            dispatch(addFavorite(favoriteID))
            navigation.navigate('Favourite')
        }

        dispatch(addFavorite(favoriteID))
        navigation.navigate('Favorite')
    }

    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <Text style={styles.jobName}>{job.name}</Text>
                <View style={styles.locationContainer}>
                    <Text style={styles.locationsColor}>Locations: </Text>
                    <Text style={styles.locationsTitle}>{job.locations[0].name}</Text>
                </View>
                <View style={styles.levelContainer}>
                    <Text style={styles.levelColor}>Job Level: </Text>
                    <Text style={styles.levelTitle}>{job.levels[0].name}</Text>
                </View>
                <Text style={styles.detailsTitle}>Job Detail</Text>
            </View>
            <View>
                <RenderHTML
                    source={{ html: job.contents }}
                    contentWidth={Dimensions.get('window').width}
                    baseStyle={styles.baseStyle}
                />
            </View>
            <View style={styles.buttonDetailsContainer}>
                <Button title={'Log Out'} icon={'logOut'} onPress={() => navigation.navigate('Jobs')} />
                <Button title={'Favorites'} icon={'favorite'} onPress={() => handleFavorite(job)} />
            </View>
        </ScrollView>
    )
}

export default Details