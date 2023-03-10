import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../../../components/header/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

function Faq() {



    // const sliceColor = ['#000000', 'blue', 'red', 'purple',]
    return (
        <SafeAreaView style={styles.root__container}>
            <ScrollView>
                <Header
                    heading="Hello Nagasundaram"
                    text="Faq"
                />
                <View style={styles.faqContainer}>
                    <Collapse>
                        <CollapseHeader>
                            <View style={{ width: 300, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10, }}>
                                <View style={{ width: 250, justifyContent: 'center' }}>
                                    <Text>Lorem ipsum dolor sit amet,?</Text>
                                </View>
                                <View>
                                    <Text style={{ marginLeft: 10 }}>click here</Text>
                                </View>

                            </View>
                        </CollapseHeader>
                        <CollapseBody>

                            <Text style={{ marginLeft: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies molestie lectus non eleifend. Sed mauris arcu, ornare eu pharetra.</Text>

                        </CollapseBody>
                    </Collapse>
                   
                </View>


                {/* 
                <AccordionList
                    list={this.state.list}
                    header={this._head}
                    body={this._body}
                    keyExtractor={item => item.key}
                /> */}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root__container: {
        paddingTop: 50,
    },
    faqContainer: {
        marginTop: 10,
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})



export default Faq