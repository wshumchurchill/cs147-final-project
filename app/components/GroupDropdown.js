import { View, SafeAreaView, Text, Image, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function DestinationsScreen({ navigation, route }) {
    const { Groups } = route.params;

    return (
    
    <SafeAreaView style={styles.body}>
      <Pressable onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={24} color="white" />
      </Pressable>
      <View style={styles.CheckInText}>
        <Text style={styles.GroupNameText}>{CheckIn.user}</Text>
        <Text style={styles.CheckInDescription}>{CheckIn.time}</Text>
        <Text style={styles.CheckInDescription}>{CheckIn.location}</Text>
        <Image style={styles.Mood} source={CheckIn.mood} />

      </View>
    </SafeAreaView>
    
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
    body: {
        margin: 16,
    },
    CheckInText: {
        marginTop: 64,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
    },
    GroupNameText: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    },
  });
  