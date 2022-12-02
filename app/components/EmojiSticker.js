import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { View, Image, StyleSheet } from 'react-native';

export default function EmojiSticker({ imageSize, stickerSource }) {
  return (
    <View style={styles.stickerContainer}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    stickerContainer: {
      top: 0,
       
    },
  });

