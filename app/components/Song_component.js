import { Image, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Themes } from "../../assets/Themes";
import { millisToMinutesAndSeconds } from "../../utils";

export default function Song_component({song_idx, img, name, artist, nameAlbum, time}) {
    return (
        <View style={styles.container}>
            <View style={styles.songIndex}>
                <Text style={styles.anychars}>
                    {song_idx + 1}
                </Text>
            </View>
            <Image style={styles.albumPhoto} source={{uri: img}}></Image>
            <View style={styles.songNameArtist}>
                <Text style={styles.anychars} numberOfLines={1}>{name}</Text>
                <Text style={styles.anychars} numberOfLines={1}>{artist}</Text>
            </View>
            <View style={styles.songAlbum}>
                <Text style={styles.anychars} numberOfLines={1}>{nameAlbum}</Text>
            </View>
            <View style={styles.songDuration}>
                <Text style={styles.anychars}>{millisToMinutesAndSeconds(time)} </Text>
            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',     
    },
    songIndex: {
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    albumPhoto: {
        width: '15%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain'
    },
    songNameArtist: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '40%'
    },
    songAlbum: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',

    },
    songDuration: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%',

    },
    anychars: {
        color: "#fff",
        fontSize: 12,

    },
  });
  