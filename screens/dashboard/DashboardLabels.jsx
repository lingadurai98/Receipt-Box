import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../../components/header/Header";
import Piechart from 'react-native-pie-chart'
import { SafeAreaView } from "react-native-safe-area-context";

function DashboardLabels({ series, index, labels ,sliceColor }) {
  
    return (
        <View style={styles.motherlabelContainer}>
            <View style={styles.labelContainer}>
                <View style={[styles.labelone , {backgroundColor:sliceColor[0], borderColor:sliceColor[0]}]}>
                    <Text style={{color:'white'}}>{series[0]}</Text>
                    <Text style={{color:'white'}}> {labels[0]}</Text>
                </View>
                <View style={[styles.labelone , {backgroundColor:sliceColor[1] , borderColor:sliceColor[1]}]}>
                    <Text>{series[1]}</Text>
                    <Text> {labels[1]}</Text>
                </View>
            </View>
            <View style={styles.labelContainer}>
                <View style={[styles.labelone , {backgroundColor:sliceColor[2], borderColor:sliceColor[2]}]}>
                    <Text>{series[2]}</Text>
                    <Text> {labels[2]}</Text>
                </View>
                <View style={[styles.labelone , {backgroundColor:sliceColor[3] , borderColor:sliceColor[3]}]}>
                    <Text>{series[3]}</Text>
                    <Text> {labels[3]}</Text>
                </View>
            </View>

        </View>
    )
}


export default DashboardLabels
const styles = StyleSheet.create({
    motherlabelContainer: {
        width: 300,
        padding: 20,
        justifyContent: "center",
        alignItems: 'center',
    },
    labelContainer: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    labelone: {
        // borderColor: 'red',
        width: 120,
        height: 60,
        // padding : 9,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: 'center',
    }


})