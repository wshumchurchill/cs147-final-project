import { Pressable, Image, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Themes } from "../../assets/Themes";



export default function Functional({pressMe}) {
    return (
      <Pressable onPress={() => pressMe()} style={styles.pressed}>
        <View style={styles.container}>
            <Image style={styles.spotifyLogo}
                source={require('./../../assets/spotify-logo.png')}
            />
            <Text style={styles.words}>
                CONNECT WITH SPOTIFY
            </Text>
        </View>
      </Pressable>

    )
  }




const styles = StyleSheet.create({
    pressed: {
        height: '5%',
        width: '50%',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: Themes.colors.spotify,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
    },
    words: {
        flexDirection: 'row',
        fontWeight: 'bold',
        color: Themes.colors.white,
        marginRight: 24,

    },
    spotifyLogo: {
        marginLeft: 24,
        width: '10%',
        height: '80%',

    }

  });