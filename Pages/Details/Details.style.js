import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainContainer: {
        margin: 10,
    },
    jobName: {
        color: '#7b7979',
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 8,
    },
    locationContainer: {
        flexDirection: 'row',
        paddingBottom: 8,
    },
    locationsColor: {
        fontSize: 16,
        color: '#ff6666'
    },
    locationsTitle: {
        fontSize: 16,
        color: '#363434',
        fontWeight: 'bold',
    },
    levelContainer: {
        flexDirection: 'row',
        paddingBottom: 8,
    },
    levelColor: {
        fontSize: 16,
        color: '#ff6666'
    },
    levelTitle: {
        fontSize: 16,
        color: '#363434',
        fontWeight: 'bold',
    },
    detailsTitle: {
        color: '#7b7979',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 20,
    },
    baseStyle: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 5,
        margin: 5,
        backgroundColor: 'white',
        color: '#363434',
    }
})