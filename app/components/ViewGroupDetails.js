import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Images from '../../assets/Images';
import SelectDropdown from 'react-native-select-dropdown'
import {useState, useEffect, useRef} from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { supabase } from '../../supabase';
import { useIsFocused } from '@react-navigation/native'
import { FloatingAction } from "react-native-floating-action";
import { AntDesign } from '@expo/vector-icons';

export default function ViewGroupDetails({ navigation, route }) {
    const { Group } = route.params;

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

    const renderFriendname = ({ item }) => (
        <View style={styles.section}>
            <Text style={styles.paragraph}>
                {item.friendname}
            </Text>
        </View>
    );
    

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
                <FlatList
                    data={Friends}
                    renderItem={renderFriendname}
                    keyExtractor={(item) => item.id}
                />
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
        alignItems: 'center',
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
    GroupDescriptionText:{
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
    TopContainer:{
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
        top:0,
        height: 200,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: '100%',
    },
    FloatingButton: {
        position: 'absolute',
        bottom: 50,
        height: 57,
        width: 57,
        // backgroundColor: 'red',

    },
    section: {
        width: 325,
        height: 40,
        // flex: 1,
        marginLeft: 65,
        margin: 15,
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
    

});