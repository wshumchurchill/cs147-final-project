import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
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

const NAMES = [
    "Alex",
    "Jessica",
    "Sarah",
    "Julia",
    "Robert",
    "Dylan",
    "Anthony",
    "Taylor",
    "James",
    "Scoob",
    "Jeff",
    "Dad",
    "Mom",
    "Karson",
    "Jason",
]

const FriendCheckbox = ({ item, checkedFriends, setCheckedFriends }) => {
    return (
        <View style={styles.section}>
            <Checkbox
                style={styles.checkbox}
                value={checkedFriends.has(item.friendname)}
                onValueChange={(checked) => {
                    if (checked) {
                        const newCheckedFriends = new Set(checkedFriends)
                        newCheckedFriends.add(item.friendname)
                        setCheckedFriends(newCheckedFriends)
                    } else {
                        const newCheckedFriends = new Set(checkedFriends)
                        newCheckedFriends.delete(item.friendname)
                        setCheckedFriends(newCheckedFriends)
                    }
                }}
                color={checkedFriends.has(item.friendname) ? 'black' : undefined}
            />
            <Text style={styles.paragraph}>
                {item.friendname}
            </Text>
        </View>
    )
}

export default function ViewGroupDetails({ navigation, route }) {
    const { Group } = route.params;
    console.log('group', Group)

    const Friends = [
        {
            id: 1,
            friendname: Group.friend1,
        },
        {
            id: 2,
            friendname: Group.friend2,
        },
        {
            id: 3,
            friendname: Group.friend3,
        },
        {
            id: 4,
            friendname: Group.friend4,
        },
        {
            id: 5,
            friendname: Group.friend5,
        },
        {
            id: 6,
            friendname: Group.friend6,
        },
        {
            id: 7,
            friendname: Group.friend7,
        },
        {
            id: 8,
            friendname: Group.friend8,
        },
    ];

    const [checkedFriends, setCheckedFriends] = useState(new Set(Group.friends));

    const renderFriendname = ({ item }) => {
        return <FriendCheckbox item={{ friendname: item }} checkedFriends={checkedFriends} setCheckedFriends={setCheckedFriends} />
    };

    const uploadData = async () => {
        const { error } = await supabase
            .from('groups')
            .update({ friends: Array.from(checkedFriends) })
            .eq('groupname', Group.groupname)
        navigation.navigate('MyGroupsScreen')
        console.log('error', error)
    }


    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#D3FCFF', 'white']} style={styles.linearGradient}>
                <View style={styles.TopContainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={30} color="black" />
                    </Pressable>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.TitleText}>{Group.groupname}</Text>
                    </View>
                </View>
            </LinearGradient>
            <View style={styles.listContainer}>
                <View style={styles.section}>
                    <Text style={styles.choosemembers}>Edit Members</Text>
                </View>
                <FlatList
                    data={NAMES}
                    renderItem={renderFriendname}
                    keyExtractor={(item, index) => index}
                />
            </View>

            <View style={styles.FloatingButton}>
                <Pressable onPress={uploadData}>
                    <Text style={styles.QuestionText}>Save Group Changes</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    choosemembers :{
        fontFamily: 'Poppins_700Bold',
        fontSize: 25,
    },
    QuestionText: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
    },
    GroupContainer: {
        width: 380,
        height: 90,
        flex: 1,
        margin: 20,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: '#E9E9E9',
        backgroundColor: 'white',
        shadowColor: 'darkgray',
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 5,
        padding: 18,
        justifyContent: 'center',


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
    GroupsButtonsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 460,
        top: 110,
        bottom: 0,
        // height: 600,
        flexDirection: 'column',
        // backgroundColor: 'blue'

    },
    GroupInfoContainer: {
        width: 380,
        height: '25%',
        // flex: 1,
        margin: 20,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: '#E9E9E9',
        backgroundColor: 'white',
        shadowColor: 'darkgray',
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 5,
        padding: 18,
        justifyContent: 'center',

    },
    GroupTitleText: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 30,


    },
    GroupDescriptionText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
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
        backgroundColor: 'transparent',

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
        bottom: 25,
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
    section: {
        width: 325,
        height: 40,
        // flex: 1,
        marginLeft: 65,
        margin: 10,
        flexDirection: 'row',
        // paddingRight: 10,
        alignItems: 'center',
        // justifyContent: 'center',d
        // backgroundColor: 'red',
    },
    paragraph: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
    },
    checkbox: {
        marginRight: 10,
        height: 40,
        width: 40,
        borderRadius: 100,
    },


});