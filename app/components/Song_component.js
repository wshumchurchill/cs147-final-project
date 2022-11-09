import { Pressable, Image, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Themes } from "../../assets/Themes";
import { millisToMinutesAndSeconds } from "../../utils";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Song_component({song_idx, img, name, artist, nameAlbum, time, external_urls, preview_url}) {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate("PlayScreen", {preview: preview_url})} style={styles.playbutton}>
                <AntDesign name="play" size={24} color="green" />
            </Pressable>
            < Pressable onPress={() => navigation.navigate("SongDetails", {detail: external_urls})} style={{flexDirection: 'row'}}>
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
            </Pressable>

        </View>
    )
}



const styles = StyleSheet.create({
    playbutton: {
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
      flexDirection: 'row',     
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
  