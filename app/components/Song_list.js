import { View, Text, StyleSheet, Image, FlatList, ImageBackground, SafeAreaView } from 'react-native';
import { Themes } from '../../assets/Themes';
import Song_component from "./Song_component";


export default function Song_list ({tracks}) {
    const renderSong = ({ item, index }) => {
        
        return <Song_component
          song_idx={index}
          img={item.album.images[1].url}
          name={item.name}
          artist={item.artists[0].name}
          nameAlbum={item.album.name}
          time={item.duration_ms}
          />
    }

    return(
        <SafeAreaView>
            <View style={styles.top}>
                <Image source={require('../../assets/spotify-logo.png')} style={styles.image}></Image>
                <Text style={styles.chars}> My Top Tracks</Text>
                
            </View>

        <FlatList 
            data={tracks} 
            renderItem={(item) => renderSong(item)} 
            keyExtractor={(item, index) => index}>

        </FlatList>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    top: {
      height: '10%', 
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    image: {
    //   resizeMode: 'contain',
    //   width: '10%',
    //   aspectRatio: 1,
      width: 48,
      height: 48,
      marginRight: 10,
    },
    chars:{
        color: Themes.colors.white,
        width: '80%',
        fontSize: 20,
        fontWeight: 'bold',
    }


  });