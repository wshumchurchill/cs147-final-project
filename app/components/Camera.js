import { useNavigation } from "@react-navigation/native"
import { View, Text, SafeAreaView, FlatList, Pressable, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Images from '../../assets/Images';
import SelectDropdown from 'react-native-select-dropdown'
import { useState, useEffect, useRef } from 'react';
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

const Camera = () => {

    const navigation = useNavigation();
    console.log(navigation)

    // create render Image for checkindefault, photocheckin, and activities,
    return (
        <View style={styles.container}>
            <View style={styles.linearGradient}>
                <View style={styles.TopContainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={30} color="black" />
                    </Pressable>

                </View>
            </View>
            <Image source={Images.largeKarson} style={styles.ImageContainer} />
            <View style={styles.FloatingButton}>
                <Pressable onPress={() => navigation.navigate("MainTab", { screen: "CheckInScreen", params: { imageType: 56 } })}>
                    <Image source={Images.camerabutton} style={styles.CameraButton} />
                </Pressable>
            </View>



        </View>
    );
}

export default Camera

const styles = StyleSheet.create({
    FloatingButton: {
        position: 'absolute',
        bottom: 50,
        height: 100,
        width: 100,
        // backgroundColor: 'red',
        zIndex: 3,
    },
    CameraButton: {
        height: 100,
        width: 100,
    },
    ImageContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        // backgroundColor: 'red',
        zIndex: 1,
    },
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
        // zIndex: 2,
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
        top: 0,
        height: 200,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: '100%',
        zIndex: 2,
        // backgroundColor: 'red',
    },


});