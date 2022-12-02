import { View, SafeAreaView, Text, Image, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ProfileTab({ navigation, route }) {
    const { Profiles } = route.params;

    return (
    <ImageBackground source={Profiles.image} style={styles.backgroundImage}>
        <SafeAreaView style={styles.body}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="close" size={24} color="white" />
          </Pressable>
          <View style={styles.CheckInText}>
            <Text style={styles.CheckInTitle}>{Profiles.name}</Text>
            <Text style={styles.CheckInTitle}>{Profiles.strongest1}</Text>
            <Text style={styles.CheckInDescription}>{Profiles.strongest2}</Text>
            <Text style={styles.CheckInDescription}>{Profiles.numofcheckins}</Text>
            <Image style={styles.Mood} source={Profiles.group1} />

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
  