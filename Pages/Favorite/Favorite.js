import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { useSelector, } from 'react-redux'
import JobComponent from '../../Component/JobComponent/JobComponent'
import styles from './Favorite.style'

const Favorite = () => {
    const favoriteList = useSelector((state) => state.favorite.favoriteList)

    return (
        <SafeAreaView style={styles.container}>
            {favoriteList.length === 0 ? (
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>You haven't added any job to favorites yet!</Text>
                </View>
            ) : (
                <FlatList
                    data={favoriteList}
                    renderItem={({ item }) => (
                        <JobComponent job={item} remove={true} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </SafeAreaView>
    )
}

export default Favorite