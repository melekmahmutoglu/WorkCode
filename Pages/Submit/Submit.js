import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import JobComponent from '../../Component/JobComponent/JobComponent'
import styles from './Submit.style'

const Submit = () => {
    const submitList = useSelector((state) => state.submit.submitList)
    return (
        <SafeAreaView style={styles.container}>
            {
                submitList.length === 0 ?
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            You haven't added any job to submited yet!
                        </Text>
                    </View> :
                    <FlatList
                        data={submitList}
                        renderItem={({ item }) => (
                            <JobComponent job={item} />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />
            }
        </SafeAreaView>
    )
}

export default Submit