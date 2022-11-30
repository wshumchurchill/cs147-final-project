import { View, Text, SafeAreaView, FlatList, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Images from '../../assets/Images';
import {useFonts} from '@expo-google-fonts/poppins';

export default function FeedScreen({ navigation }) {
    // let [fontsLoaded] = useFonts({
    //     Poppins_100Thin,
    //     Poppins_100Thin_Italic,
    //     Poppins_200ExtraLight,
    //     Poppins_200ExtraLight_Italic,
    //     Poppins_300Light,
    //     Poppins_300Light_Italic,
    //     Poppins_400Regular,
    //     Poppins_400Regular_Italic,
    //     Poppins_500Medium,
    //     Poppins_500Medium_Italic,
    //     Poppins_600SemiBold,
    //     Poppins_600SemiBold_Italic,
    //     Poppins_700Bold,
    //     Poppins_700Bold_Italic,
    //     Poppins_800ExtraBold,
    //     Poppins_800ExtraBold_Italic,
    //     Poppins_900Black,
    //     Poppins_900Black_Italic,
    // })
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
          id: 1,
          image: Images.sanFrancisco,
          user: 'Jeff',
          mood: Images.Smile,
          time: '4:35 PM',
          location: 'San Francisco'
        },
        { 
          id: 1,
          image: Images.alesund,
          user: 'Waldo',
          mood: Images.Anger,
          time: '4:35 PM',
          location: 'Alesund'
        }
    ];

    // const Profile = [
    //     {
    //       id: 1,
    //       image: Images.temp_profile,
    //       group1: Images.dog,
    //       group2: Images.cat,
    //       strongest: {fam: 'family', close: 'close friends'},
    //       numofcheckins: 1000
    //     }
    // ];

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

    const renderCheckIn = ({ item }) => (
        <View style={styles.CheckInContainer}>
            <Pressable onPress={() => navigation.navigate('CheckInDetails', { CheckIn: item})} style={{flexDirection: 'row'}}>
                <View style={styles.CheckInText}>
                    <View style={styles.CheckInTitle}>
                        <Text style={styles.CheckInTitle}>{item.user}</Text>
                        <Image style={styles.Mood} source={item.mood} />
                    </View>
                    <Text style={styles.CheckInDescription}>{item.time}</Text>
                    <Text style={styles.CheckInDescription}>{item.location}</Text>
                </View>
                <Image style={styles.CheckInImage} source={item.image} />
            </Pressable>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#2da8ee','white']} style={styles.linearGradient}>
                <View style={styles.TopContainer}>
                    <Text style={styles.ButtonText}>{'Family'}</Text>
                </View>
            </LinearGradient>
            
            <View style={styles.listContainer}>
                <FlatList
                    data={CheckIns}
                    renderItem={renderCheckIn}
                    keyExtractor={(item) => item.id}
                />
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
    TopContainer:{
        flexDirection: 'row',
        height: 150,
        width: 380,
        justifyContent: 'space-between',
        margin: 10,
    },
    ButtonText: {
        margin: 5,
        fontSize: 40,
        textDecorationLine: 'underline',
        color: 'blue',
        
    },
    ProfileImage: {
        height: 50,
        width: 50,
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
        top: 100,
        bottom: 0,
        // height: 600,
        flexDirection: 'column',
        // backgroundColor: 'blue'
    },
    CheckInContainer: {
        width: 400,
        height: '35%',
        flex: 1,
        margin: 20,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'gray',
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
    },
    Mood: {
        width: 25,
        height: 25,

    },
    CheckInText: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginHorizontal: 16,
        flexDirection: 'column',
    },
    CheckInTitle: {
        marginBottom: 4,
        flexDirection: 'row',
    },
    CheckInDescription: {
        color: 'gray',
    },

});