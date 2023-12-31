import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import styles from './JobComponent.style';
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../../Redux/FavoriteSlice/FavoriteSlice';


const JobComponent = ({ job, onPress, remove }) => {
    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.jobContainer}>
                <Text style={styles.jobNameTitle}>{job.name.length > 30 ? job.name.slice(0, 30) + '...' : job.name}</Text>
                <Text style={styles.jobCompanyNameTitle}>{job.company.name}</Text>
                <View style={styles.jobLocationContainer}>
                    <Text style={styles.jobLocationNameTitle}>{job.locations[0].name}</Text>
                </View>
                <Text style={styles.jobLevelsNameTitle}>{job.levels[0].name}</Text>
                {
                    remove &&
                    <View style={styles.removeContainer}>
                        <Button title='Remove' color={'white'} onPress={() => dispatch(removeFavorite(job.id))} />
                    </View>
                }
            </View>

        </TouchableOpacity>
    )
}

export default JobComponent