import { useNavigation } from "@react-navigation/native"
import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Images from '../../assets/Images';
import SelectDropdown from 'react-native-select-dropdown'
import { useState, useEffect, useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { supabase } from '../../supabase';
import { useIsFocused } from '@react-navigation/native'
import { FloatingAction } from "react-native-floating-action";
import { AntDesign } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

// const textNameMap = {

//     22: 'sad',
//     30: 'cool',
//     29: 'flat',
//     23: 'smile',
//     24: 'angry',
//     28: 'check'
// }

export default function PlayActivity({ navigation }) {

    const isFocused = useIsFocused()

    // const [groups, setGroups] = useState([])

    // const uploadData = async () => {
    //     const {error} = await supabase.from('groups').insert({
    //         id: Math.floor(Math.random() * 10000), 
    //         groupname: (text),
    //         friend1: (isChecked ? 'Alex' :null),
    //         friend2: (isChecked2 ? 'Jessica':null),
    //         friend3: (isChecked3 ? 'Sarah':null),
    //         friend4: (isChecked4 ? 'Robert':null),
    //         friend5: (isChecked5 ? 'Dylan':null),
    //         friend6: (isChecked6 ? 'Julia':null),
    //         friend7: (isChecked7 ? 'Taylor':null),
    //         friend8: (isChecked8 ? 'James': null),
    //     })
    //     console.log('hello')
    //     navigation.navigate('MyGroupsScreen')
    // }

    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);
    const [isChecked6, setChecked6] = useState(false);
    const [isChecked7, setChecked7] = useState(false);
    const [isChecked8, setChecked8] = useState(false);


    const [text, onChangeText] = useState("1");

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#D3FCFF', 'white']} style={styles.linearGradient}>
                <View style={styles.TopContainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={30} color="black" />
                    </Pressable>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.groupinput}>
                            Play Trivia
                        </Text>
                    </View>
                </View>
            </LinearGradient>

            <View style={styles.listContainer}>
                <View style={styles.QuestionSection}>
                    <Text style={styles.QuestionText}>Brazil is the biggest producer of?</Text>
                </View>
                <View style={styles.section}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? 'black' : undefined}
                    />
                    <Text style={styles.paragraph}>Rice</Text>
                </View>
                <View style={styles.section}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked2}
                        onValueChange={setChecked2}
                        color={isChecked2 ? 'black' : undefined}
                    />
                    <Text style={styles.paragraph}>Oil</Text>
                </View>
                <View style={styles.section}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked3}
                        onValueChange={setChecked3}
                        color={isChecked3 ? 'black' : undefined}
                    />
                    <Text style={styles.paragraph}>Coffee</Text>
                </View>
                <View style={styles.section}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked4}
                        onValueChange={setChecked4}
                        color={isChecked4 ? 'black' : undefined}
                    />
                    <Text style={styles.paragraph}>Chicken</Text>
                </View>
                <View style={styles.QuestionSection}>
                    <Text style={styles.QuestionText}>How many colors are in the rainbow?</Text>
                </View>
                <View style={styles.section}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked5}
                        onValueChange={setChecked5}
                        color={isChecked5 ? 'black' : undefined}
                    />
                    <Text style={styles.paragraph}>Five</Text>
                </View>
                <View style={styles.section}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked6}
                        onValueChange={setChecked6}
                        color={isChecked6 ? 'black' : undefined}
                    />
                    <Text style={styles.paragraph}>Seven</Text>
                </View>
                <View style={styles.section}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked7}
                        onValueChange={setChecked7}
                        color={isChecked7 ? 'black' : undefined}
                    />
                    <Text style={styles.paragraph}>Nine</Text>
                </View>
                <View style={styles.section}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked8}
                        onValueChange={setChecked8}
                        color={isChecked8 ? 'black' : undefined}
                    />
                    <Text style={styles.paragraph}>Twenty</Text>
                </View>

            </View>

            <View style={styles.FloatingButton}>
                

                <Pressable onPress={() => navigation.navigate("MainTab", { screen: "CheckInScreen", params: { imageType: 55 } })}>
                    <Text style={styles.QuestionText}>Finish!</Text>
                </Pressable>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    QuestionInput: {
        borderWidth: 1,
        borderColor: '#B0E2FF',
        paddingLeft: 10,
        borderRadius: 10,
        // height: 60,
        height: 40,
        width: 100,
        fontSize: 20,
        marginLeft: 10,
        fontFamily: 'Poppins_700Bold',
        color: 'black',
        backgroundColor: '#B0E2FF',
    },
    QuestionText: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        // backgroundColor: 'blue',
    },
    listContainer: {
        alignItems: 'flex-start',
        position: 'absolute',
        width: 460,
        top: 130,
        bottom: 0,
        // height: 600,
        flexDirection: 'column',
        // backgroundColor: 'blue'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    TitleContainer: {
        position: 'absolute',
        left: 32.2,
        top: 8.8,
        height: 60,
        width: 350,
        // backgroundColor: '#C3B5D9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,

    },
    TitleText: {
        fontSize: 30,
        fontFamily: 'Poppins_700Bold',
        color: '#2DA8EE',
    },
    TopContainer: {
        flexDirection: 'row',
        height: 60,
        width: 400,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        position: 'absolute',
        top: 40,
        left: 0,
    },
    linearGradient: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 0,
        height: 200,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: '100%',
    },
    FloatingButton: {
        position: 'absolute',
        bottom: 50,
        height: 57,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B0E2FF',
        // opacity: 0.6,
        borderWidth: 2,
        borderColor: '#007BC0',
        borderRadius: 18,
    },
    groupinput: {
        // borderWidth: 1,
        // borderColor: '#2DA8EE',
        // borderRadius: 10,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        fontSize: 30,
        paddingLeft: 10,
        fontFamily: 'Poppins_700Bold',
        color: '#2DA8EE',
        // backgroundColor: 'red',
    },
    section: {
        width: 325,
        height: 40,
        // flex: 1,
        marginLeft: 65,
        margin: 5,
        flexDirection: 'row',
        // paddingRight: 10,
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'red',

    },
    QuestionSection: {
        width: 325,
        height: 80,
        // flex: 1,
        marginLeft: 65,
        margin: 5,
        flexDirection: 'row',
        // paddingRight: 10,
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'red',
    },
    paragraph: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
    },
    checkbox: {
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        width: 40,
        borderRadius: 100,
    },

});