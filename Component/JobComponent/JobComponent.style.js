import { StyleSheet } from "react-native";

export default StyleSheet.create({
    jobContainer: {
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#d2d2d2',
        borderRadius: 5,
    },
    jobNameTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    jobCompanyNameTitle: {
        fontSize: 16,
    },
    jobLocationContainer: {
        alignSelf: 'baseline',
        padding: 5,
        marginTop: 10,
        borderRadius: 100,
        backgroundColor: '#ff6666',
    },
    jobLocationNameTitle: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    jobLevelsNameTitle: {
        color: '#ff6666',
        fontWeight: 'bold',
        textAlign: 'right',
    },
})