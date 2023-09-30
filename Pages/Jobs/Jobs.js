import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './Jobs.style'
import useFetch from '../../Hooks/useFetch';
import JobComponent from '../../Component/JobComponent/JobComponent';

const Jobs = ({ navigation }) => {
    const getApi = process.env.EXPO_PUBLIC_API_URL;
    const [page, setPage] = useState(0);
    const { data, loading, error } = useFetch(`${getApi}?page=${page}`)

    if (loading) {
        return <Text>Loading...</Text>
    }
    if (error) {
        return <Text>Error..</Text>
    }

    const pressDetails = item => navigation.navigate('Details', { item })

    const renderJobs = ({ item }) => <JobComponent job={item} onPress={() => pressDetails(item)} />

    return (
        <View>
            <FlatList
                data={data.results}
                renderItem={renderJobs}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Jobs