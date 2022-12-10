import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
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
import CheckInTypeList from './CheckInTypeList';
import CheckInTypePicker from './CheckInTypePicker';
import CheckInTypeSticker from './CheckInTypeSticker';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native-web';
import { useIsFocused } from '@react-navigation/native';



const emojiNumberMap = {
    22: 'sad',
    30: 'cool',
    29: 'flat',
    23: 'smile',
    24: 'angry',
    28: 'check'
}
const typeNumberMap = {
    55: require('../../assets/Images/TriviaCorrect.png'),
    56: require('../../assets/Images/KarsonPhoto.png'),
    57: require('../../assets/Images/checkinmain.png')
}
export const typeImageMap ={
    55: 'activitycheckin',
    56: 'photocheckin',
    57: 'defaultcheckin',
}



export default function CheckInScreen({navigation, route}) {
    const isFocused = useIsFocused()


    // for emoji picker
    const [isModalVisible, setIsModalVisible] = useState(false);
    // const [showAppOptions, setShowAppOptions] = useState(false);
    const [pickedEmoji, setPickedEmoji] = useState(29);
    // const [selectedImage, setSelectedImage] = useState(null);

    const [pickedType, setPickedType] = useState(null);

    useEffect(() => {
        if (route.params?.imageType) {
            setPickedType(route.params.imageType)
        }
    }, [route.params])

    const onAddSticker = (params) => {
        setIsModalVisible(true);
    };
    const onModalClose = () => {
        setIsModalVisible(false);
    };

    const handlePickedType = (type) => {
        // setPickedType(type)
        console.log('type', type)

        if (typeImageMap[type] === "activitycheckin") {
            navigation.navigate("ActivityMain")

        } else if (typeImageMap[type] === "photocheckin") {
             navigation.navigate("Camera")
        } else {
            setPickedType(null)
        }
    }

    console.log("routeparams", route.params?.imageType)
    // for Check In Type Picker
    const [isTypeModalVisible, setIsTypeModalVisible] = useState(false);

    console.log('pickedTYpe', pickedType)
    
    const onChooseType = (params) => {
        setIsTypeModalVisible(true);
    }
    const finishChooseType = () => {
        setIsTypeModalVisible(false);
    }

    // for location switch
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    // for group dropdown
    const [groups, setGroups] = useState([]);
    const [selectableGroups, setSelectableGroups] = useState([])
    const [selectedGroup, setSelectedGroup] = useState("Family")
    useEffect(() => {
        setTimeout(() => {
            setGroups([
                {title: 'Family'},
                {title: 'Close Friends'},
                {title: 'Stanford'},
            ]);
        }, 1000);
    }, []);

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

    // const Emojis = 
    //     {
    //       anger: Images.Anger,
    //       sad: Images.sad,
    //       cool: Images.cool,
    //       flat: Images.flat,
    //       smile: Images.Smile,
          
    //     }
    // ;

    useEffect(() => {
        const fetchData = async () => {
            const {data: groupsData} = await supabase.from('groups').select()
            const {data: otherGroupsData} = await supabase.from('othergroups').select()

            const groups = [...groupsData, ...otherGroupsData].map((group) => {
                return {title: group.groupname}
            })

            setSelectableGroups(groups)
        }
        fetchData();
    }, [])
    
    console.log(uploadData)
    const uploadData = async () => {
        const {error} = await supabase.from('check-ins').insert({id: Math.floor(Math.random() * 10000), 
            image: (pickedType !== null ? typeImageMap[pickedType] : typeImageMap[57]), 
            user: 'Karson', 
            mood: emojiNumberMap[pickedEmoji],
            time: '10:22 PM', 
            location: (isEnabled ? 'Stanford, California': ''),
            groupname: selectedGroup
        })
        console.log(pickedType)
        navigation.navigate('Home')
    }

    console.log('selectedGroup', selectedGroup)

        // create render Image for checkindefault, photocheckin, and activities,
    return (
        <SafeAreaView style={styles.container}>

            <CheckInTypePicker isVisible={isTypeModalVisible} onClose={finishChooseType}>
                <CheckInTypeList onSelect={handlePickedType} onCloseModal={finishChooseType} />
            </CheckInTypePicker>
            <StatusBar style="auto" />
            
            <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
                <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
            </EmojiPicker>
            
            <LinearGradient colors={['#D3FCFF', 'white']} style={styles.linearGradient}>
                <View style={styles.TopContainer}>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.TitleText}>{'Check In'}</Text>
                    </View>
                </View>
            </LinearGradient>

            
            {pickedType ? <CheckInTypeSticker stickerSource={pickedType} stickerStyle={styles.CheckinDefault}/> : <Image style={styles.CheckinDefault} source={Images.checkindefault} />}
            {/* {pickedType ? <Text>True</Text> :<Text>False</Text>} */}
            <SelectDropdown
                        data={selectableGroups}
                        onSelect={(selectedItem, index) => {
                            setSelectedGroup(selectedItem.title)
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
                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'white'} size={20} />;
                        }}
                        dropdownIconPosition={'right'}
                        dropdownStyle={styles.DropdownDropdownStyle}
                        rowStyle={styles.DropdownRowStyle}
                        rowTextStyle={styles.DropdownRowTxtStyle}
                    />
                    
                    {/* <Pressable onPress={() => navigation.navigate('ProfileTab', {Profiles: Profile})}>
                        <Image style={styles.ProfileImage} source={Images.temp_profile} />
                    </Pressable> */}
            <Pressable onPress={onChooseType} style={styles.PressableAdd}>
                <Image style={styles.AddImage} source={Images.addcheckin} />
            </Pressable>
            {/* <Pressable onPress={() => navigation.navigate('CheckInTypePicker')} style={styles.PressableAdd}>
                <Image style={styles.AddImage} source={Images.addcheckin} />
            </Pressable> */}

            
            <View style={styles.bottomContainer}>
                <View style={styles.CheckinTextStyle}>
                    <Text style={styles.CheckinText}>
                        Karson is checking in @ 10:22 pm
                    </Text>
                </View>
                <View style={styles.emojiSelectionContainer}>
                    <Text style={styles.emojiContainerText}>
                        I'm feeling
                    </Text>
                    <View style={styles.selector}>
                        {pickedEmoji !== 29 ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : <Image style={styles.CheckImage} source={Images.flat}/>}
                        
                        <CircleButton onPress={onAddSticker} />
                    </View>
                    <Text style={styles.emojiContainerText}>
                        today
                    </Text>
                </View>
                
                <View style={styles.LocationSwitch}>
                    <Text style={styles.LocationText}>
                        {isEnabled ? 'Stanford, California': 'Add Location'}
                    </Text>

                    <Switch
                        trackColor={{ false: "#767577", true: "#037CFF" }}
                        thumbColor={isEnabled ? "white" : "white"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            
            <View style={styles.FloatingButton}>
                <Pressable onPress={uploadData}>
                    <Image style={styles.ConfirmImage} source={Images.check} />
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
    LocationSwitch: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        borderWidth: 2,
        padding: 8,
        borderColor: '#007BC0',
        borderRadius: 18,

    },
    CheckinTextStyle: {
        width: '80%',
    },
    LocationText: {
        fontSize: 20,
        fontFamily: 'Poppins_400Regular',
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
    },
    selector: {
        borderColor: '#007BC0',
        borderWidth: 2,
        marginLeft: 15,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: 100,
    },
    emojiSelectionContainer: {
        // padding: 8,
        marginTop: 10,
        height: 50,
        width: '80%',
        borderColor: '#007BC0',
        borderRadius: 18,
        // borderTopLeftRadius: 18,
        // borderTopRightRadius: 18,
        
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor:'blue',

    },
    emojiContainerText:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        marginLeft: 15, 
    },
    bottomContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#007BC0',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 2,
        zIndex: 0,
        position: 'absolute',
        top: 300,
        left: 1,
        right: 1,
        bottom: -10,

    },
    CheckinText: {
        marginTop: 100,
        fontSize: 30,
        fontFamily: 'Poppins_400Regular',
        color: 'black',
    },
    CheckinDefault: {
        height: 275,
        width: 246,
        position: 'absolute',
        top: 110,
        bottom: 385,
        zIndex: 1,
        backgroundColor:'white',
    },
    CheckinContainer: {
        position: 'absolute',
        height: 270,
        width: 270,
        backgroundColor: 'transparent',
        top: 110,
        bottom: 1,
        zIndex: 100,
        alignItems: 'center',
        justifyContent:'center',
    },
    FloatingButton: {
        position: 'absolute',
        bottom: 70,
        height: 100,
        width: 100,
        backgroundColor: 'white',

    },
    CheckImage: {
        
    },
    ConfirmImage: {
        height: 100,
        width: 100,
    },
    TitleContainer: {
        position: 'absolute',
        left: 32.2,
        top: 8.8,
        height: 60,
        width: 200,
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
        // backgroundColor: 'red',
    },
    divider: {width: 0},
    GroupButton: {
        position: 'absolute',
        // left: 0,
        top: 95,
        right: 40,
        height: 40,
        width: 120,
        backgroundColor: '#2DA8EE',
        borderColor: '#2DA8EE',
        borderRadius: 10,
        borderWidth: 1,
        zIndex: 2,
        
    },
    ButtonText: {
        fontSize: 20,
        // backgroundColor: 'red',
        // textDecorationLine: 'underline',
        color: 'white',
        fontFamily: 'Poppins_400Regular',
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
        marginLeft: 17, 
        color: '#2DA8EE',
        fontFamily: 'Poppins_400Regular',
        textAlign: 'left',
        fontSize: 15,
    },
    PressableAdd: {
        position: 'absolute',
        top: 57,
        left: 70,
        zIndex: 2,
    },
    AddImage: {
        height: 35,
        width: 35,
        // backgroundColor: 'red',
        margin: 2,
        position: 'absolute',
        top: 40,
        zIndex: 2,
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
        width: 400,
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