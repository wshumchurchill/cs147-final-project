import { useNavigation } from "@react-navigation/native"
import { View, Text, Button, SafeAreaView, FlatList, Pressable, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Images from '../../assets/Images';
import SelectDropdown from 'react-native-select-dropdown'
import {useState, useEffect, useRef} from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import EmojiPicker from './EmojiPicker';
import EmojiList from './EmojiList';
import EmojiSticker from './EmojiSticker';
import CircleButton from './CircleButton';
import { supabase } from '../../supabase';
import * as Location from 'expo-location';
import Device from 'expo-device';
import { AntDesign } from '@expo/vector-icons';

const ActivityMain = () => {
    
    const navigation = useNavigation();


    //console.log("navigationHELLO", navigation.navigate)
    
        // create render Image for checkindefault, photocheckin, and activities,
    return (
        <SafeAreaView style={styles.container}>
            
            <LinearGradient colors={['#D3FCFF', 'white']} style={styles.linearGradient}>
                <View style={styles.TopContainer}>
                    <Pressable onPress={() => {
                        console.log("pressed") 
                        navigation.navigate("MainTab")}}
                            style={{zIndex: 100}}
                        >
                        <AntDesign name="left" size={30} color="black" />
                    </Pressable>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.TitleText}>{'Activities'}</Text>
                    </View>
                </View>
            </LinearGradient>

            <View style={styles.GroupsButtonsContainer}>
                <Pressable onPress={() => navigation.navigate('CustomizeActivity')} style={styles.GroupInfoContainer}>
                    <Text style={styles.GroupTitleText}>
                        Trivia Challenge
                    </Text>
                </Pressable>
                <View style={styles.GroupInfoContainer}>
                    <Text style={styles.GroupTitleText}>
                        Hanged Man
                    </Text>
                </View>
                <View style={styles.GroupInfoContainer}>
                    <Text style={styles.GroupTitleText}>
                        Tic Tac Toe
                    </Text>
                </View>
                <View style={styles.GroupInfoContainer}>
                    <Text style={styles.GroupTitleText}>
                        8 Ball Pool
                    </Text>
                </View>
                <View style={styles.GroupInfoContainer}>
                    <Text style={styles.GroupTitleText}>
                        Daily Question
                    </Text>
                </View>
            </View>        
            
        </SafeAreaView>
    );
    }

export default ActivityMain

const styles = StyleSheet.create({
    GoBack: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
    },
    GroupsButtonsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 460,
        top: 0,
        bottom: 0,
        //height: '100%',
        flexDirection: 'column',
        // backgroundColor: 'blue'

    },
    GroupInfoContainer: {
        width: 380,
        height: '10%',
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
        fontSize: 28,


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
    ButtonText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Poppins_400Regular',
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
    

});