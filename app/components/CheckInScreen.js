import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
import { StatusBar } from 'expo-status-bar';

export default function CheckInScreen({ navigation}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showAppOptions, setShowAppOptions] = useState(false);
    const [pickedEmoji, setPickedEmoji] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const onAddSticker = () => {
        setIsModalVisible(true);
    };
    
      const onModalClose = () => {
        setIsModalVisible(false);
    };

    const [groups, setGroups] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setGroups([
                {title: 'Family ❤️'},
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

    const Emojis = 
        {
          anger: Images.Anger,
          sad: Images.sad,
          cool: Images.cool,
          flat: Images.flat,
          smile: Images.Smile,
          
        }
    ;
        // create stylesheet for optionContainers, optionRow,
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.optionsContainer}>
                <View style={styles.optionsRow}>
                    <CircleButton onPress={onAddSticker} />
                </View>
            </View>
            <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
                <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
            </EmojiPicker>
            <StatusBar style="auto" />
            <LinearGradient colors={['#D3FCFF', 'white']} style={styles.linearGradient}>
                <View style={styles.TopContainer}>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.TitleText}>{'Check In'}</Text>
                    </View>
                </View>
            </LinearGradient>
            
            <Image style={styles.CheckinDefault} source={Images.checkindefault} />
            
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
                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'white'} size={20} />;
                        }}
                        dropdownIconPosition={'right'}
                        dropdownStyle={styles.DropdownDropdownStyle}
                        rowStyle={styles.DropdownRowStyle}
                        rowTextStyle={styles.DropdownRowTxtStyle}
                    />
                    

            <Pressable onPress={() => navigation.navigate('ProfileTab', {Profiles: Profile})} style={styles.PressableAdd}>
                <Image style={styles.AddImage} source={Images.addcheckin} />
            </Pressable>

            
            <View style={styles.bottomContainer}>
                <Text style={styles.CheckinText}>
                    Karson is checking in @ 9:41 am
                </Text>
                <View style={styles.emojiSelectionContainer}>
                    <Text style={styles.emojiContainerText}>
                        I'm feeling
                    </Text>
                    

                </View>
            </View>
            
            <View style={styles.FloatingButton}>
                <Pressable onPress={() => navigation.navigate('CheckinTab', {Profiles: Profile})}>
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
    text: {
        textAlign: 'center',
        
        fontSize: 18,
    },
    emojiSelectionContainer: {
        padding: 8,
        marginTop: 10,
        height: 50,
        width: '80%',
        borderColor: '#007BC0',
        borderRadius: 30,
        borderWidth: 2,

    },
    emojiContainerText:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'center',
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
        fontSize: 40,
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
        height: 57,
        width: 57,

    },
    CheckImage: {
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
    optionsContainer: {
        position: 'absolute',
        bottom: 80,
      },
      optionsRow: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      },

});