import { View, SafeAreaView, Text, Image, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Images from '../../assets/Images';

export default function CheckInDetails({ navigation, route }) {
  const { CheckIn } = route.params;
  console.log(CheckIn)

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
    anger: Images.Anger,
    check: Images.check,
    flat: Images.flat,
    cool: Images.cool,
  }

  return (

    <View style={styles.container}>

      <View style={styles.close}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={30} color="white" />
        </Pressable>
      </View>

      <Image source={imageMap[CheckIn.image]} style={styles.backgroundImage} />
      <View style={styles.CheckInText}>
        <View style={styles.namecontainer}>
          <Text style={styles.CheckInTitle}>{CheckIn.user}</Text>
          <Image style={styles.Mood} source={moodMap[CheckIn.mood]} />
        </View>
        <Text style={styles.CheckInDescription}>{CheckIn.time}</Text>
        <Text style={styles.CheckInDescription}>{CheckIn.location}</Text>
        
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  namecontainer: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor:'red',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  backgroundImage: {
    position: 'absolute',
    top: -10,
    // bottom: 50,
    left: -20,
    right: -10,
    width: '110%',
    height: '65%',
    // backgroundColor: 'red',

  },
  ImageContain: {
    position: 'absolute',
    top: 0,
    // bottom: 50,
    left: -10,
    right: -10,
    shadowColor: 'darkgray',
    shadowOpacity: 1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 5,
    backgroundColor: 'red',
  },
  close: {
    //margin: 16,
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    // backgroundColor: 'red',
  },
  CheckInText: {
    marginTop: 400,
    padding: 16,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
    borderRadius: 8,
  },
  CheckInTitle: {
    fontSize: 40,
    fontFamily: 'Poppins_700Bold',
    color: '#5F5D58',
    fontWeight: 'bold',
  },
  CheckInDescription: {
    margin: 5,
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    
    // marginTop: 16,
  },
  Mood: {
    // marginTop: 20,
    width: 50,
    height: 50,
    // aspectRatio: 1,
  }
});
