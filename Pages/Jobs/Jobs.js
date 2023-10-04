import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './Jobs.style'
import useFetch from '../../Hooks/useFetch';
import JobComponent from '../../Component/JobComponent/JobComponent';
import AnimationLoading from '../../Component/Animations/AnimationLoading';
import AnimationError from '../../Component/Animations/AnimationError';



const Jobs = ({ navigation }) => {
    const getApi = process.env.EXPO_PUBLIC_API_URL;
    const [page, setPage] = useState(0);
    const { data, loading, error } = useFetch(`${getApi}?page=${page}`)

    if (loading) {
        return <AnimationLoading />
    }
    if (error) {
        return <AnimationError />
    }



    const pressDetails = (item) => {
        setPage(item.id);
        navigation.navigate('Details', { item, page: item.id })
    }

    const renderJobs = ({ item }) => <JobComponent job={item} onPress={() => pressDetails(item)} />

    const keyID = (item) => item.id

    return (
        <View>
            <FlatList
                data={data.results}
                renderItem={renderJobs}
                keyExtractor={keyID}
            />
        </View>
    )
}

export default Jobs