import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../../components/header/Header";
import Piechart from 'react-native-pie-chart'
import { SafeAreaView } from "react-native-safe-area-context";
import DashboardLabels from "./DashboardLabels";
import { useEffect, useState } from "react";

function Dashboard() {
    const widthAndHeight = 150
    // let series = [1200, 4500, 3200, 4500]
    const [series, setseries] = useState([])
    const [sliceColor, setsliceColor] = useState([])
    const [labels ,setlabels] = useState([])
    const [flag, setflag] = useState(false)
    useEffect(() => {
        setseries([1200, 4500, 3200, 4500])
        setflag(true)
        setsliceColor(['#000000', 'blue', 'red', 'purple',])
        setlabels(['Electronics' , 'Food', 'FMCG' , 'Merchandise'])
    }, [])


    // const sliceColor = ['#000000', 'blue', 'red', 'purple',]
    return (
        <SafeAreaView style={styles.root__container}>
            {flag ?
                <ScrollView>
                    <Header
                        heading="Hello Nagasundaram"
                        text="Nagasundaram's spending at a glance"
                    />
                    <View style={styles.dashboardContainer}>
                        <Piechart
                            widthAndHeight={widthAndHeight}
                            series={series}
                            sliceColor={sliceColor}
                        />
                        <View style={styles.labelContainer}>
                            <View style={styles.leftelem}>
                                <View style={styles.firstelemcontainer}>
                                    <View style={[styles.firstelem,{borderColor:sliceColor[0]}]}></View>
                                    <Text style={styles.labeltext}>{labels[0]}</Text>
                                </View>
                                <View style={styles.firstelemcontainer}>
                                    <View style={styles.secondelem}></View>
                                    <Text style={styles.labeltext}>{labels[1]}</Text>
                                </View>
                            </View>
                            <View style={styles.leftelem}>
                                <View style={styles.firstelemcontainer}>
                                    <View style={styles.thirdelem}></View>
                                    <Text style={styles.labeltext}>{labels[2]}</Text>
                                </View>
                                <View style={styles.firstelemcontainer}>
                                    <View style={styles.fourthelem}></View>
                                    <Text style={styles.labeltext}>{labels[3]}</Text>
                                </View>
                            </View>
                        </View>
                        {/* {series.map((elem , index) => {
                            return (
                            <DashboardLabels series={elem} index={index} labels={labels[index]}/>
                            )
                        })} */}
                        <DashboardLabels
                                series={series}
                                sliceColor={sliceColor}
                                labels={labels}
                            />
                    </View>
                </ScrollView> : <Text>loading</Text>}
        </SafeAreaView>
    );
}

export default Dashboard;

const styles = StyleSheet.create({
    root__container: {
        // flex: 1,
        paddingTop: 50,
    },
    dashboardContainer: {
        marginTop: 10,
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelContainer: {
         marginTop: 10,
        width: 300,
        // borderColor: 'black',
        // borderWidth: 1,
        // height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: "row",

    },
    firstelemcontainer: {
        width: 100,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center',
        marginLeft: 10,
        // borderColor: '#000000',
        // borderWidth: 1,

    },
    leftelem: {
        // width: 70,
        // borderColor: '#000000',
        //  borderWidth: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    firstelem: {
        // borderColor: sliceColor[0],
        borderWidth: 1,
        width: 10,
        height: 10,
        backgroundColor: '#000000',
        borderRadius: 10,
        // marginLeft: 10,
    },
    secondelem: {
        borderColor: 'blue',
        borderWidth: 1,
        width: 10,
        height: 10,
        backgroundColor: 'blue',
        borderRadius: 10,
        // marginLeft: -13,
    },
    thirdelem: {
        borderColor: 'red',
        borderWidth: 1,
        width: 10,
        height: 10,
        backgroundColor: 'red',
        borderRadius: 10,
        // marginLeft: 10,
    },
    fourthelem: {
        borderColor: 'purple',
        borderWidth: 1,
        width: 10,
        height: 10,
        backgroundColor: 'purple',
        borderRadius: 10,
        // marginLeft: 15,
    },
    labeltext: {
        marginLeft: 5,
    },
    firstbox: {
        borderColor: '#000000',
        borderWidth: 1,
        width: 100,
        height: 50,
        backgroundColor: '#000000',
        borderRadius: 10,
    }
});
