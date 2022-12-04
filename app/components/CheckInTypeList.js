import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, FlatList, Image, Platform, Pressable } from 'react-native';

export default function CheckInTypeList({ onSelect, onCloseModal }) {
  const navigation = useNavigation();
  const [type] = useState([
    require('../../assets/Images/activitycheckin.png'),
    require('../../assets/Images/photocheckin.png'),
    require('../../assets/Images/defaultcheckin.png')
  ]);

  const images = [
    {name: 55, source:  require('../../assets/Images/activitycheckin.png')},
    {name: 56, source: require('../../assets/Images/photocheckin.png')},
    {name: 57, source: require('../../assets/Images/defaultcheckin.png')}
  ]

  // implement onPress and onSelect for photos and activities check in?
  return (
    <FlatList
      vertical
      showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
      data={images}
      contentContainerStyle={styles.listContainer}
      keyExtractor={(item, index) => index}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item.name);
              onCloseModal();
            }}
            >
            <Image source={item.source} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  image: {
    width: 150,
    height: 200,
    // backgroundColor: 'red',
    
    // margin: 5,
  },
});
