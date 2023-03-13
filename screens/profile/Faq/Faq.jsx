import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../../../components/header/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import Icon from "react-native-vector-icons/MaterialIcons";


function Faq() {


    const [expanded, setexpanded] = useState(false)
    const [expandedone, setexpandedone] = useState(false)
    const [expandedtwo, setexpandedtwo] = useState(false)
    const [expandedthree, setexpandedthree] = useState(false)
    const [expandedfour, setexpandedfour] = useState(false)
    return (
        <SafeAreaView style={styles.root__container}>
            <ScrollView>
                <Header
                    heading="Hello Nagasundaram"
                    text="Faq"
                />
                <View style={styles.faqContainer}>
                    <Collapse
                        style={styles.one}
                        isExpanded={expanded}
                        onToggle={(isExpanded) => setexpanded(isExpanded)}>
                        <CollapseHeader style={{ marginLeft: 10 }}>
                            <View style={{ width: '90%', height: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10, }}>
                                <View style={{ width: 250, justifyContent: 'center' }}>
                                    <Text>Lorem ipsum dolor sit amet,?</Text>
                                </View>
                                <Pressable>
                                    {/* <Text style={{ marginLeft: 10 }}>click here</Text> */}
                                    <Icon style={{ marginLeft: 10 }} onPress={()=>setexpanded(!expanded)} name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'grey'} />
                                </Pressable>

                            </View>
                        </CollapseHeader>
                        <CollapseBody>

                            <Text style={{ marginLeft: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies molestie lectus non eleifend. Sed mauris arcu, ornare eu pharetra.</Text>

                        </CollapseBody>

                    </Collapse>
                    <Collapse
                        style={styles.one}
                        isExpanded={expandedone}
                        onToggle={(isExpanded) => setexpandedone(isExpanded)}>
                        <CollapseHeader style={{ marginLeft: 10 }}>
                            <View style={{ width: '90%', height: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10, }}>
                                <View style={{ width: 250, justifyContent: 'center' }}>
                                    <Text>Lorem ipsum dolor sit amet,?</Text>
                                </View>
                                <Pressable>
                                    {/* <Text style={{ marginLeft: 10 }}>click here</Text> */}
                                    <Icon style={{ marginLeft: 10 }} onPress={()=>setexpandedone(!expandedone)} name={expandedone ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'grey'} />
                                </Pressable>

                            </View>
                        </CollapseHeader>
                        <CollapseBody>

                            <Text style={{ marginLeft: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies molestie lectus non eleifend. Sed mauris arcu, ornare eu pharetra.</Text>

                        </CollapseBody>

                    </Collapse>

                    <Collapse
                        style={styles.one}
                        isExpanded={expandedthree}
                        onToggle={(isExpanded) => setexpandedthree(isExpanded)}>
                        <CollapseHeader style={{ marginLeft: 10 }}>
                            <View style={{ width: '90%', height: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10, }}>
                                <View style={{ width: 250, justifyContent: 'center' }}>
                                    <Text>Lorem ipsum dolor sit amet,?</Text>
                                </View>
                                <Pressable>
                                    {/* <Text style={{ marginLeft: 10 }}>click here</Text> */}
                                    <Icon style={{ marginLeft: 10 }} onPress={()=>setexpandedthree(!expandedthree)} name={expandedthree ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'grey'} />
                                </Pressable>

                            </View>
                        </CollapseHeader>
                        <CollapseBody>

                            <Text style={{ marginLeft: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies molestie lectus non eleifend. Sed mauris arcu, ornare eu pharetra.</Text>

                        </CollapseBody>

                    </Collapse>
                    <Collapse
                        style={styles.one}
                        isExpanded={expandedtwo}
                        onToggle={(isExpanded) => setexpandedtwo(isExpanded)}>
                        <CollapseHeader style={{ marginLeft: 10 }}>
                            <View style={{ width: '90%', height: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10, }}>
                                <View style={{ width: 250, justifyContent: 'center' }}>
                                    <Text>Lorem ipsum dolor sit amet,?</Text>
                                </View>
                                <Pressable>
                                    {/* <Text style={{ marginLeft: 10 }}>click here</Text> */}
                                    <Icon style={{ marginLeft: 10 }} onPress={()=>setexpandedtwo(!expandedtwo)} name={expandedtwo ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'grey'} />
                                </Pressable>

                            </View>
                        </CollapseHeader>
                        <CollapseBody>

                            <Text style={{ marginLeft: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies molestie lectus non eleifend. Sed mauris arcu, ornare eu pharetra.</Text>

                        </CollapseBody>

                    </Collapse>

                    <Collapse
                        style={styles.one}
                        isExpanded={expandedfour}
                        onToggle={(isExpanded) => setexpandedfour(isExpanded)}>
                        <CollapseHeader style={{ marginLeft: 10 }}>
                            <View style={{ width: '90%', height: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10, }}>
                                <View style={{ width: 250, justifyContent: 'center' }}>
                                    <Text>Lorem ipsum dolor sit amet,?</Text>
                                </View>
                                <Pressable>
                                    {/* <Text style={{ marginLeft: 10 }}>click here</Text> */}
                                    <Icon style={{ marginLeft: 10 }} onPress={()=>setexpandedfour(!expandedfour)} name={expandedfour ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'grey'} />
                                </Pressable>

                            </View>
                        </CollapseHeader>
                        <CollapseBody>

                            <Text style={{ marginLeft: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies molestie lectus non eleifend. Sed mauris arcu, ornare eu pharetra.</Text>

                        </CollapseBody>

                    </Collapse>


                    

                   
                </View>


            
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root__container: {
        paddingTop: 50,
        // height : '100%',
        // flex : 1,
    },
    faqContainer: {
        // height: '90%',
        marginTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    one: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingVertical: 30,
        // height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
})



export default Faq