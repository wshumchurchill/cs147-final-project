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

export default function FeedScreen({ navigation }) {
    const isFocused = useIsFocused()

    const [checkIns, setCheckIns] = useState([])

    
    const CheckIns = [
        {
          id: 1,
          image: Images.lakeLouise,
          user: 'Scoob',
          mood: Images.sad,
          time: '4:35 PM',
          location: 'Lake Louise'
        },
        { 
          id: 2,
          image: Images.sanFrancisco,
          user: 'Jeff',
          mood: Images.Smile,
          time: '4:35 PM',
          location: 'San Francisco'
        },
        { 
          id: 3,
          image: Images.alesund,
          user: 'Waldo',
          mood: Images.Anger,
          time: '4:35 PM',
          location: 'Alesund',
        },
        { 
            id: 4,
            image: Images.dog,
            user: 'Winnie',
            mood: Images.Smile,
            time: '4:35 PM',
            location: 'Palo Alto',
        },
    ];

    const Profile = 
        {
          id: 1,
          image: Images.temp_profile,
          group1: Images.dog,
          group2: Images.cat,
          strongest1:'family', 
          strongest2: 'close friends',
          numofcheckins: '1000',
          name: 'Karson',
        }
    ;

    const imageMap = {
        san_francisco: Images.sanFrancisco,
        lake_louise: Images.lakeLouise,
        alesund: Images.alesund,
        dog: Images.dog,
        activitycheckin: Images.triviacorrect,
        photocheckin: Images.karsonphoto,
        defaultcheckin: Images.checkindefault,
    }

    const moodMap = {
        sad: Images.sad,
        smile: Images.Smile,
        angry: Images.Anger,
        check: Images.check,
        flat: Images.flat,
        cool: Images.cool,
    }

    const [groups, setGroups] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setGroups([
                {title: 'Family'},
                {title: 'Close Friends'},
                {title: 'Stanford'},
            ]);
        }, 1000);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const {data, error} = await supabase.from('check-ins').select().order('created_at',{ascending: false})
            console.log('data', data)
            setCheckIns(data)
        }

        fetchData();
    }, [isFocused])


    // const Groups = [
    //     {
    //         id: 1,
    //         image: Images.dog,
    //         name: 'Family',
    //     },
    //     {
    //         id: 2,
    //         image: Images.cat,
    //         name: 'Friends',
    //     }
    // ];

    const renderCheckIn = ({ item }) => {


       return  <View style={styles.CheckInContainer}>
            <Pressable onPress={() => navigation.navigate('CheckInDetails', { CheckIn: item})} style={{flexDirection: 'row'}}>
                <View style={styles.CheckInText}>
                    <View style={styles.CheckInTitle}>
                        <Text style={styles.CheckInTitleText}>{item.user}</Text>
                        <Image style={styles.Mood} source={moodMap[item.mood]} />
                    </View>
                    <Text style={styles.CheckInDescription}>{item.time}</Text>
                    <Text style={styles.CheckInDescription}>{item.location}</Text>
                </View>
                <Image style={styles.CheckInImage} source={imageMap[item.image]} />
            </Pressable>
        </View>
    };

    //pressable for Profile Tabs doesn't work


    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#D3FCFF', 'white']} style={styles.linearGradient}>
                <View style={styles.TopContainer}>
                    <SelectDropdown
                        data={groups}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        defaultButtonText={'Family'}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem.title;
                        }}
                        rowTextForSelection={(item, index) => {
                            return item.title;
                        }}
                        buttonStyle={styles.GroupButton}
                        buttonTextStyle={styles.ButtonText}
                        renderDropdownIcon={isOpened => {
                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#2DA8EE'} size={30} />;
                        }}
                        dropdownIconPosition={'right'}
                        dropdownStyle={styles.DropdownDropdownStyle}
                        rowStyle={styles.DropdownRowStyle}
                        rowTextStyle={styles.DropdownRowTxtStyle}
                    />
                    <View style={styles.divider} />

                    <Pressable onPress={() => navigation.navigate('ProfileTab', {Profiles: Profile})}>
                        <Image style={styles.ProfileImage} source={Images.temp_profile} />
                    </Pressable>

                </View>
            </LinearGradient>
            
            <View style={styles.listContainer}>
                <FlatList
                    data={checkIns}
                    renderItem={renderCheckIn}
                    keyExtractor={(item) => item.id}
                    
                />
            </View>
            <View style={styles.FloatingButton}>
                <Pressable onPress={() => navigation.navigate('CheckInScreen')}>
                    <Image style={styles.CheckImage} source={Images.check} />
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    FloatingButton: {
        position: 'absolute',
        right: 50,
        bottom: 70,
        height: 57,
        width: 57,

    },
    CheckImage: {
        shadowColor: 'darkgray',
        shadowOpacity: 0.8,
        shadowOffset: {
            width: 5, 
            height: 5,
        },
        shadowRadius: 5,
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
        // backgroundColor: 'red',
    },
    divider: {width: 0},
    GroupButton: {
        position: 'absolute',
        left: 0,
        height: 60,
        width: 200,
        backgroundColor: 'transparent',
        borderColor: '#2DA8EE',
        borderRadius: 10,
        borderWidth: 1,
    },
    ButtonText: {
        fontSize: 30,
        // backgroundColor: 'red',
        textDecorationLine: 'underline',
        color: '#2DA8EE',
        fontFamily: 'Poppins_700Bold',
    },
    DropdownDropdownStyle: {
        backgroundColor: '#D3FCFF',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    DropdownRowStyle: {
        backgroundColor: '#B0E2FF',
        
    },
    DropdownRowTxtStyle: {
        marginLeft: 30, 
        color: '#2DA8EE',
        fontFamily: 'Poppins_400Regular',
        textAlign: 'left',
    },
    ProfileImage: {
        height: 50,
        width: 50,
        // backgroundColor: 'red',
        margin: 2,
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
    listContainer: {
        alignItems: 'center',
        position: 'absolute',
        width: 460,
        top: 110,
        bottom: 0,
        // height: 600,
        flexDirection: 'column',
        // backgroundColor: 'blue'
    },
    CheckInContainer: {
        width: 380,
        height: '35%',
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
    },
    CheckInImage: {
        width: 150,
        height: 150,
        borderRadius: 20,
        margin: 5,
    },
    Mood: {
        width: 25,
        height: 25,

    },
    CheckInText: {
        marginTop: 10,
        flex: 1,
        justifyContent: 'flex-start',
        marginHorizontal: 16,
        flexDirection: 'column',
        padding: 3,

    },
    CheckInTitle: {
        marginBottom: 4,
        marginRight: 5,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    CheckInDescription: {
        color: 'gray',
        fontFamily: 'Poppins_400Regular',
    },
    CheckInTitleText: {
        color: '#686868',
        marginRight: 5, 
        fontSize: 25,
        fontFamily: 'Poppins_600SemiBold',
    }

});