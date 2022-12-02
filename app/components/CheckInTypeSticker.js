import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { View, Image, StyleSheet } from 'react-native';
import Images from '../../assets/Images';

const typeNumberMap = {
    54: require('../../assets/Images/TriviaCorrect.png'),
    55: require('../../assets/Images/KarsonPhoto.png'),
    56: require('../../assets/Images/checkinmain.png')
}

export default function CheckInTypeSticker({ stickerSource, stickerStyle }) {
    return (
        <Image
            source={stickerSource}
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
