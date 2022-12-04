import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
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

export default function ProfileTab({ navigation, route }) {
  const { Profiles } = route.params;

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#D3FCFF', 'white']} style={styles.linearGradient}>
        <View style={styles.TopContainer}>

          <View style={styles.TitleContainer}>
            <Text style={styles.TitleText}>{'Profile'}</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.imagecontainer}>
        <Image source={Profiles.image} style={styles.profileimage} />
      </View>
      <View style={styles.maincontainer}>
        <View style={styles.topcontainer}>
          <Text style={styles.profiletext}>Karson</Text>
          <View style={styles.lastcheckin}>
            <Text style={styles.checkinText}>
              Last Checked in with Family @ 9:41 am
            </Text>
          </View>
        </View>
        <View style={styles.middlecontainer}>
          <Text style={styles.activityText}>Recent Activity</Text>
          <View style={styles.recentactivity}>
            <Image source={Profiles.group1} style={styles.activitystyle1} />
            <Image source={Profiles.group2} style={styles.activitystyle2} />
          </View>
        </View>
        <View style={styles.bottomcontainer}>
          <View style={styles.allgroups}>
            <Text style={styles.grouptype1}>
              My Groups
            </Text>
            <Text style={styles.grouptype2}>
              Other Groups
            </Text>
          </View>
          <View style={styles.listgroups}>
            <View style={styles.eachgroup}>
              <Text style={styles.grouptext}>
                1°   Family
              </Text>
            </View>
            <View style={styles.eachgroup}>
              <Text style={styles.grouptext}>
                2°   Close Friends
              </Text>
            </View>
            <View style={styles.eachgroup}>
              
            </View>
            <View style={styles.eachgroup}>
              
            </View>
            <View style={styles.eachgroup}>
              
            </View>
            

          </View>
        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  grouptext: {
    marginLeft: 20,
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    color: '#787878'
  },
  eachgroup: {
    height: '20%',
    width: '100%',
    borderColor: 'black',
    borderTopWidth: 1,
    // borderBottomWidth: 1,
    justifyContent: 'center',
    borderColor: '#E9E9E9',
  },
  listgroups: {
    bottom: 0,
    height: '80%',
    width: '100%',
    position: 'absolute',
    
    // justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor:'red',
  },
  grouptype1: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 20,
    textDecorationLine: 'underline',
    
    //backgroundColor: 'red',
  },
  grouptype2: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 20,
    color: '#787878'
    //backgroundColor: 'red',
  },
  allgroups: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    // position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  activitystyle1: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginLeft: 20,
  },
  activitystyle2: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginLeft: 5,
  },
  recentactivity: {
    flexDirection: 'row',
    // position: 'absolute',
    bottom: 0,
    height: '70%',
    width: '100%',
    borderTopWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#E9E9E9',
  },
  activityText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 20,
    marginLeft: 20,
  },
  checkinText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },
  lastcheckin: {
    position: 'absolute',
    bottom: 0,
    height: '30%',
    width: '100%',
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E9E9E9',
  },
  profiletext: {
    marginTop: 10,
    fontFamily: 'Poppins_400Regular',
    fontSize: 24,
  },
  maincontainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 180,
    left: 30,
    right: 30,
    bottom: 0,
  },
  topcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',
    borderWidth: 1,
    borderRadius: 20,
    width: '100%',
    // top: 190,
    // left: 30,
    // right: 30,
    height: '23%',
    // height: 600,
    flexDirection: 'column',
    // backgroundColor: 'blue'
    borderColor: '#E9E9E9',
  },
  middlecontainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    // position: 'absolute',
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 20,
    // top: 370,
    // left: 30,
    // right: 30,
    width: '100%',
    height: '20%',
    borderColor: '#E9E9E9',
    // height: 600,
    flexDirection: 'column',
    // backgroundColor: 'blue'
  },
  bottomcontainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    // position: 'absolute',
    borderColor: '#E9E9E9',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 15,
    // top: 500,
    // left: 30,
    // right: 30,
    height: '50%',
    width: '100%',
    // height: 600,
    flexDirection: 'column',
    // backgroundColor: 'blue'
  },
  profileimage: {
    width: 120,
    height: 120,
    // borderColor: 'black',
    // borderWidth: 0.5,
    zIndex: 10,
  },
  imagecontainer: {
    position: 'absolute',
    top: 120,
    width: 120,
    height: 120,
    // backgroundColor: 'red',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 8,
    zIndex: 9,
  },
  DeleteImage: {
    height: 50,
    width: 50,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',


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
    width: 57,
    // backgroundColor: 'red',

  },


});