import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { View, Image, StyleSheet } from 'react-native';
import Images from '../../assets/Images';

const typeNumberMap = {
    55: require('../../assets/Images/TriviaCorrect.png'),
    56: require('../../assets/Images/KarsonPhoto.png'),
    57: require('../../assets/Images/checkinmain.png')
}

export default function CheckInTypeSticker({ stickerSource, stickerStyle }) {
    console.log("stickerSource", stickerSource)
    return (
    <Image
            source={typeNumberMap[stickerSource]}
            resizeMode="contain"
            style={stickerStyle}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
  });
