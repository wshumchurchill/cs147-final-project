import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function CheckInTypePicker({ isVisible, children, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Customize My Check In</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="black" size={30} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '75%',
    width: '98%',
    marginLeft: '1%',
    
    // borderTopWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
        width: 5, 
        height: 5,
    },
    shadowRadius: 5,
  },
  titleContainer: {
    height: '8%',
    backgroundColor: 'white',
    // borderTopWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
  },
});
