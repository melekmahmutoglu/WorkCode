import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import styles from './Details.style'
import RenderHTML from 'react-native-render-html'


const Details = ({ route, navigation }) => {
    const job = route.params.item
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
            <View>

            </View>
        </ScrollView>
    )
}

export default Details