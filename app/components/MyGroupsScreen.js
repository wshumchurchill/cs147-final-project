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

export default function MyGroupsScreen({ navigation }) {

    const isFocused = useIsFocused()

    const [groups, setGroups] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const {data, error} = await supabase.from('groups').select()
            console.log('data', data)
            setGroups(data)
        }

        fetchData();
    }, [isFocused])
    

    const renderGroup = ({ item }) => {

        return  <View style={styles.GroupContainer}>
             <Pressable onPress={() => navigation.navigate('ViewGroupDetails', { Group: item})} style={{flexDirection: 'row'}}>
                <Text style={styles.GroupTitleText}>{item.groupname}</Text>
             </Pressable>
         </View>
    };

    

    
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#D3FCFF', 'white']} style={styles.linearGradient}>
                <View style={styles.TopContainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={30} color="black" />
                    </Pressable>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.TitleText}>{'My Groups'}</Text>
                    </View>
                </View>
            </LinearGradient>
            
            <View style={styles.listContainer}>
                <FlatList
                    data={groups}
                    renderItem={renderGroup}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.FloatingButton}>
                <Pressable onPress={() => navigation.navigate('GroupCreationScreen')}>
                    <AntDesign name="pluscircleo" size={57} color="black" />
                </Pressable>
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
        top: 110,
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
    // ButtonText: {
    //     fontSize: 20,
    //     color: 'white',
    //     fontFamily: 'Poppins_400Regular',
    // },
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
    

});