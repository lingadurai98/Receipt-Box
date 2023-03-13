import React, { Component, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";

function Accordion(props) {
    console.log(props.title)

    const [AccordianData, setAccordionData] = useState(
        {
            data: props.data,
            expanded: false,
        }
    )

    toggleExpand=()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setAccordionData({expanded : !AccordianData.expanded})
      }
    return (
        <SafeAreaView>
            
            <TouchableOpacity   style={styles.row} onPress={() => this.toggleExpand()}>
                <Text style={[styles.title, styles.font]}>{props.title}</Text>
                <Icon name={AccordianData.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'black'} />
            </TouchableOpacity>
            <View style={styles.parentHr} />
            {
               AccordianData.expanded &&
                <View style={styles.child}>
                    <Text>{props.data}</Text>
                </View>
            }

        </SafeAreaView>
    )
  
}

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: 'black',
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: 'white',
    },
    parentHr:{
        height:1,
        color: 'black',
        width:'100%'
    },
    child:{
        backgroundColor: 'white',
        padding:16,
        color : 'black',
    }
    
});


export default Accordion