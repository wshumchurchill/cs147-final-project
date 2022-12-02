import { View, SafeAreaView, Text, Image, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Images from '../../assets/Images';

export default function DestinationsScreen({ navigation, route }) {
    const { CheckIn } = route.params;

    const imageMap = {
      san_francisco: Images.sanFrancisco,
      lake_louise: Images.lakeLouise,
      alesund: Images.alesund,
      dog: Images.dog
    }

    const moodMap = {
      sad: Images.sad,
      smile: Images.Smile,
      anger: Images.Anger,
      check: Images.check,
      flat: Images.flat
    }

    return (
    <ImageBackground source={imageMap[CheckIn.image]} style={styles.backgroundImage}>
        <SafeAreaView style={styles.body}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="close" size={24} color="white" />
          </Pressable>
          <View style={styles.CheckInText}>
            <Text style={styles.CheckInTitle}>{CheckIn.user}</Text>
            <Text style={styles.CheckInDescription}>{CheckIn.time}</Text>
            <Text style={styles.CheckInDescription}>{CheckIn.location}</Text>
            <Image style={styles.Mood} source={moodMap[CheckIn.mood]} />

          </View>
        </SafeAreaView>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    backgroundImage: {
      width: '100%',
      height: '100%'
    },
    body: {
        margin: 16,
    },
    CheckInText: {
        marginTop: 64,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
    },
    CheckInTitle: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    CheckInDescription: {
        fontSize: 14,
        marginTop: 16,
    },
    Mood: {
        marginTop: 20,
        width: 25,
        height: 50,
        aspectRatio: 1,
    }
  });
  